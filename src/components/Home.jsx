import React from "react";
import "./home.css";
import pic from "../components/images/dp.jpg";
function Home() {
  return (
    <div>
      <div className="homeContainer">
        <div className="homeContent">
        
        <div className="card ">
            <img className="myPic" src={pic} alt="" />
            <h1>Welcome</h1>
            <p>
            I am Shubham Gupta, I am a passionate full-stack web developer. I have been developing
            web applications with a wide range of front-end and backend
            skills like HTML, CSS, JavaScript, etc. Had built many projects from
            scratch to fully functional web apps. Looking to further improve my
            skills as a future full-stack web developer.
            
          </p>
        </div>
       
    </div>
        
         
       
      </div>
    </div>
  );
}

export default Home;
