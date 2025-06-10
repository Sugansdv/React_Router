import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container container py-5">
      <h2 className="text-center mb-4">Contact Me</h2>
      <p className="text-center mb-5">
        I'd love to hear from you! Whether you have a question or just want to say hello,
        feel free to reach out.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
