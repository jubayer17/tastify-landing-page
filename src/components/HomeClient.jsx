"use client";

import Navbar from "./Navbar";
import ImageSlider from "./ImageSlider";
import FeaturedFoods from "./FeaturedFoods";
import Categories from "./Categories";
import Resturents from "./Resturents";
import MidFeature from "./MidFeature";
import PartnerAndRideFeatures from "./Partner&RideFeatures";
import KnowMore from "./KnowMore";
import Footer from "./Footer";
import Counts from "./Counts";

const HomeClient = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <FeaturedFoods />
      <Categories />
      <Resturents />
      <MidFeature />
      <PartnerAndRideFeatures />
      <KnowMore />
      <Counts />
      <Footer />
    </div>
  );
};

export default HomeClient;
