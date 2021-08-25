import React from 'react';
import Particles from 'react-particles-js';
import TagBlock from '../../components01/1atoms/TagBlock';
import ParticleConfig from '../../config/particle-config';

// react icons
import { BsArrowRight } from 'react-icons/bs';

// react btstrp
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <>
      <div className="containerCenter">
        <div className="contentBlock">
          <main id="home-page">
            <section id="particle-wrapper">
              <Particles
                style={{ height: '20%' }}
                id="particle-bg"
                params={ParticleConfig}
              ></Particles>
              <div id="content-hero-section">
                {/* vertically aligned center hero conent */}
                <div id="hero-content">
                  {/* left division */}
                  <div className="hero-section-left-division">
                    <TagBlock
                      title="Introducing Liveblocks"
                      link="  Read post "
                    />

                    <h1 className="title-heading aeonik_bold">
                      Build amazing real-time <br />
                      collaborative products
                    </h1>

                    <p className="inter_regular title-paragraph">
                      Liveblocks is a set of APIs and tools that helps you
                      create performant and reliable collaborative experiences
                      in minutes.
                    </p>
                    <Button className="gradientBtn">
                      Start now <BsArrowRight />
                    </Button>
                  </div>
                  {/*right division */}
                  <div className="hero-section-right-division inter_regular"></div>
                </div>
              </div>
            </section>
            <section>
              <h2>OTHER SECTION</h2>
              <h2>OTHER SECTION</h2>
              <h2>OTHER SECTION</h2>
              <h2>OTHER SECTION</h2>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
