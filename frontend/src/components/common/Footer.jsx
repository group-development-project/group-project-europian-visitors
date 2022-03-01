import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

function Footer() {
  const dispatch = useDispatch();

  return (
    <>
      <footer>
        <div class="footer-div">
          <ul class="footer-ul">
            <li class="footer-li">Quick-link</li>

            <a class="footer-links" href="#">
              <li>Home</li>
            </a>
            <a class="footer-links" href="#Natural">
              <li>Wonder in Europe</li>
            </a>
            <a class="footer-links" href="#Tourist">
              <li>Tourist Attraction</li>
            </a>
            <a onClick={() => dispatch(push("/favourites"))}>
              <li>favourite</li>
            </a>
          </ul>
        </div>
        <div class="address">
          <p class="heading-para1">Address</p>
          <p class="sub-heading-para">
            14, 1 Ellis bridge ST, auckland 3500, Europe +15 9900 990 009
            contactus@Europe-visit.com
          </p>
        </div>
        <div class="email-footer">
          <p>Subscribe our news-letter</p>
          <input class="email" type="text" placeholder="Your email" />
          <button class="button-subscribe">Subscribe</button>
        </div>
        <hr class="hr-tag" />
        <center>
          <p>Techis.io © All Rights Reserved</p>
        </center>
      </footer>
    </>
  );
}

export default Footer;
