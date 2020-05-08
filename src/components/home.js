import React from "react";

function Home() {
  return (
    <div>
      <h3>Hey, I am Jack!</h3>

      <h4 className="fancy">
        I write <span className="underline">code</span>, so that you don't have
        to...
      </h4>

      <p className="large">
        Whether it is a small website, to a large full stack system - with my
        years of industry experience and first class degree in Software
        Engineering I can provide you with what you want.{" "}
      </p>

      <br></br>

      <div className="inline">
        <img
          className="medium-img"
          src={window.location.origin + "/left-arrow.png"}
        />
        <p className="medium">
          Check out some of my work and the rest of my site
        </p>
      </div>
    </div>
  );
}

export default Home;
