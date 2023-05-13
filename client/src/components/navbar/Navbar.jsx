import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  });

  const currentUser = {
    id: 1,
    username: "John doe",
    isSeller: true,
  };
  return (
    <>
      <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className="container">
          <div className="logo">
            <Link className="Link" to="/">
              <span className="text">fiverr</span>
              <span className="dot">.</span>
            </Link>
          </div>
          <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            {!currentUser && <span>Sign in</span>}
            {!currentUser?.isSeller && <span>Become a seller</span>}
            {!currentUser && <button>Join</button>}
            {currentUser && (
              <div className="user" onClick={() => setOpen(!open)}>
                <img
                  src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="userImg"
                />
                <span>{currentUser.username}</span>
                {open && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <Link to="/myGigs">
                          <span>Gigs</span>
                        </Link>
                        <Link to="/add">
                          <span>Add new Gig</span>
                        </Link>
                      </>
                    )}
                    <Link to="/orders">
                      <span>Orders</span>
                    </Link>
                    <Link to="/messages">
                      <span>Message</span>
                    </Link>
                    <Link>
                      <span>Logout</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        {(active || pathname !== "/") && (
          <>
            <hr />
            <div className="menu">
              <Link to="/" className="link">
                Graphic & Design
              </Link>
              <Link to="/" className="link">
                Video & Animation
              </Link>

              <Link to="/" className="link">
                Writing & Translation
              </Link>

              <Link to="/" className="link">
                AI Services
              </Link>
              <Link to="/" className="link">
                Digital Marketing
              </Link>
              <Link to="/" className="link">
                Music & Audio
              </Link>
              <Link to="/" className="link">
                Video & Animation
              </Link>
              <Link to="/" className="link">
                Programming & Tech
              </Link>
              <Link to="/" className="link">
                Business
              </Link>
              <Link to="/" className="link">
                Lifestyle
              </Link>
            </div>
            <hr />
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
