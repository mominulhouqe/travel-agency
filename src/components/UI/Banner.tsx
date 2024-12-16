"use client";
import bannerImg from "@/assets/5a2f15134b8cc2bd4572a2f9ffc89485.jpg";
import Image from "next/image";
import Form from "../Shared/Form";
import Counter from "./Counter";

const Banner = () => {
  return (
    <div>
      <div className="relative h-full md:h-[900px] w-full pb-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={bannerImg}
            alt="banner"
            layout="fill"
            className="object-cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content */}
        <div className="relative max-w-[1203px] mx-auto z-10 flex flex-col md:flex-row items-center justify-center md:justify-between  gap-4 h-full px-6">
          {/* Left Text Content */}
          <div className="text-white md:w-1/2 text-center mt-32 md:mt-0 md:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              The Premier <br /> Co-living Travel Network for Women
            </h1>
            <div className="flex items-center">
              <div className="bg-white h-[3px] w-[38px]"></div>
              <p className="mt-6 text-base sm:text-lg text-gray-300 ml-4">
                Find your perfect housemate, move faster, stay longer, and
                travel with confidence.
              </p>
            </div>
          </div>

          {/* Right Form Content */}
          <div className="mt-10 md:mt-0 md:w-1/2 w-full max-w-[562px] ">
            <Form />
          </div>
        </div>
      </div>
      <Counter />
    </div>
  );
};

export default Banner;
