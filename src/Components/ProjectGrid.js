
import React from "react";
import '../css/grid.css';
import iphone from "../img/iphone.png";
import ipad from "../img/ipad.png";

function Grids() {

  return (
<React.Fragment>
<div className="gridContent">
      <div id="portfolio" className="portfolio section">
        <h1 className="section__title">PORTFOLIO</h1>
        <span className="section__subtitle">coding projects</span>
        <div className="portfolio__container container grid">
        <div className="portfolio__content">
                    <div className="portfolio__box"><div className="portfolio__group">

                    <div className="portfolio__text-section">
                                              <img alt="ipad" className="portfolio__img" src={ipad} />

                      <h1 className="portfolio__title hover-underline-animation">
                        <a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">Alien Adoption →</a></h1>

                        <p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p>
                        </div></div></div></div>
            
                        <div className="portfolio__content">
                    <div className="portfolio__box"><div className="portfolio__group">

                    <div className="portfolio__text-section">
                                              <img alt="ipad" className="portfolio__img" src={ipad} />

                      <h1 className="portfolio__title hover-underline-animation">
                        <a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">Alien Adoption →</a></h1>

                        <p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p>
                        </div></div></div></div>




                        <div className="portfolio__content">
                    <div className="portfolio__box"><div className="portfolio__group">

                    <div className="portfolio__text-section">
                                              <img alt="ipad" className="portfolio__img" src={ipad} />

                      <h1 className="portfolio__title hover-underline-animation">
                        <a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">Alien Adoption →</a></h1>

                        <p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p>
                        </div></div></div></div>


                        <div className="portfolio__content">
                    <div className="portfolio__box"><div className="portfolio__group">

                    <div className="portfolio__text-section">
                                              <img alt="ipad" className="portfolio__img" src={ipad} />

                      <h1 className="portfolio__title hover-underline-animation">
                        <a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">Alien Adoption →</a></h1>

                        <p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p>
                        </div></div></div></div>
        </div>
        </div>
        </div>

    </React.Fragment>
    )}  

export default Grids;