
import React from "react";
import '../css/grid.css';
import ipad from "../img/ipad.png";
import Popup from "reactjs-popup";
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
                    <a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">Personal Website →</a></h1>

                  <p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p>

                  <Popup trigger={<button><i class="fa fa-play"></i>
</button>} position="top center">
                    {close => (
                      <div className="openBox" >
                        ALIEN ADOPTION  <iframe class="embed-responsive-item" width="400px" height="400px" src="https://www.loom.com/embed/f47dc27da3d94811992b5e7cd3d7eaaf?sid=a650bc3e-e997-4dcb-adbf-02d1fed693c7" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}

                  </Popup>
            

                </div></div></div></div>

            <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">

                <div className="portfolio__text-section">
                  <img alt="ipad" className="portfolio__img" src={ipad} />

                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://www.loom.com/share/f47dc27da3d94811992b5e7cd3d7eaaf?sid=8c0180b6-d61f-4216-8a81-18d30e3b4d72" className="portfolio__link">Alien Adoption →</a></h1>

                  <p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p>

                  <Popup trigger={<button><i class="fa fa-play"></i>
</button>} position="top center">
                    {close => (
                      <div className="openBox" >
                        ALIEN ADOPTION  <iframe class="embed-responsive-item" width="400px" height="400px" src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=1" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}

                  </Popup>
                </div></div></div></div>




            <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">

                <div className="portfolio__text-section">
                  <div className="video">

                    <div id="headerPopup" class="mfp-hide embed-responsive embed-responsive-21by9">

                    </div>

                  </div>

                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">Alien Adoption →</a></h1>

                  <p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p>
                  <Popup trigger={<button><i class="fa fa-play"></i>
</button>} position="top center">
                    {close => (
                      <div className="openBox" >
                        ALIEN ADOPTION  <iframe class="embed-responsive-item" width="400px" height="400px" src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=1" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}

                  </Popup>
                </div></div></div></div>


            <div className="portfolio__content">
              <div className="portfolio__box"><div className="portfolio__group">

                <div className="portfolio__text-section">
                  <img alt="ipad" className="portfolio__img" src={ipad} />

                  <h1 className="portfolio__title hover-underline-animation">
                    <a href="https://graphql-nextjs-blog-pink.vercel.app/" className="portfolio__link">Alien Adoption →</a></h1>

                  <p className="portfolio__text">This open source blog pulls data from GraphCMS using GraphQL. It features posts written in Markdown, featured posts, related posts, categories, authors, user submitted comments, and a Tailwind styled layout.</p>
                  <Popup trigger={<button><i class="fa fa-play"></i></button>} position="top center">
                    {close => (
                      <div className="openBox" >
                        ALIEN ADOPTION  <iframe class="embed-responsive-item" width="400px" height="400px" src="https://www.youtube.com/embed/qN3OueBm9F4?autoplay=1" frameborder="0px" allowFullScreen ></iframe>   <a className="close" onClick={close}>
                          &times;
                        </a>
                      </div>
                    )}

                  </Popup>
            
                </div></div></div></div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Grids;