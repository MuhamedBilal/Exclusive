import React from "react";
import BestSelling from "../Components/HomePage/BestSelling";
import Category from "../Components/HomePage/Category";
import Features from "../Components/HomePage/Features";
import FlashSale from "../Components/HomePage/FlashSale";
import HeroSection from "../Components/HomePage/HeroSection";
import OurProducts from "../Components/HomePage/OurProducts";
import SeparatorImage from "../Components/HomePage/SepatatorImage";

function Home() {
  return (
    <div>
      <HeroSection />
      <FlashSale />
      <Category />
      <BestSelling />
      <SeparatorImage />
      <OurProducts />
      <Features />
    </div>
  );
}

export default Home;
