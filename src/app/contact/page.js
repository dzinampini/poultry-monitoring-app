export default function Contact() {
    return (
      <section id="contact" className="contact mt-5">
        <div className="container" data-aos="fade-up">
          
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>We would love to hear from you! Reach out via WhatsApp, phone, or email — or visit us at our offices.</p>
          </div>
  
          <div className="row">
            {/* Physical Address */}
            <div className="col-lg-4 col-md-6 contact-item">
              <h4>Physical Address</h4>
              <p>
                Midlands State University<br />
                No 1 Senga Road<br />
                Gweru, Zimbabwe
              </p>
            </div>
  
            {/* WhatsApp */}
            <div className="col-lg-4 col-md-6 contact-item">
              <h4>WhatsApp</h4>
              <p>
                <a href="https://wa.me/263780634555" target="_blank" rel="noopener noreferrer">
                  Click to Chat on WhatsApp
                </a>
              </p>
            </div>
  
            {/* Call */}
            <div className="col-lg-4 col-md-6 contact-item">
              <h4>Call</h4>
              <p>
                <a href="tel:+263780634555">+263 78 063 4555</a>
              </p>
            </div>
  
            {/* Email */}
            <div className="col-lg-4 col-md-6 contact-item">
              <h4>Email</h4>
              <p>
                <a href="mailto:info@poultryvision.com">support(at)poultryvision(dot)com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  