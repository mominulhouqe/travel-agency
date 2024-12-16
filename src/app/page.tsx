"use client";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

import Banner from "@/components/UI/Banner";
import Faq from "@/components/UI/Faq";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <div className="max-w-[1183px] px-[15px] mx-auto"></div>

      {/*

    Write here component

*/}
      <Faq />
      <Footer />
    </div>
  );
}
