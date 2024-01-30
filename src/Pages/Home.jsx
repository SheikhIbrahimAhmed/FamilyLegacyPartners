import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import VideoPage from "../Components/Home/VideoPage";
import FamiliesPage from "../Components/Home/FamiliesPage";
import Quote from "../Components/Home/Quote";
import Footer from "../Components/Home/Footer";
import Slider from "../Components/Home/Slider";

const Home = () => {
  return (
    <>
      <HeroSection />
      <VideoPage />
      <FamiliesPage />
      <Quote />
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
