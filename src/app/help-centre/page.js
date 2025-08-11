export default function HelpCentre() {
    return (
      <section id="help-centre" className="help-centre mt-5">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>Help Centre</h2>
            <p>Find answers to common questions about PoultryVision.</p>
          </div>
  
          <div className="accordion" id="faqAccordion">
            {/* FAQ 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  What is PoultryVision?
                </button>
              </h2>
              <div
                id="collapse1"
                className="accordion-collapse collapse show"
                aria-labelledby="faq1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  PoultryVision is a technology-driven platform for monitoring poultry health, 
                  detecting diseases early, and improving farm productivity through sensors, 
                  computer vision, and data analytics.
                </div>
              </div>
            </div>
  
            {/* FAQ 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  Do I need internet for PoultryVision to work?
                </button>
              </h2>
              <div
                id="collapse2"
                className="accordion-collapse collapse"
                aria-labelledby="faq2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  No, we have two packages. One is designed for farms with internet access, 
                  and the other works offline while still providing full monitoring capabilities.
                </div>
              </div>
            </div>
  
            {/* FAQ 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq3">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  Do you offer installation and training?
                </button>
              </h2>
              <div
                id="collapse3"
                className="accordion-collapse collapse"
                aria-labelledby="faq3"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes. Every package includes installation, system setup, and comprehensive 
                  training for you and your staff.
                </div>
              </div>
            </div>
  
            {/* FAQ 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq4">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  How do I place an order?
                </button>
              </h2>
              <div
                id="collapse4"
                className="accordion-collapse collapse"
                aria-labelledby="faq4"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can order directly via WhatsApp, by phone, or by visiting our office at 
                  Midlands State University. We also have an online inquiry form coming soon.
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
  