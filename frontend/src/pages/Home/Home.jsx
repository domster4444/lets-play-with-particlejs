import React from 'react';
import Particles from 'react-particles-js';
import TagBlock from '../../components01/1atoms/TagBlock';
import ParticleConfig from '../../config/particle-config';

// react icons
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

// react btstrp
import Button from 'react-bootstrap/Button';

// video js
import VideoPlayer from 'react-video-js-player';
import communityVdo from '../../video/video.mp4';
import ddcVdoThumbnail from '../../img/Video/video-thumbnail/ddc-text.png';

//images
import dummyCardTemplate from '../../img/cardThumbnail/dummyCardTemplate.png';
import InfoCard from '../../components01/2molecules/InfoCard';
const Home = () => {
  const videoSrc = communityVdo;
  const poster = ddcVdoThumbnail;
  return (
    <>
      <main id="home-page">
        <div className="containerCenter" id="particle-section-wrapper">
          <div className="contentBlock">
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
                    <Button className="gradientBtn ripple">
                      Start now <BsArrowRight />
                    </Button>
                  </div>
                  {/*right division */}
                  <div className="hero-section-right-division inter_regular"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="containerCenter" id="video-section-wrapper">
          <div className="contentBlock">
            <section id="video-section">
              <VideoPlayer
                src={videoSrc}
                poster={poster}
                playbackRates={[0.5, 1, 1.5, 2]}
              />
            </section>
          </div>
        </div>
        <div className="containerCenter" id="info-card-section-wrapper">
          <div className="contentBlock">
            <section id="info-card-section">
              <InfoCard
                image={dummyCardTemplate}
                title=" Add live cursors and avatars to your product"
                description=" Add live cursors and avatars to your product"
              />
              <InfoCard
                image={dummyCardTemplate}
                title=" Add live cursors and avatars to your product"
                description=" Add live cursors and avatars to your product"
              />
              <InfoCard
                image={dummyCardTemplate}
                title=" Add live cursors and avatars to your product"
                description=" Add live cursors and avatars to your product"
              />
              <InfoCard
                image={dummyCardTemplate}
                title=" Add live cursors and avatars to your product"
                description=" Add live cursors and avatars to your product"
              />
              <InfoCard
                image={dummyCardTemplate}
                title=" Add live cursors and avatars to your product"
                description=" Add live cursors and avatars to your product"
              />
              <InfoCard
                image={dummyCardTemplate}
                title=" Add live cursors and avatars to your product"
                description=" Add live cursors and avatars to your product"
              />
              <InfoCard
                image={dummyCardTemplate}
                title=" Add live cursors and avatars to your product"
                description=" Add live cursors and avatars to your product"
              />
              <InfoCard
                image={dummyCardTemplate}
                title=" Add live cursors and avatars to your product"
                description=" Add live cursors and avatars to your product"
              />
            </section>
          </div>
        </div>
        <div className="containerCenter" id="footer-section-wrapper">
          <div className="contentBlock">
            <footer>
              <div className="inter_regular">
                <ul>
                  <li>Product</li>
                  <li>Presence</li>
                  <li>Storage</li>
                  <li>Pricing</li>
                </ul>
                <ul>
                  <li>Product</li>
                  <li>Presence</li>
                  <li>Storage</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Product</li>
                  <li>Presence</li>
                  <li>Storage</li>
                  <li>Pricing</li>
                </ul>
                <ul>
                  <li>Product</li>
                  <li>Presence</li>
                  <li>Storage</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Product</li>
                  <li>Presence</li>
                  <li>Storage</li>
                  <li>Pricing</li>
                </ul>
                <ul>
                  <li>Product</li>
                  <li>Presence</li>
                  <li>Storage</li>
                  <li>Pricing</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>
                    <AiOutlineTwitter />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <AiOutlineGithub />
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
