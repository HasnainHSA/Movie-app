import React from "react";
import Bottomhero from "../components/Bottomhero";
import Carouselcards from "../components/Carouselcards";
import Carouselscroll from "../components/Carouselscroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Middlehero from "../components/Middlehero";
import Showscard from "../components/Showscard";
import Secondslide from "../components/Secondslide";
import Testimonialcard from "../components/Testimonialcard";
import Goldbtn from "../components/Goldbtn";
import Thirdslider from "../components/Thirdslider";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <div>
      <Header />

      <Carouselcards />

      <Middlehero />

      <div className="mid-cards">
        <Secondslide />
      </div>

      <div className="mid-result-btn">
        <Goldbtn value={"Show More Results"} />
      </div>

      <Thirdslider />

      <Secondslide />

      <div className="offermg">
        <Offer />
      </div>
      
      <Secondslide />

      <div className="mid-result-btn">
        <Goldbtn value={"Show More Results"} />
      </div>

      <Bottomhero />
      <Footer />
    </div>
  );
};

export default Home;
