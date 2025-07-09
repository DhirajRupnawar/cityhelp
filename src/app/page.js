"use client";

import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import Category from "./components/category";
import ServicesPage from "./components/serrvices";
import WhyChooseUs from "./components/whychooseus";
import HomeServicesLayout from "./components/advertise"
import Footer from "./components/footer";   

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Category />
      <ServicesPage />
      <WhyChooseUs />
      {/* <HomeServicesLayout/> */}
      <Footer/>
    </div>
  );
};

export default Home;
