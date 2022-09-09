import React from "react";

function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <div className="rangeContainer">
        <div className="rangeCard">
          <p>HTML</p> : 
          <input type="range" value={90} class="range-style"></input>
        </div>
        <div className="rangeCard">
          <p>CSS</p>:
          <input type="range" value={90} class="range-style"></input>
        </div>
        <div className="rangeCard">
          <p>JAVASCRIPT</p>:
          <input type="range" value={90} class="range-style"></input>
        </div>
        <div className="rangeCard">
          <p>REACT</p>:
          <input type="range" value={70} class="range-style"></input>
        </div>
        <div className="rangeCard">
          <p>NODE.js</p>:
          <input type="range" value={70} class="range-style"></input>
        </div>
        <div className=" rangeCard">
          <p>MongoDB</p>:
          <input type="range" value={60} class="range-style"></input>
        </div>
        <div className="rangeCard">
          <p>JAVA</p>:
          <input type="range" value={90} class="range-style"></input>
        </div>
        <div className="rangeCard">
          <p>MySql</p>:
          <input type="range" value={90} class="range-style"></input>
        </div>
      </div>
    </>
  );
}

export default Skills;
