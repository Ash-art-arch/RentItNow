import React from "react";
import HeroSection from "../sections/HeroSection";
import TopSection from "../sections/TopSection";
import FeaturedSection from "../sections/FeaturedSection";
import Navbar from "../components/Navbar";
import StatsSection from "../sections/StatsSection";
import Testimonial from "../sections/Testimonial";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
<div className="w-screen min-h-screen ">
  <Navbar />
  <HeroSection />
  <TopSection />
  <FeaturedSection />
  <StatsSection />
  <Testimonial />
  <Footer />
</div>

  );
};

export default LandingPage;
