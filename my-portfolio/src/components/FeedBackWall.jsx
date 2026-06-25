import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../styles/feedback.css";

import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../data/firebase";

export default function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "feedbacks"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setFeedbacks(data);
    });

    return () => unsub();
  }, []);

  const [currentUser] = useState("Asma");

  const [isAdmin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const [replyText, setReplyText] = useState({});
  const [sortType, setSortType] = useState("newest");

  useEffect(() => {
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
}, [feedbacks]);

  const reactionTypes = ["❤️", "😮", "🔥", "😊", "👍", "👌"];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.comment) return;

  const newFeedback = {
    ...form,
    id: Date.now(),
    owner: form.name,
    reactions: [],
    replies: [],
  };

  try {
    await addDoc(collection(db, "feedbacks"), newFeedback);

    console.log("Firebase success");

    await emailjs.send(
      "service_5p5ituc",
      "template_45v960a",
      {
        name: form.name,
        rating: "⭐".repeat(Number(form.rating)),
        stars: `${form.rating}/5`,
        message: form.comment,
      },
      "UKXR8Fz-i1rTXltvi"
    );

    console.log("Email success");

    setForm({
      name: "",
      rating: 5,
      comment: "",
    });

  } catch (error) {
    console.error("ERROR:", error);
  }
};

  const handleReplyChange = (id, value) => {
    setReplyText({
      ...replyText,
      [id]: value,
    });
  };

  const addReply = (id) => {
    if (!replyText[id]) return;

    setFeedbacks((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,

              replies: [
                ...item.replies,

                {
                  id: Date.now(),

                  name: currentUser,

                  owner: currentUser,

                  text: replyText[id],
                },
              ],
            }
          : item,
      ),
    );

    setReplyText({
      ...replyText,
      [id]: "",
    });
  };

  const addReaction = (id, emoji) => {
    setFeedbacks((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,

              reactions: [...item.reactions, emoji],
            }
          : item,
      ),
    );
  };

  const deleteFeedback = async (id) => {
  await deleteDoc(doc(db, "feedbacks", id));
};

  const deleteReply = (feedbackId, replyId) => {
    setFeedbacks((prev) =>
      prev.map((item) =>
        item.id === feedbackId
          ? {
              ...item,

              replies: item.replies.filter((reply) => reply.id !== replyId),
            }
          : item,
      ),
    );
  };

  const sortedFeedbacks = () => {
    const data = [...feedbacks];

    if (sortType === "highest") {
      return data.sort((a, b) => b.rating - a.rating);
    }

    if (sortType === "lowest") {
      return data.sort((a, b) => a.rating - b.rating);
    }

    return data;
  };

  return (
    <section className="feedback-section page-transition" id="feedBackWall">
      <h2>💬 Feedback Wall</h2>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="👤 Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <select name="rating" value={form.rating} onChange={handleChange}>
          <option value="5">⭐⭐⭐⭐⭐ (5)</option>

          <option value="4">⭐⭐⭐⭐ (4)</option>

          <option value="3">⭐⭐⭐ (3)</option>

          <option value="2">⭐⭐ (2)</option>

          <option value="1">⭐ (1)</option>
        </select>

        <textarea
          name="comment"
          placeholder="💬 Your feedback..."
          value={form.comment}
          onChange={handleChange}
        />

        <button type="submit">🚀 Submit Feedback</button>
      </form>

      <div className="sort-buttons">
        <button onClick={() => setSortType("newest")}>Newest</button>

        <button onClick={() => setSortType("highest")}>Highest Rating</button>

        <button onClick={() => setSortType("lowest")}>Lowest Rating</button>
      </div>

      <div className="feedback-list">
        <AnimatePresence>
          {sortedFeedbacks().map((item) => (
            <motion.div
              key={item.id}
              className="feedback-card"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.3,
              }}
              layout
            >
              <h4>
                👤 {item.name}
                {Number(item.rating) === 5 && (
                  <span className="featured">🌟 Featured</span>
                )}
              </h4>

              <p>
                {"⭐".repeat(Number(item.rating))}({item.rating}/5)
              </p>

              <p>{item.comment}</p>

              {/* EMOJI REACTIONS */}

              <div className="reaction-bar">
                {reactionTypes.map((emoji) => (
                  <button
                    type="button"
                    key={emoji}
                    onClick={() => addReaction(item.id, emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>

              {/* SHOW REACTIONS */}

              <div className="reactions">
                {reactionTypes.map((emoji) => {
                  const count = item.reactions.filter(
                    (reaction) => reaction === emoji,
                  ).length;

                  return count > 0 ? (
                    <span key={emoji} className="reaction-item">
                      {emoji} {count}
                    </span>
                  ) : null;
                })}
              </div>

              {/* DELETE FEEDBACK */}

              {isAdmin && (
                <button type="button" onClick={() => deleteFeedback(item.id)}>
                  🗑 Delete Feedback
                </button>
              )}

              {/* REPLIES */}

              <div className="replies">
                {item.replies.map((reply) => (
                  <div key={reply.id} className="reply-box">
                    <strong>🧑 {reply.name}</strong>

                    <p>{reply.text}</p>

                    {isAdmin && (
                      <button
                        type="button"
                        onClick={() => deleteReply(item.id, reply.id)}
                      >
                        🗑 Delete Reply
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {isAdmin && (
                <div className="reply-section">
                  <input
                    placeholder="Write a reply..."
                    value={replyText[item.id] || ""}
                    onChange={(e) => handleReplyChange(item.id, e.target.value)}
                  />

                  <button type="button" onClick={() => addReply(item.id)}>
                    Reply
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}