export default function Contact() {
  return (
    <main className="contact container">
      <h2 className="text-4xl text-center mb-12">Contact</h2>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder=" " id="name" required />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-group">
          <input type="email" placeholder=" " id="email" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <textarea placeholder=" " id="message" required />
          <label htmlFor="message">Message</label>
        </div>
        <button type="submit" className="btn mt-4">Send</button>
      </form>
    </main>
  );
}