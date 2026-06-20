import "../styles/contact.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("contactForm");

    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  const hasSavedData =
    formData.name.trim() ||
    formData.email.trim() ||
    formData.subject.trim() ||
    formData.message.trim();

  // Save draft
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formData));
  }, [formData]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Email validation live
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!formData.email) {
        setEmailError("");
        return;
      }

      const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email,
      );

      setEmailError(validEmail ? "✅ Valid email" : "⚠️ Invalid email format");
    }, 400);

    return () => clearTimeout(timer);
  }, [formData.email]);

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "👤 Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "📧 Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "⚠️ Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "💬 Message is required";
    }

    return newErrors;
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSuccess(true);

    // store message
    const submitted = JSON.parse(localStorage.getItem("submitted") || "[]");
    submitted.push(formData);
    localStorage.setItem("submitted", JSON.stringify(submitted));

    // reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    localStorage.removeItem("contactForm");

    // close modal
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section page-transition">
      <h2>📩 Get In Touch</h2>

      <p className="contact-text">
        🚀 Let's connect! I'm always open to new ideas, projects, and
        collaborations.
      </p>

      {hasSavedData && (
        <p className="saved-hint">💾 You have unsent message data saved.</p>
      )}

      {/* FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="👤 Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="email"
          placeholder="📧 Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {emailError && !errors.email && (
          <p
            className={emailError.includes("Valid") ? "email-success" : "error"}
          >
            {emailError}
          </p>
        )}

        <input
          name="subject"
          placeholder="📌 Subject"
          value={formData.subject}
          onChange={handleChange}
        />

        <textarea
          name="message"
          rows="6"
          placeholder="💬 Your Message..."
          value={formData.message}
          onChange={handleChange}
        />

        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">🚀 Send Message</button>
      </form>

      {/* LIVE PREVIEW */}
      <div className="preview-card">
        <h3>👀 Live Preview</h3>

        <div className="preview-item">
          <span>👤 Name:</span>
          <p>{formData.name || "Not entered yet"}</p>
        </div>

        <div className="preview-item">
          <span>📧 Email:</span>
          <p>{formData.email || "Not entered yet"}</p>
        </div>

        <div className="preview-item">
          <span>💬 Message:</span>
          <p>{formData.message || "Start typing..."}</p>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="popup-card"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>🎉 Message Sent!</h3>
              <p>Thanks for reaching out 💌</p>

              <button onClick={() => setSuccess(false)}>Close ✖</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
