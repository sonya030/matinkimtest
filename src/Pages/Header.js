import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [viewSub, setViewSub] = useState(false);
  const handleMouseOver = () => {
    setViewSub(true);
    document.querySelector(".MatinKimSub").style.display = "flex";
    document.querySelector(".KIMMATINSub").style.display = "none";
  };
  const handleMouseOver2 = () => {
    setViewSub(true);
    document.querySelector(".KIMMATINSub").style.display = "flex";
    document.querySelector(".MatinKimSub").style.display = "none";
  };

  const handleMouseOut = () => {
    setViewSub(false);
  };
  return (
    <div
      className="Header"
      style={{
        transition: "height 0.3s ease", // height 변경에 애니메이션 적용
        height: viewSub ? "112px" : "64px", // 호버 상태에 따라 높이 변경
      }}
    >
      <div className="headerInner">
        <nav className="nav">
          <ul className="menu">
            <li
              className="MatinKimLink"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <Link to="/Main">Matin Kim</Link>
              <ul className="MatinKimSub">
                <li>
                  <Link to="/NewIn">NEW IN</Link>
                </li>
                <li>
                  <Link to="/MustHave">MUST HAVE</Link>
                </li>
                <li>
                  <a href="#none">PROJECT</a>
                </li>
                <li>
                  <Link to="/Collection24s">COLLECTIONS</Link>
                </li>
                <li>
                  <a href="#none">ABOUT</a>
                </li>
              </ul>
            </li>
            <li
              className="KIMMATINLink"
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut}
            >
              <a href="#none">KIMMATIN</a>
              <ul className="KIMMATINSub">
                <li>
                  <a href="#none">ARCHIVE</a>
                </li>
                <li>
                  <a href="#none">SHOP</a>
                </li>
                <li>
                  <a href="#none">ABOUT</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "./img/matinKim_headerLogo_black.svg"}
            alt="Matin_Kim_logo"
          />
        </div>
        <div className="headerCon">
          <ul>
            <li>
              <a href="#none">
                <img
                  src={process.env.PUBLIC_URL + "./img/new_search_black.svg"}
                  alt="search_icon"
                />
                <p>SEARCH</p>
              </a>
            </li>
            <li>
              <a href="#none">
                <img
                  src={process.env.PUBLIC_URL + "./img/new_account_black.svg"}
                  alt="account_icon"
                />
                <p>ACCOUNT</p>
              </a>
            </li>
            <li>
              <a href="#none">
                <img
                  src={process.env.PUBLIC_URL + "./img/new_wish_black.svg"}
                  alt="wish_icon"
                />
                <p>WISH</p>
              </a>
            </li>
            <li>
              <a href="#none">
                <img
                  src={process.env.PUBLIC_URL + "./img/new_cart_black.svg"}
                  alt="cart_icon"
                />
                <p>CART</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
