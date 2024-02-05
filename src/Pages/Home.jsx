import React from "react";
import AboutUs from "../Components/AboutUs/AboutUs";
import FamiliesPage from "../Components/Home/FamiliesPage";
import Footer from "../Components/Home/Footer";
import HeroSection from "../Components/Home/HeroSection";
import Quote from "../Components/Home/Quote";
import Slider from "../Components/Home/Slider";
import VideoPage from "../Components/Home/VideoPage";

const Home = () => {
  return (
    <>
      <HeroSection />
      <VideoPage />
      <FamiliesPage />
      <Quote />
      <Slider />
      <Footer />
      {/* <AboutUs /> */}
    </>
  );
};

export default Home;
