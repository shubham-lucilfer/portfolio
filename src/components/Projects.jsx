import React from "react";
import video from "../components/images/2.mp4";

function Projects({data}) {
  
  return (
    <div className="pc">
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div className="projectContainer">
        {
          data.map((ele)=>{
              return(
                <div
                className="card "
                
              >
                <video loop muted autoPlay controls={true}>
                  <source src={video} type="video/mp4" />
                </video>
                <h2>{ele.name}</h2>
                <p>
                  {ele.description}
                 
                </p>
              </div>
              )
          })
        }
      </div>
    </div>
  );
}

export default Projects;
