"use client";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

import Banner from "@/components/UI/Banner";
import Community from "@/components/UI/Community";
import Faq from "@/components/UI/Faq";
import Traveler from "@/components/UI/Travelar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />

      <Community />
      <div className="max-w-[1183px] px-[15px] mx-auto"></div>

      {/*

    Write here component

*/}
      <Traveler />
      <Faq />
      <Footer />
    </div>
  );
}
