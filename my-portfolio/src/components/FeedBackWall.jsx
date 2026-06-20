import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/feedback.css";

export default function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const [sortType, setSortType] = useState("newest");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.comment) return;

    const newFeedback = {
      ...form,
      id: Date.now(),
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setForm({
      name: "",
      rating: 5,
      comment: "",
    });
  };

  const sortedFeedbacks = () => {
    const data = [...feedbacks];

    if (sortType === "highest") {
      return data.sort((a, b) => b.rating - a.rating);
    }

    if (sortType === "lowest") {
      return data.sort((a, b) => a.rating - b.rating);
    }

    return data; // newest
  };

  return (
    <section className="feedback-section page-transition" id="feedBackWall">
      <h2>💬 Feedback Wall</h2>

      {/* FORM */}
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

      {/* SORT BUTTONS */}
      <div className="sort-buttons">
        <button onClick={() => setSortType("newest")}>Newest</button>
        <button onClick={() => setSortType("highest")}>Highest Rating</button>
        <button onClick={() => setSortType("lowest")}>Lowest Rating</button>
      </div>

      {/* FEEDBACK LIST WITH ANIMATION */}
      <div className="feedback-list">
        <AnimatePresence>
          {sortedFeedbacks().map((item) => (
            <motion.div
              key={item.id}
              className="feedback-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              layout
            >
              <h4>
                {item.name}

                {item.rating === "5" && (
                  <span className="featured">🌟 Featured</span>
                )}
              </h4>

              <p>⭐ Rating: {item.rating}/5</p>
              <p>{item.comment}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
