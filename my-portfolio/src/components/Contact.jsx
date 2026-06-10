import '../styles/contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>

      <p className="contact-text">
        I'm currently focused on learning frontend development and building
        projects that strengthen my skills. Whether you have a question, want to
        discuss a project, or simply want to connect, I'd be happy to hear from
        you. Feel free to send a message, and I'll do my best to respond.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Email Address" required />

        <input type="text" placeholder="Subject" required />

        <textarea placeholder="Your Message" rows="6" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
