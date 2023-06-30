
import React from "react";
import '../css/grid.css';

import ipad from "../img/ipad.png";

function Grids() {

  return (
<React.Fragment>
<div className="gridContent">
      <div id="portfolio" className="portfolio section">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">A few of my favorite projectes.</span>
        <div className="portfolio__container container grid">
          <div className="portfolio__content">
            <div className="portfolio__box">
              <div className="portfolio__group">
                <img alt="ipad" className="portfolio__img" src={ipad} />
                <div className="portfolio__text-section">
                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://github.com/paulwrivera/personalwebsite" className="portfolio__link">My Website →</a></h1>
                  <p className="portfolio__text">Take a peek behind the scenes at the code that makes this website tick. It was built with HTML5, CSS3, and React, and features nested array mapping along with various states to manage front-end rendering.</p>
                  <div className="portfolio__tag-section">
                    <span className="portfolio__tags">#HTML5</span>
                    <span className="portfolio__tags">#CSS3</span>
                    <span className="portfolio__tags">#React</span>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="portfolio__content">
                    <div className="portfolio__box"><div className="portfolio__group">
                    <img alt="ipad" className="portfolio__img" src={ipad} />

                    <div className="portfolio__text-section">
                      <h1 className="portfolio__title hover-underline-animation"><a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">Paul Blogs →</a></h1><p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p><div className="portfolio__tag-section">
                        <span className="portfolio__tags">#Next</span>
                        <span className="portfolio__tags">#React</span>
                        <span className="portfolio__tags">#GraphQL</span>
                        <span className="portfolio__tags">#Tailwind</span>
                        </div>
                        </div></div></div></div>
                        <div className="portfolio__content">
                    <div className="portfolio__box"><div className="portfolio__group">
                    <img alt="ipad" className="portfolio__img" src={ipad} />

                    <div className="portfolio__text-section">
                      <h1 className="portfolio__title hover-underline-animation"><a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">Paul Blogs →</a></h1><p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p><div className="portfolio__tag-section">
                        <span className="portfolio__tags">#Next</span>
                        <span className="portfolio__tags">#React</span>
                        <span className="portfolio__tags">#GraphQL</span>
                        <span className="portfolio__tags">#Tailwind</span>
                        </div>
                        </div></div></div></div>
                        <div className="portfolio__content">
                    <div className="portfolio__box"><div className="portfolio__group">
                    <img alt="ipad" className="portfolio__img" src={ipad} />

                    <div className="portfolio__text-section">
                      <h1 className="portfolio__title hover-underline-animation"><a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">Paul Blogs →</a></h1><p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p><div className="portfolio__tag-section">
                        <span className="portfolio__tags">#Next</span>
                        <span className="portfolio__tags">#React</span>
                        <span className="portfolio__tags">#GraphQL</span>
                        <span className="portfolio__tags">#Tailwind</span>
                        </div>
                        </div></div></div></div>
        </div>
        </div>
        </div>

    </React.Fragment>
    )}  

export default Grids;