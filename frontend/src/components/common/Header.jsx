import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import ImgLogo from "../../assets/images/europian-logo.png";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <img src={ImgLogo} onClick={() => dispatch(push("/"))} alt="" />
        <div class="nav">
          <input type="checkbox" id="nav-check" />
          <div class="nav-header"></div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links">
            <a onClick={() => dispatch(push("/"))} class="home">
              HOME
            </a>
            <a href="#Natural" class="home">
              WONDERS IN EUROPE
            </a>
            <a href="#Tourist" class="home">
              TOURIST ATTRACTION
            </a>

            <a onClick={() => dispatch(push("/favourites"))} class="home">
              FAVOURITES
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
