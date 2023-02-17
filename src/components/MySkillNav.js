import React, { useState } from "react";
import EducationalSkills from "./ResumeSection/EducationalSkills";
import Experience from "./ResumeSection/Experience";
import ProfessionalSkills from "./ResumeSection/ProfessionalSkills";
import Fade from "react-reveal/Fade";


const MySkillNav = ({ scrollToResume,theme }) => {
  const [active, setactive] = useState("FirstComponent");
  return (
    <div className="container-fluid py-5 " ref={scrollToResume}>
      <Fade bottom>
      <p className="pt-5 text-center" style={{ color: "rgb(255, 54, 54)" }}>
        1.5+ Years of Experience
      </p>
       <h2 className="font-weight-bold text-center display-4">My Resume</h2>
      </Fade>
      
     
      <div className="row px-5 pt-5">
        <a
          className="col-lg-4 font-weight-bold col-md-4 mb-4 MySkillHeaderA"
          onClick={() => setactive("FirstComponent")}
          style={
            active === "FirstComponent"
              ? {
                  width: "100%",
                  color: "rgb(255, 54, 54)",
                  transform: "translateY(-5px)",
                  boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
                  transition: ".3s",
                  background:"var(--background-section-color)"
                }
              : { width: "100%" }
          }
        >
          Education
        </a>
        <a
          className="col-lg-4 font-weight-bold col-md-4 mb-4 MySkillHeaderA"
          onClick={() => setactive("SecondComponent")}
          style={
            active === "SecondComponent"
              ? {
                width: "100%",
                color: "rgb(255, 54, 54)",
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
                transition: ".3s",
                background:"var(--background-section-color)"
                }
              : { width: "100%" }
          }
        >
          Professional Skill
        </a>
        <a
          className="col-lg-4 font-weight-bold col-md-4 mb-4 MySkillHeaderA"
          onClick={() => setactive("ThirdComponent")}
          style={
            active === "ThirdComponent"
              ? {
                width: "100%",
                color: "rgb(255, 54, 54)",
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
                transition: ".3s",
                background:"var(--background-section-color)"
                }
              : { width: "100%" }
          }
        >
          Experience
        </a>
      </div>
      <div>
        {active === "FirstComponent" && <EducationalSkills />}
        {active === "SecondComponent" && <ProfessionalSkills />}
        {active === "ThirdComponent" && <Experience theme={theme} />}
      </div>
    </div>
  );
};

export default MySkillNav;
