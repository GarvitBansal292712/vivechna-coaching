import React from "react";
import youtube from "../assets/youtube.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import x from "../assets/x.png";
import linkedin from "../assets/linkedin.png";

import { Link } from "react-router-dom";

import bluemail from "../assets/bluemail.png";
import bluephone from "../assets/bluephone.png";
import bluemap from "../assets/bluemap.png";

import android from "../assets/android.jpg";
import ios from "../assets/ios.jpg";

import playstore from "../assets/playstore.png";
import apple from "../assets/apple.png";

const Footer = () => {
  return (
    <footer className="bg-[#fa6a0444] py-10 md:px-25 px-1">
      <div className="container mx-auto px-4  text-[#224170]">
        <div className="flex justify-evenly items-center border-b-1 border-[#FA6904] pb-5 flex-wrap">
          <div className="flex space-x-8 flex-col md:mb-0 mb-4 gap-4">
            <div>
              <a
                href="tel:+919181323209"
                className="flex items-center space-x-2"
              >
                <img src={bluephone} alt="" />{" "}
                <span className="text-[#224170]">+91 8130433691</span>
                <span className="text-[#224170]">+91 8053099154</span>
              </a>
            </div>
            <div>
              <a
                href="mailto:Vivechna@gmail.com"
                className="flex items-center space-x-2"
              >
                <img src={bluemail} alt="" />
                <span className="text-[#224170]">iasvicechna@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <img src={bluemap} alt="" />{" "}
              <span className="text-[#224170] text-sm">
                M1, near Shree Krishna <br />
                Mandir, Block M, Old DLF <br />
                Colony, Sector 14, Gurugram, <br />
                Haryana 122001{" "}
              </span>
              <span className="text-[#224170] text-sm">
                Police Chowki, Near, 67, FIRST <br />
                Floor Model Town Extension, <br />
                Sector 3, Rewari, Haryana <br />
                123401{" "}
              </span>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap justify-center items-center">
            <div className="flex space-x-8">
              <div>
                <h4 className="text-lg font-semibold">Home</h4>
                <ul>
                  <li>
                    <Link to="/our-courses" className="text-[#224170]">
                      Our Courses
                    </Link>
                  </li>

                  <li>
                    <Link to="/about-us" className="text-[#224170]">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="text-[#224170]">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:px-15">
                <h4 className="text-lg font-semibold">Our Policies</h4>
                <ul>
                  <li>
                    <Link to="/privacy-policy" className="text-[#224170]">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/refund-policy" className="text-[#224170]">
                      Refund Policy{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Downloads */}
            <div className="flex flex-col gap-3 justify-center">
              <h4 className="text-lg font-semibold text-center">
                Mobile Application
              </h4>
              <span className="text-[#224170] text-center md:text-left">
                Download Vivechna IAS and Judiciary Android and iOS App.
              </span>
              <div className="flex gap-3 justify-center mb-4">
                <div className="flex flex-col gap-3">
                  <img src={android} alt="" width={100} />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.vivechnaias&pcampaignid=web_share"
                    className="text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={playstore} alt="" width={100} />
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <img src={ios} alt="" width={100} />
                  <a
                    href="https://apps.apple.com/eg/app/vivechna-ias-judiciary-academy/id6547848102"
                    className="text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={apple} alt="" width={100} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Socials */}
          <div className="flex items-center space-x-4 ">
            <a
              href="https://youtube.com/@vivechna?si=ieYLI75Mgdv6GXIR"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="youtube" width={50} />
            </a>
            <a
              href="https://www.instagram.com/vivechnaofficial?igsh=NDRtMnQxbGVqcGh0"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="insta" width={50} />
            </a>
            <a
              href="http://facebook.com/vivechnaofficial"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="insta" width={50} />
            </a>
            <a
              href="http://x.com/Vivechnaindia"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={x} alt="insta" width={50} />
            </a>
            <a
              href="http://in.linkedin.com/company/vivechna-ias-judiciary-academy"
              className="text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="insta" width={50} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-[#224170]">
          <p>© 2023 Vivechna IAS and Judiciary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
