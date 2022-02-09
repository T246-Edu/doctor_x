import React from "react";
import "./App.css";
import CardScroll from "./Scroll.tsx";

/*Home Page Content*/
function Home() {
  return (
    <main>
      <h1>Doctor X, Your health issues detector.</h1>
      <div style={{ width: "100%" }}>
        <img
          id="home-splash"
          src={`..${process.env.PUBLIC_URL}/img/mental-health.png`}
          alt="How YourHealth can help"
          style={{ objectFit: "cover" }}
        />
        <div style={{ alignItems: "center" }}>
          <hr></hr>
        </div>
        <CardScroll />
      </div>
    </main>
  );
}
export default Home;
