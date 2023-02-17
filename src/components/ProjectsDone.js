import React,{useState} from "react";
import { BsWordpress,BsCodeSlash } from "react-icons/bs";
import WordPress from "./ProjectSection/WordPress";

const ProjectsDone = () => {
    const [active , setactive] = useState("FirstComponent");
  return (
    <div className='container-fluid'>
        <p className="pt-5" style={{ color: "rgb(255, 54, 54)" }}>
              Take A Look
            </p>
            <h2 className="font-weight-bold mb-5 display-4">Projects Done</h2>
            <div className='ProjectHeaderMainBody d-flex'>
                <div className="ProjectLeft">
         <a className='ProjectHeaderA'
         onClick={() => setactive("FirstComponent")}
         style={
           active === "FirstComponent"
             ? {
                 width: "100%",
                 color: "rgb(255, 54, 54)",
                 boxShadow: "orange 0px 0px 30px",
                 fontWeight: "bolder",
               }
             : { width: "100%", color: "#1C2528" }
         }>
        <div className='text-center ProjectHeaderDiv '>
        <i><BsWordpress className=''/></i>
        <p className='m-0 ProjectHeaderP'>WordPress</p>
        </div>
      </a>
      <a className='ProjectHeaderA 'onClick={() => setactive("SecondComponent")}
          style={
            active === "SecondComponent"
              ? {
                  width: "100%",
                  color: "rgb(255, 54, 54)",
                  boxShadow: "orange 0px 0px 30px",
                  fontWeight: "bolder",
                }
              : { width: "100%", color: "#1C2528" }
          }>
        <div className='text-center ProjectHeaderDiv '>
        <i><BsCodeSlash className=''/></i>
        <p className='m-0 ProjectHeaderP'>HTML CSS JS</p>
        </div>
      </a>
      </div>
      <div className="ProjectRight">
        {active === "FirstComponent" && <WordPress/>}

      </div>
      </div>
    </div>
  )
}

export default ProjectsDone