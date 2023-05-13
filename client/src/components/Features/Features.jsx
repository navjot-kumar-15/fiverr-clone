import React from "react";
import "./Features.scss";
import Man from "../../../public/img/man.png";
import Search from "../../../public/img/search.png";
function Features() {
  return (
    <>
      <div className="features">
        <div className="container">
          <div className="left">
            <h1>
              Find the perfect <i>freelance</i> services for your business.
            </h1>
            <div className="search">
              <div className="searchInput">
                <img src={Search} alt="" />
                <input type="text" placeholder='Try "building mobile app"' />
              </div>
              <button>Search</button>
            </div>
            <div className="popular">
              <span>Popular:</span>
              <button>Web design</button>
              <button>Wordpress</button>
              <button>Logo Design</button>
              <button>AI Services</button>
            </div>
          </div>
          <div className="right">
            <img src={Man} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
