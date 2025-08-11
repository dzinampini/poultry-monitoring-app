

import Image from 'next/image'

export default function Home() {
  return (
    <>
      

      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <h1>PoultryVision</h1>
              <h2>AI-powered monitoring system that analyses poultry excreta via CCTV to detect early signs of disease, helping farmers protect flock health in real time.</h2>
              <div class="d-flex justify-content-center justify-content-lg-start">
                <a href="/buy-unit" class="btn btn-primary">Buy unit</a>
                &nbsp;&nbsp;
                <a href="/infer-image" class="btn btn-primary">Infer image</a>
                &nbsp;&nbsp;
                <a href="/login" class="btn btn-primary">My Dashboard</a>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
              <img src="/poultry-in-zimbabwe.png" className="img-fluid animated" alt="poultry-in-zimbabwe" />
            </div>
          </div>
        </div>
      </section>


      <section id="about" class="about mt-5">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
          <h2>About PoultryVision</h2>
        </div>

        <div class="row content">
        <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
            PoultryVision is an innovative, technology-driven platform designed to empower poultry farmers in Zimbabwe by providing real-time monitoring, data analysis, and actionable insights to improve flock health and productivity. By leveraging computer vision, modern sensor technologies, data analytics, and user-friendly interfaces it enables early detection of diseases and helps farmers to track key parameters such as feed consumption, egg production, environmental conditions, and bird health indicators with ease and accuracy.
            </p>
            <a href="/how-it-works" class="btn btn-primary">See how the system works</a>
          </div>

          <div class="col-lg-6">
            <ul>
              <li><i class="ri-check-double-line"></i> Early disease detction through excreta monitoring</li>
              <li><i class="ri-check-double-line"></i> Early disease detction through birds monitoring</li>
              <li><i class="ri-check-double-line"></i> Fowl run surveillance and security</li>
              <li><i class="ri-check-double-line"></i> Early disease detection through sensors monitoring</li>
              <li><i class="ri-check-double-line"></i> Monitoring feed consumption patterns</li>
              <li><i class="ri-check-double-line"></i> Monitoring egg laying patterns</li>
            </ul>
          </div>
          
        </div>

      </div>
    </section>


      

    </>
  );
}
