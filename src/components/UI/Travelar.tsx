"use client";
import Image from "next/image";
import image from "../../assets/travle-image.png";

const Traveler = () => {
  return (
    <div className="bg-white py-6 max-w-[1203px] mx-auto px-2">
      {/* Section-1  */}
      <div className="text-center">
        <p
          className="bg-[#0872BA] mx-auto rounded-full my-4"
          style={{ width: "57px", height: "8px" }}
        ></p>
        <h1 className="lg:text-5xl text-3xl font-bold text-[#1D2939]">
          Perfect for every type of traveler
        </h1>
      </div>
      {/* Section-2  */}
      <div>
        <Image
          src={image}
          alt="Community for Women"
          className="rounded-lg w-full "
        />
      </div>
    </div>
  );
};

export default Traveler;
