import React from "react";
import { ScrollRotate } from "react-scroll-rotate";
import { BsCheck2Circle, BsEmojiLaughing, BsAward } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const AboutMe = ({ scroll, scrollToAbout }) => {
  return (
    <div
      className="container-fluid AboutMeMainBody ContainerBgColor"
      ref={scrollToAbout}
    >
      {/* <ScrollRotate>
                        <span style={{ color: "red" }}> Geek </span>
                    </ScrollRotate> */}
      <Fade bottom>
        <h2 className="display-3 HeaderLineOne fw-bloder pt-5 pb-lg-5">
          About Me
        </h2>
      </Fade>

      <div className="row row-custom">
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 p-lg-5 text-right mb-4 mb-md-0">
          <div className=" AboutMe AboutMeIconMainBodyMob ">
            <div
              className="pb-lg-3 AboutMeIconContainerMob"
              data-animate="active"
            >
              <div className="icon">
                <i className="AboutMeIcons">
                  <BsCheck2Circle />
                </i>
              </div>
              <div className="num"></div>
              <h4 className="font-weight-normal AboutMeIconContainerTextMob">
                Completed
                <br /> Project
              </h4>
            </div>

            <div
              className="pb-lg-3 AboutMeIconContainerMob"
              data-animate="active"
            >
              <div className="icon">
                <i className="AboutMeIcons">
                  <BsEmojiLaughing />
                </i>
              </div>
              <div className="num"></div>
              <h4 className="font-weight-normal AboutMeIconContainerTextMob">
                Happy <br /> Clients
              </h4>
            </div>

            <div
              className="pb-lg-3 AboutMeIconContainerMob"
              data-animate="active"
            >
              <div className="icon">
                <i className="AboutMeIcons">
                  <BsAward />
                </i>
              </div>
              <div className="num"></div>
              <h4 className="font-weight-normal AboutMeIconContainerTextMob">
                Awards
                <br /> Won
              </h4>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 VerticalLineCSS px-lg-4">
          <div className="profile-box">
            <div
              className="text scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <Fade bottom>
                <p className="pb-lg-2">
                  I love creating things that live on the internet. My
                  inquisitiveness about web development began in 2020 when I was
                  editing some infographics and little pop-ups where I
                  discovered HTML and CSS
                </p>
              </Fade>

              <Fade bottom>
                <p className="pb-lg-2">
                  Fast forward to today, I live in Chennai creating many
                  interactive websites using WordPress and React. My primary
                  focus on these days are developing responsive web design to
                  deliver an exceptional customer experience.
                </p>
              </Fade>

              <Fade bottom>
                <p className="pb-lg-2">
                  As a web developer, I had the opportunity
                  to work on a wide range of projects, from small company
                  websites to huge e-commerce platforms.Having a strong eye for
                  design and always strive to create user-friendly, intuitive
                  interfaces.
                </p>
              </Fade>

              <Fade bottom>
                <p className="pb-lg-2">
                  In my spare time, I enjoy staying up-to-date with the latest
                  web development trends and technologies, and regularly
                  contribute to open source projects. I am also an active member
                  of the WordPress community, attending meetups and
                  participating in online forums to share knowledge and
                  collaborate with others.
                </p>
              </Fade>

              <Fade bottom>
                <p className="pb-lg-2">
                  I am excited to bring my skills and experience to a new role
                  and help create amazing digital experiences for users. If
                  you're looking for a talented and dedicated web developer,
                  please don't hesitate to reach out.
                </p>
              </Fade>
            </div>
            <div className="pr-lg-5 button button-2 pt-4">
              <a
                className="BtnAnimation"
                onClick={() => scroll.current.scrollIntoView()}
              >
                <span data-attr="Contact">Contact</span>
                <span data-attr="Me">Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
