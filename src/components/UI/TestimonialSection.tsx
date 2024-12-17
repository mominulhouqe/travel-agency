import Image from "next/image";
import img1 from "@/assets/100241b1dbdcbaed256124c7a92469d4.png";
import comma1 from "@/assets/icons/comma.png";
import comma2 from "@/assets/icons/comma (1).png";
import Tilt from "react-parallax-tilt";

const TestimonialSection = () => {
  return (
    <div className="bg-gray-100  my-28 max-w-[1203px] p-[15px]  mx-auto">
      <div className="text-center mb-12">
        <p className="bg-[#0872BA4D] mx-auto px-2 pt-1 -skew-y-12 rounded-lg text-center w-[140px] h-[40px] ">
          Testimonial
        </p>
        <h2 className="md:text-4xl text-lg my-3  font-bold text-gray-800">
          What Our Members Say
        </h2>
        <p className="text-gray-600 mt-2 ">
          Hear from women who share your passion for exploring new cultures,
          experiencing life abroad, and <br /> making the most of every
          opportunity.
        </p>
      </div>

      <div className="relative grid md:grid-cols-2 gap-4 w-full  bg-white rounded-lg p-3 lg:p-12  mx-auto">
        {/* Left Side */}
        <Tilt className="background-stripes parallax-effect" perspective={500}>
          <div className="bg-blue-600    text-white rounded-lg p-6 w-full  relative">
            <div className="flex items-center justify-between space-x-4 mb-4">
              <Image
                src={img1}
                alt="User"
                width={64}
                height={64}
                className="w-20 h-20 rounded-full "
              />

              <div className="text-sm">
                <p className="mt-2 flex items-center justify-end">
                  <span className="text-yellow-300 text-xl mr-1">★</span> 5.0
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Sarah Thompson</h3>
              <p className="text-sm mb-2">Teacher · Non-smoker · Married</p>
              <p className="text-sm">Silom, Bangkok</p>
            </div>
          </div>
        </Tilt>

        {/* Right Side */}
        <div className="p-6 w-full ">
          <div className="text-gray-700 text-lg sm:text-2xl ">
            <span className="mb-4">
              <Image src={comma1} width={30} height={30} alt="comma" />
            </span>
            <span>
              {" "}
              Our smart developers build innovative, efficient, and
              high-performance solutions. Efficient, and high-performance
              solutions. Efficient, and high-performance solutions.
            </span>
            <span className="flex justify-end mt-4">
              <Image src={comma2} width={30} height={30} alt="comma" />
            </span>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-6 transform -translate-y-2/4 flex justify-end gap-4 w-full px-4">
          <button className="py-1.5 px-4 bg-white rounded-xl border ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-blue-600"
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </span>
          </button>
          <button className="py-1.5 px-4 bg-white rounded-xl border ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-blue-600"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
