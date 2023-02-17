import React from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Testimonials = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ background: "var(--background-section-color)" }}
    >
      <Fade bottom>
        <p className="pt-5 text-center" style={{ color: "rgb(255, 54, 54)" }}>
          What Client Say
        </p>

        <h2 className="font-weight-bold text-center display-4 mb-2">
          Testimonial
        </h2>
        <p className="HeroAboutMeText text-center pb-4">
          People I've worked with have said some nice things...
        </p>
      </Fade>

      <div className="row pt-4">
        <div className="col-lg-8 mx-auto mb-5">
          <div id="myCarousel" className="carousel slide " data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="img-box">
                  <img src={require("./Client-Suresh.jpeg")} alt="Client image" />
                </div>
                <p className="testimonial">
                  I can't thank Karthik J enough for the fantastic job they did
                  on our website. The end result exceeded our expectations, and
                  Karthik J was a joy to work with throughout the process. They
                  were responsive, detail-oriented, and always willing to go the
                  extra mile to ensure we were happy with the final product. I
                  highly recommend Karthik J to anyone in need of a new website.
                </p>
                <p className="font-weight-bold">AB Suresh</p>
                <p>CEO , AB InfoTech</p>
              </div>
              <div className="carousel-item">
                <div className="img-box">
                  <img src={require("./Client-virkram.jpeg")} alt="" />
                </div>
                <p className="testimonial">
                  I recently worked with Karthik J to create a new portfolio
                  website, and I am absolutely thrilled with the end result.
                  Karthik J listened to my vision and guided me through the
                  process, offering helpful recommendations and ensuring that my
                  portfolio truly reflects my style and work. Look forward to working with you!
                </p>
                <p className="font-weight-bold">Siva Vikram</p>
                <p>Owner , Vikram-Portfolio</p>
              </div>
              <div className="carousel-item">
                <div className="img-box">
                  <img src={require("./Client-Akash.jpeg")} alt="" />
                </div>
                <p className="testimonial">
                  I was really impressed with the level of expertise and
                  professionalism that Karthik J brought to our website project.
                  They not only delivered a beautiful and functional website,
                  but also provided valuable insights and recommendations
                  throughout the process.I highly recommend them
                  to anyone looking to take their website to the next level.
                </p>
                <p className="font-weight-bold">Akash Ramisetty Srinivasulu</p>
                <p>CEO , Cullspace</p>
              </div>
            </div>

            <a
              className="carousel-control-prev TestimonialAIcon"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="">
                <BsChevronCompactLeft />
              </i>
            </a>
            <a
              className="carousel-control-next TestimonialAIcon"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="">
                <BsChevronCompactRight />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
