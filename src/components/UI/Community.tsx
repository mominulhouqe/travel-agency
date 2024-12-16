import Image from "next/image";
import image from "../../assets/Frame 172.png";

const Community = () => {
  return (
    <div className="max-w-[1183px] px-2 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12  py-8">
      {/* Section-1: Image */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
        <Image
          src={image}
          alt="Community for Women"
          className="rounded-lg w-full max-w-md lg:max-w-none"
        />
      </div>

      {/* Section-2: Content */}
      <div className="lg:w-1/2 w-full">
        {/* Highlight Line */}
        <p
          className="bg-[#0872BA] rounded-full my-4"
          style={{ width: "57px", height: "8px" }}
        ></p>

        {/* Title */}
        <h1 className="text-3xl my-8 md:text-4xl lg:text-5xl font-semibold text-[#1D2939] leading-tight">
          Your Community for Women Ready to Go Abroad
        </h1>

        {/* Description */}
        <p className="my-14 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
          We’re thrilled you found us! At Expat Global Girls, we empower women
          to pursue their dreams abroad. Our platform connects women seeking
          housemates for international moves and trips, offering a safe,
          supportive community and a searchable directory to help you find the
          perfect living companion. Join us to make your move abroad affordable,
          achievable, and filled with support!
        </p>
        {/* Button */}
        <a
          href="#"
          className="btn mt-6 bg-[#0872BA] text-sm rounded-xl hover:bg-[#065a93] hover:text-white text-white px-7 py-3 flex items-center gap-2"
        >
          Become a Member{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-white"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Community;
