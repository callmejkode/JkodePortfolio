import React from "react";
import "./Experience.scss";
import Fade from "react-reveal/Fade";


const Experience = (theme) => {
  return (
    <div className="container-fluid p-0">
       <Fade left>
      <section className="">
        <div className="container py-2">
          {/* <div className="h1 text-center text-dark" id="pageHeaderTitle">
          My Journey
          </div> */}

          <article
            className={
              theme === "light-theme"
                ? "postcard light blue"
                : "postcard drak blue"
            }
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src={require("./signatech-img.png")}
                alt="Image Title"
              />
            </a>
           
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">SignaTech</a>
              </h1>
              <div className="postcard__subtitle small">
                {/* <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>April 2021 - 
                </time> */}
                <p>Chennai (April 2021 - Present)</p>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                I joined as a fresher, my role was to develop interactive user
                interfaces along with WordPress. Past two years I have been in
                UI/UX design and front-end development. During this journey, I
                feel in love with React framework.
              </div>
              {/* <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-tag mr-2"></i>Podcast
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>55 mins.
                </li>
                <li className="tag__item play blue">
                  <a href="#">
                    <i className="fas fa-play mr-2"></i>Play Episode
                  </a>
                </li>
              </ul> */}
            </div>
           
            
          </article>
        </div>
      </section>
      </Fade>
    </div>
  );
};

export default Experience;
