import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/icons/Filter-rafiki 1.png";
import img2 from "@/assets/icons/Vision board-bro 1.png";
import img3 from "@/assets/icons/Friendship-pana 1.png";
import img4 from "@/assets/icons/Online friends-rafiki 1.png";

const steps = [1, 2, 3, 4];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1170px] px-4 mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="text-gray-600 mt-2">
            Search and find other travelers heading to the same destination.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left Side */}
          <div className="flex-1 space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Plan Your Trip
              </h3>
              <p className="text-gray-600">
                Start by setting your travel dates, destinations, and
                preferences. This helps you tailor your search for housemates
                who align with your journey.
              </p>
              <Image
                src={img1}
                alt="Step 1"
                width={200}
                height={200}
                className="mt-4"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Connect and Build Relationships
              </h3>
              <p className="text-gray-600">
                Send messages, ask questions, and get to know potential
                housemates before committing. Building rapport ensures a
                comfortable and trusted connection for your shared journey.
              </p>
              <Image
                src={img3}
                alt="Step 3"
                width={200}
                height={200}
                className="mt-4"
              />
            </div>
          </div>

          {/* Steps (Middle) */}
          <div className="md:flex flex-col items-center hidden">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Step Circle */}
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-blue-500 text-lg font-bold text-black shadow-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                >
                  {step}
                </motion.div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="w-1"
                    style={{
                      height: "160px",
                      border: "2px dashed #007bff",
                      opacity: "1",
                    }}
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  ></motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex-1 space-y-12">
            <div className="flex flex-col-reverse md:flex-col">
              <Image
                src={img2}
                alt="Step 2"
                width={200}
                height={200}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Explore Matching Profiles
              </h3>
              <p className="text-gray-600">
                Browse through profiles of like-minded women who are traveling
                to similar locations. You can filter results based on your
                travel dates, needs, and values.
              </p>
            </div>
            <div className="flex flex-col-reverse md:flex-col">
              <Image
                src={img4}
                alt="Step 4"
                width={200}
                height={200}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Secure Your Plans & Enjoy the Journey
              </h3>
              <p className="text-gray-600">
                Once you’ve found the right housemate, finalize your
                arrangements with confidence. With a trusted companion, you can
                travel with peace of mind and enjoy every moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
