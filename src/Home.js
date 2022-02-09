import React from "react";
import { homeArticles } from "./data";
import "./App.css";

/*Home Page Content*/
const Home = () => (
  <main>
    <h1>Doctor X, Your health issues detector.</h1>
    <img
      id="home-splash"
      src={`..${process.env.PUBLIC_URL}/img/mental-health.png`}
      alt="How YourHealth can help"
    />
    {homeArticles.map((article) => (
      <Article key={article.title} {...article} />
    ))}
  </main>
);

const Article = ({ title, content, img }) => (
  <article>
    <img
      src={`..${process.env.PUBLIC_URL}/img/${img.name}`}
      alt={img.alt}
      id={title}
    />
    <div>
      <h2>{title}</h2>
      <h3>{content[0]}</h3>
      <ol>
        {content.map((item) => {
          if (item != content[0]) {
            return <li>{item}</li>;
          }
        })}
      </ol>
    </div>
  </article>
);

export default Home;
