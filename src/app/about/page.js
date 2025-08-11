export default function About() {
    return (
      <>
      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <h1>About PoultryVision</h1>
              <h2>PoultryVision is an innovative, technology-driven platform designed to empower poultry farmers in Zimbabwe by providing real-time monitoring, data analysis, and actionable insights to improve flock health and productivity. By leveraging computer vision, modern sensor technologies, data analytics, and user-friendly interfaces it enables early detection of diseases and helps farmers to track key parameters such as feed consumption, egg production, environmental conditions, and bird health indicators with ease and accuracy.</h2>
              <div class="d-flex justify-content-center justify-content-lg-start">
                <a href="/buy-unit" class="btn btn-primary">See demo</a>
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
          <h2>System Features</h2>
        </div>

        <div class="row content">
        <div class="col-lg-6 pt-4 pt-lg-0">
        <ul>
              <li><i class="ri-check-double-line"></i> Early disease detction through excreta monitoring</li>
              <li><i class="ri-check-double-line"></i> Early disease detction through birds monitoring</li>
              <li><i class="ri-check-double-line"></i> Fowl run surveillance and security</li>
            </ul>
            <a href="/how-it-works" class="btn btn-primary">Buy unit</a>
          </div>

          <div class="col-lg-6">
            <ul>
              <li><i class="ri-check-double-line"></i> Early disease detection through sensors monitoring</li>
              <li><i class="ri-check-double-line"></i> Monitoring feed consumption patterns</li>
              <li><i class="ri-check-double-line"></i> Monitoring egg laying patterns</li>
            </ul>
          </div>
          
        </div>

      </div>
    </section>

    <section id="team" class="team mt-5">
  <div class="container aos-init aos-animate" data-aos="fade-up">

    <div class="section-title">
      <h2>Meet the Team</h2>
      <p>The PoultryVision project was developed by a dedicated team of researchers based at the Midlands State University.</p>
    </div>

    <div class="row">
      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div class="member">
          <img src="/team.png" alt="Team Member 1" class="img-fluid" />
          <h4>Kudakwashe Dzingirai</h4>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div class="member">
          <img src="/team.png" alt="Team Member 2" class="img-fluid" />
          <h4>Brian Saddock</h4>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div class="member">
          <img src="/team.png" alt="Team Member 3" class="img-fluid" />
          <h4>Sizanobuhle Nyoni</h4>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div class="member">
          <img src="/team.png" alt="Team Member 4" class="img-fluid" />
          <h4>Dzinaishe Mpini</h4>
        </div>
      </div>
    </div>

  </div>
</section>


<section id="about" class="about mt-5">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
          <h2>Resources</h2>
        </div>

        <div class="row content">
        <div class="col-lg-12 pt-4 pt-lg-0">
        <ol>
              <li><a href="https://github.com/dzinampini/poultry-excreta-dataset-curation" target="_blank">Dataset</a></li>
            </ol>
            <a href="/get-involved" class="btn btn-primary">Contribute</a>
          </div>
          
        </div>

      </div>
    </section>

      </>
    );
  }
  