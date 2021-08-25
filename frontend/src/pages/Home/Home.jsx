import React from 'react';
import Particles from 'react-particles-js';
import TagBlock from '../../components01/1atoms/TagBlock';
import ParticleConfig from '../../config/particle-config';

// react icons
import { BsArrowRight } from 'react-icons/bs';

// react btstrp
import Button from 'react-bootstrap/Button';

// video js
import VideoPlayer from 'react-video-js-player';
import communityVdo from '../../video/video.mp4';
import ddcVdoThumbnail from '../../img/Video/video-thumbnail/ddc-text.png';

const Home = () => {
  const videoSrc = communityVdo;
  const poster = ddcVdoThumbnail;
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
            <section id="video-section">
              <VideoPlayer
                src={videoSrc}
                poster={poster}
                width="720"
                height="720"
                playbackRates={[0.5, 1, 1.5, 2]}
              />
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
