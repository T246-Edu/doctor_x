import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homeArticles } from "./data";
import CardImage from "./Card";

export default class CardScroll extends Component {
  render() {
    return (
      <div>
        {homeArticles.map((article) => (
          <>
            <CardImage
              content={article.content}
              path={`..${process.env.PUBLIC_URL}/img/${article.img.name}`}
              title={article.title}
              url={article.url}
              alt={article.img.alt}
            ></CardImage>
            <hr></hr>
          </>
        ))}
      </div>
    );
  }
}
