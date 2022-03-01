import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import GridContent from "../components/common/GridContent";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import Thumbnail from "../components/common/Thumbnail";
import VedeoImg from "../assets/images/vedeo-img.png";
import ImgBeforeGradient from "../assets/images/img-before-gradient.png";
import GradientImg from "../assets/images/gradient-img.png";
import Maps from "../assets/images/maps.png";
import Imgbackground from "../assets/img/back-gradient.png";
import ImgEVGAlogo from "../assets/img/EVGA-logo.png";
import ImgSearchicon from "../assets/img/searchicon.png";
import { getPlaces } from "../reducks/places/selectors";
import { getCategories } from "../reducks/categories/selectors";
import { fetchPlaces } from "../reducks/places/operations";
import { push } from "connected-react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../reducks/categories/operations";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);
  const categories = getCategories(selector);
  console.log(places);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFromLocalStorage());
  }, []);

  // console.log(categories);

  return (
    <>
      <Header img={ImgEVGAlogo} />
      <section className="section1">
        <img class="background-img" src={Imgbackground} alt="" />
        <div class="heading">Happiest place on Earth!</div>
        <Search img={ImgSearchicon} />
        <center>
          <h4 id="Tourist">Tourist Attractions in Europe</h4>
        </center>
        <div className="grid">
          {categories.map((category) => (
            <GridContent key={category.id} category={category} />
          ))}
          <p>{categories.name}</p>
        </div>
        <div id="Natural" class="heading1">
          Natural Wonders in Europe
        </div>
        <div class="gallery">
          <div class="row">
            {places.map((place) => (
              <Thumbnail place={place} />
            ))}
          </div>
        </div>
      </section>
      <section class="section-2">
        <div class="last">
          <a href="https://www.youtube.com/watch?v=7lvXbfNBIQg">
            <img class="vedeo-img" src={VedeoImg} alt="" />
          </a>
          <img class="img-before-gradient" src={ImgBeforeGradient} alt="" />
          <img class="gradient-img" src={GradientImg} alt="" />
        </div>
        <div class="heading1">
          <h2 class="heading-gradient">Get 10% Off on Your Next Travel</h2>
          <p class="para">Maximum discount 1000$ per person</p>
          <input class="email-bar" type="text" placeholder="Enter your Email" />
          <button class="button-subscribe">Subscribe</button>
        </div>
        <a href="https://www.google.com/maps/place/Europe+Group+Tours/@19.7838386,73.4779197,4z/data=!4m9!1m2!2m1!1seurope+tour+map!3m5!1s0x390d029e6c8d3163:0x8d97622abd05ccec!8m2!3d28.6508144!4d77.195126!15sCg9ldXJvcGUgdG91ciBtYXBaDSILZXVyb3BlIHRvdXKSAQt0b3VyX2FnZW5jeZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSbk5rbDFORU4zRUFF">
          <img class="map" src={Maps} alt="" />
        </a>
      </section>
      <Footer img={ImgEVGAlogo} />
    </>
  );
};

export default Home;
