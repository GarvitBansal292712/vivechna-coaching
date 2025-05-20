import { Link } from "react-router-dom"; // Import Link from react-router-dom

import buttonarrow from "../assets/button.png";

import lawStatue from "../assets/lawStatue.png";

import ceo2 from "../assets/ceo2.png";

import clatBanner from "../assets/clatBanner.png";

const CLAT = () => {
  return (
    <>
      <h1 className="text-[#1E242C] text-3xl md:text-5xl font-bold text-center my-5 pt-18">
        CLAT{" "}
      </h1>
      <div className="CLAT">
        {/* Clat Content */}
        <div className="flex justify-center my-10 mx-5">
          <img src={clatBanner} alt="" className="w-[1400px]" />
        </div>

        <div className="  mx-12 md:mx-18  flex z-10">
          <div className="z-10">
            <h1 className="border-b-4 border-[#FA6904] text-2xl md:text-3xl font-regular inline">
              Description
            </h1>
            <div>
              <h1 className="text-[#1E242C] text-xl md:text-4xl font-semibold mt-5 mb-2">
                CLAT Odyssey:-
              </h1>
              <p className="text-[#1E242C] text-xl md:text-2xl mb-5">
                2 Years Programme Target Years 2027 Course Offerings: After 10th
                Program (For Early Starters): <br /> Features:
              </p>
              <h1 className="text-[#1E242C] text-xl md:text-3xl font-bold mb-2">
                Duration: 2 years{" "}
              </h1>
              <p className="text-[#1E242C] text-xl md:text-2xl mb-5">
                Number of Classes: 450+Hours
              </p>
              <h1 className="text-[#1E242C] text-xl md:text-3xl font-bold mb-2">
                Special GK Session Sessions
              </h1>
              <p className="text-[#1E242C]text-xl md:text-2xl mb-5 md:w-[500px]">
                Current Affairs Magazine Special Focus on Reading Comprehension
                Editorials Discussion 100+Mock Test (70 CLAT, 30 AILET)
              </p>
              <h1 className="text-[#1E242C] text-xl font-bold mb-2">
                Books & Material Fees:
              </h1>
              <p className="text-[#1E242C] text-xl md:text-2xl mb-5">
                CLASSROOM : 85,000 HYBRID : 90,000 ONLINE : 20,000{" "}
              </p>
              <div className="flex gap-4 mt-8">
                <Link to="/contact">
                  <button className="px-8 py-1 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white  transition ease-in-out duration-300">
                    Enquiry
                  </button>
                </Link>
                              <a
                href="http://Online.vivechna.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex gap-2 items-center pl-6 pr-1 py-2 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white  transition ease-in-out duration-300">
                  Buy Now <img src={buttonarrow} alt="" width={40} />
                </button>
                </a>
              </div>
            </div>
          </div>
          <div className="-z-10 hidden md:block">
            <img src={lawStatue} alt="" />
          </div>
        </div>
        <div className="mx-12 md:mx-18  mt-15">
          <h1 className="text-[#224170] text-2xl md:text-5xl font-bold text-center">
            Why Vivechna <span className="text-[#FA6904]">IAS & Judiciary</span>{" "}
            Academy:-
          </h1>
          <p className="text-[#224170] text-center mt-3 text-lg mb-5">
            Learn from experienced mentors who’ve cracked the exam themselves.
          </p>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            <ul className="flex flex-col text-xl md:text-2xl font-regular text-[#1E242C] px-3 mb-5 list-disc leading-[30px]  md:space-y-0  space-y-4 md:leading-[50px] w-[650px]">
              <li>
                Team of Experienced Faculty, Senior Advocates & Retired Judges.
              </li>
              <li>30 minutes doubt clearing session after every Class</li>
              <li>
                Separate classes of Editorials, Current Affairs, Reading
                Comprehension
              </li>
              <li>Learning notes and Study materials</li>
              <li>Personalised mentorship program</li>
              <li>One on one exam-oriented strategy planning.</li>
              <li>Diagnostic Test for identifying weak areas</li>
              <li>After Class Daily practice sheet 10 Ques Everyday</li>
              <li>Focused Session for weak areas</li>
              <li>Past year questions practice</li>
              <li>Weekly, monthly and surprise test</li>
              <li>CLAT Replica Mock Test</li>
              <li>Regular Basis Personality Development Classes</li>
              <li>Fortnightly Parents Teaching Meeting</li>
              <li>WhatsApp group dedicated to exam preparation</li>
            </ul>
            {/* <img src={ceo2} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CLAT;
