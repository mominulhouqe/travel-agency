import Image from "next/image";
import img1 from "@/assets/icons/freepik--Character--inject-3.jpg";
import img2 from "@/assets/icons/Friendship-pana 1.png";
import img3 from "@/assets/icons/Traveling-bro 1.jpg";

const Counter = () => {
  return (
    <div className="max-w-[1170px] w-full px-[15px]  bg-white rounded-2xl mb-4 mx-auto mt-4 md:-mt-16 z-20 relative  md:h-[270px] ">
      <div className="grid grid-cols-1  sm:grid-cols-3 ">
        {/* Card 1 */}
        <div className="flex flex-col items-start text-left  p-6 rounded-2xl ">
          <Image
            src={img1}
            width={100}
            height={100}
            alt="150+ Countries"
            className="mb-4 "
          />
          <h1 className="text-xl  font-semibold text-blue-600">
            150+ Countries
          </h1>
          <p className="text-gray-600 mt-2">
            Empowering women to explore destinations globally.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start text-left p-6 rounded-2xl mb-4 ">
          <Image
            src={img2}
            width={100}
            height={100}
            alt="Connect & Travel"
            className="mb-4 "
          />
          <h1 className="text-xl font-semibold text-pink-600">
            Connect & Travel
          </h1>
          <p className="text-gray-600 mt-2">
            A trusted community of verified members.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start text-left p-6 rounded-2xl mb-4 ">
          <Image
            src={img3}
            width={100}
            height={100}
            alt="Find Your Tribe"
            className="mb-4 "
          />
          <h1 className="text-xl font-semibold text-green-600">
            Find Your Tribe
          </h1>
          <p className="text-gray-600 mt-2">
            Find like-minded housemates faster and easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
