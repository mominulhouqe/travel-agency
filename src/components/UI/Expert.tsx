import Image from "next/image";
import frame from "../../assets/icons/Frame 37.png";
import frame1 from "../../assets/icons/Frame 37 (1).png";
import frame2 from "../../assets/icons/Frame 37 (2).png";
import frame3 from "../../assets/icons/Frame 37 (3).png";
import logo from "../../assets/imgpsh_fullsize_anim 1.png";

const Expert = () => {
  return (
    <div className="my-28 max-w-[1170px] px-[15px]  mx-auto ">
      {/* section-1  */}
      <div className="text-center">
        <p
          className="bg-[#0872BA4D] mx-auto px-2 pt-1  rounded-lg text-center"
          style={{ width: "146px", height: "40px" }}
        >
          Why choose us?
        </p>
        <h1 className="text-[#1D2939] text-5xl font-bold mt-6">
          Why Choose Expat Global Girls
        </h1>
        <p className="text-xl font-semibold text-[#344054] mt-6">
          Empowering women to travel with confidence and ease worldwide
        </p>
      </div>

      {/* section-2  */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start ">
        {/* inner-section-1  */}
        <div className="mt-10">
          {/* Left Column */}
          <div className="flex  flex-col items-center lg:items-start gap-10">
            <div
              className="border pr-16 pb-10 px-6 py-6 rounded-xl shadow-md w-full max-w-lg lg:w-[550px]"
              style={{ borderBottomRightRadius: "40%" }}
            >
              <Image src={frame} alt="Community for Women" />
              <h4 className="font-bold text-xl my-4">Affordable Housing</h4>
              <p className="text-gray-600">
                Save money and travel smarter by sharing <br /> accommodations
                with fellow members.
              </p>
            </div>
            <div
              className="border pb-10 px-6 py-6   rounded-xl pr-16 shadow-md w-full max-w-lg lg:w-[550px]"
              style={{ borderTopRightRadius: "40%" }}
            >
              <Image src={frame1} alt="Community for Women" />
              <h4 className="font-bold text-xl my-4">Verified Profiles</h4>
              <p className="text-gray-600">
                A reliable community with verified profiles <br /> for added
                safety and peace of mind.
              </p>
            </div>
          </div>
        </div>
        {/* inner-section-2  */}

        <Image
          src={logo}
          alt="Community for Women"
          style={{ width: "119px", height: "87px" }}
          className="lg:mt-60 mt-10"
        />

        {/* inner-section-3  */}
        <div className="mt-10">
          {/* Right Column */}
          <div className="flex flex-col items-center lg:items-start gap-10 ">
            <div
              className="border pb-10 px-6 py-6  pl-16 rounded-xl shadow-md w-full max-w-lg lg:w-[550px]"
              style={{ borderBottomLeftRadius: "40%" }}
            >
              <Image src={frame2} alt="Community for Women" />
              <h4 className="font-bold text-xl my-4">Flexible Options</h4>
              <p className="text-gray-600">
                From memberships to travel & lifestyle <br /> preferences – you
                have the power to choose.
              </p>
            </div>
            <div
              className="border pt-8 px-6 py-6  pl-16 rounded-xl shadow-md w-full max-w-lg lg:w-[550px]"
              style={{ borderTopLeftRadius: "40%" }}
            >
              <Image src={frame3} alt="Community for Women" />
              <h4 className="font-bold text-xl my-4">Women-Only Spaces</h4>
              <p className="text-gray-600">
                Safe, supportive spaces for women to <br />
                connect and thrive period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
