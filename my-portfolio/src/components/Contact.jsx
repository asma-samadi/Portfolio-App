export default function Contact() {
    return (
      <section>
        <p>
          Don't hesitate to reach out with any questions or ideas. I'm here to
          listen, offer insights, and have enriching discussions. Your message
          could spark something wonderful—let's start a dialogue!
        </p>
        <form>
            <input type="text" placeholder="name" required/>
            <input type="email" placeholder="e-mail address" required/>
            <input type="text" placeholder="subject" required/>
            <textarea name="message" placeholder="message" id="textarea"></textarea>
            <button>Send</button>
        </form>
      </section>
    );
}
