"use client";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

import Banner from "@/components/UI/Banner";
import Community from "@/components/UI/Community";
import Expert from "@/components/UI/Expert";
import Faq from "@/components/UI/Faq";
import HowItWorks from "@/components/UI/HowItWorks";
import TestimonialSection from "@/components/UI/TestimonialSection";
import Traveler from "@/components/UI/Travelar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />

      <Community />
      <Traveler />
      <Expert />
      <HowItWorks />
      <TestimonialSection />
      <Faq />
      <Footer />
    </div>
  );
}
