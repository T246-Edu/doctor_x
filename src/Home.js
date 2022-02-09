import React from "react";
import "./App.css";
import CardScroll from "./Scroll.tsx";

/*Home Page Content*/
function Home() {
  return (
    <main>
      <div id="Cards" style={{ width: "100%" }}>
        <h1>Doctor X, Your health issues detector.</h1>
        <img
          id="home-splash"
          src={`..${process.env.PUBLIC_URL}/img/mental-health.png`}
          alt="How YourHealth can help"
          style={{ objectFit: "cover" }}
        />
        <CardScroll />
      </div>
    </main>
  );
}
export default Home;
