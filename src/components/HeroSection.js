import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeroSection = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get DOC file
    fetch("karthik J Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        console.log(blob, "hi");
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        console.log(fileURL);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "karthik J Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="container-fluid">
      <div className="HeroSectionDivOne row ">
        <div className="col-lg-8">
          <h4
            className="mt-lg-5 mb-lg-4 ConatactMeIconContainerMob HideForBigScreen"
            style={{ paddingTop: "60px" }}
          >
            Front End Developer / WordPress Expert
          </h4>
          <div className="">
            <h1 className="display-4 font-weight-bold HeaderLineH1 HeaderLineOne">
              Hi,
              <br /> I'm <span style={{ color: "#ff3636" }}>J Karthik</span>
            </h1>
            <h1 className="display-4 font-weight-bold d-flex HeaderLineOne HeaderIntroAutoText">
              {" "}
              <span className="mr-2 HeaderLineOne">a</span>
              <TypeAnimation
                sequence={[
                  " Website Developer", // Types 'One'
                  1000, // Waits 1s
                  " WordPress Expert", // Deletes 'One' and types 'Two'
                  2000, // Waits
                  " React developer", // Types 'Three' without deleting 'Two'
                  1000, // Waits 1s
                  " Photographer",
                  2000,
                  " Gamer",
                  1000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
          </div>

          <p className="py-lg-4 pr-lg-5 ConatactMeIconContainerMob PToHideForMob">
            Let me to hear your dream, I'll bring it to life
          </p>
          <p className="HideForBigScreen">
            Details-oriented WordPress developer with expertise in custom theme
            development. Specialized in the design of user interfaces for Web
            and mobile landing pages. proficient in all aspects of WordPress as
            well as other front-end programming languages like React JS
          </p>
          <div className="d-lg-flex justify-content-between pr-lg-5 py-4">
            <div className="pb-sm-4 pb-1">
              <p className="lead">Find me on</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 SocialIcons"
                href="https://www.facebook.com/karthik.jayabalan.37"
              >
                <BsFacebook />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="pr-4 SocialIcons"
                href="https://www.instagram.com/karthik_j19/"
              >
                <BsInstagram />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="pr-4 SocialIcons"
                href="https://www.linkedin.com/in/web-developer-karthik-j"
              >
                <BsLinkedin />
              </a>
            </div>
            <div className="pr-lg-5 button button-2 text-center pt-4">
              <a className="BtnAnimation" onClick={onButtonClick}>
                <span data-attr="Download">Download</span>
                <span data-attr="CV">CV</span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4" >
        <img className="JkodeHeroImg"
                  src={require("./jkode-hero-img.png")}
                  alt="Infographic-image"
                />
        </div>
      </div>
      <hr className="py-1" />
      <div className=" d-lg-flex d-sm-block justify-content-around HeroSectionAboutMe">
        <div className=" text-center pb-4">
          <h4 className="HeroAboutMeText font-weight-normal">Living in</h4>
          <h4 className="HeroAboutMeText font-weight-bold">Chennai</h4>
        </div>
        <div className=" text-center pb-4">
          <h4 className="HeroAboutMeText font-weight-normal">Experience</h4>
          <h4 className=" HeroAboutMeText font-weight-bold">1.5+ years</h4>
        </div>
        <div className=" text-center pb-4">
          <h4 className="HeroAboutMeText font-weight-normal">Date of Birth</h4>
          <h4 className="HeroAboutMeText font-weight-bold">19 May 1999</h4>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
