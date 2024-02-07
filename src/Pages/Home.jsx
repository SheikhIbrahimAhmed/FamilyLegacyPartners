import React from "react";
import AboutUs from "../Components/AboutUs/AboutUs";
import FamiliesPage from "../Components/Home/FamiliesPage";
import Footer from "../Components/Home/Footer";
import HeroSection from "../Components/Home/HeroSection";
import Quote from "../Components/Home/Quote";
import Slider from "../Components/Home/Slider";
import VideoPage from "../Components/Home/VideoPage";
import Navbar from "../Components/shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar
        bgNavbar={
          "bg-gradient-to-b from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.2)]"
        }
      />
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
