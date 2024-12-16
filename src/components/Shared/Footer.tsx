"use client";
import Image from "next/image";
import footerLogo from "../../assets/imgpsh_fullsize_anim 1.png";
import twitterLogo from "../../assets/icons/twitter (2) 1.png";
import instagramLogo from "../../assets/icons/instagram 1.png";
import linkedinLogo from "../../assets/icons/linkedin 1.png";
import facebookLogo from "../../assets/icons/facebook 1.png";

const Footer = () => {
  return (
    <div className="my-10 max-w-[1203px] mx-auto px-2">
      {/* footer-1st-section  */}
      <div className="flex  flex-col lg:flex-row md:flex-row justify-between items-start lg:items-center  lg:gap-24  pt-8">
        {/* 1st Section */}
        <div className="mb-6 lg:mb-0 lg:w-1/2">
          <div>
            <Image src={footerLogo} width={108} height={80} alt="logo" />
          </div>
          <div className="my-4">
            <p className="text-lg lg:text-base text-gray-800">
              Scan a Turning Hearts Medallion to learn about and interact <br />{" "}
              with those who have passed on. You can also begin <br />{" "}
              documenting the legacy you wish to leave behind.
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold my-2">Social Media:</p>
            <div className="flex gap-4 my-4">
              <Image src={twitterLogo} width={24} height={24} alt="Twitter" />
              <Image
                src={instagramLogo}
                width={24}
                height={24}
                alt="Instagram"
              />
              <Image src={linkedinLogo} width={24} height={24} alt="LinkedIn" />
              <Image src={facebookLogo} width={24} height={24} alt="Facebook" />
            </div>
          </div>
        </div>

        <div className="flex lg:w-1/2 flex-col lg:flex-row md:flex-col ">
          {/* 2nd Section */}
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            <ul className="space-y-2">
              <li className="font-bold text-lg">Quick Links</li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                Home
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                FAQ
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                Country search
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                Register
              </li>
            </ul>
          </div>

          {/* 3rd Section */}
          <div className="lg:w-1/2 lg:mt-10 lg:text-right">
            <p className="text-gray-800 text-sm lg:text-base mb-2 lg:text-center text-left mr-8">
              (316) 555-0116
            </p>
            <p className="text-gray-800 text-sm lg:text-base">
              deanna.curtis@example.com
            </p>
          </div>
        </div>
      </div>

      {/* footer-2nd-section  */}

      {/* Footer - 2nd Section */}
      <div className="mt-8">
        <hr className="border-gray-300" />
        <p className="text-center lg:text-right text-gray-800 text-sm md:text-base mt-4">
          © {new Date().getFullYear()} Ash and Fire. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
