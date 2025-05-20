import { Link } from "react-router-dom"; // Import Link from react-router-dom

import buttonarrow from "../assets/button.png";

import flag from "../assets/flag.png";

import ceo2 from "../assets/ceo2.png";

// import clatBanner from "../assets/clatBanner.png";
// import pscBanner from "../assets/pscBanner.png";
const UPSC = () => {
  return (
    <>
      <h1 className="text-[#1E242C] text-3xl md:text-5xl font-bold text-center my-5 pt-18">
        UPSC{" "}
      </h1>
      {/* UPSC COURSE TAB */}

      <div className="UPSC">
        {/* UPSC Content */}
        {/* <div className="flex justify-center my-10 mx-5">
                  <img src={upscBanner} alt="" className="w-[1400px]" />
                </div> */}

        <div className="  mx-12 md:mx-18  flex z-10">
          <div className="z-10">
            <h1 className="border-b-4 border-[#FA6904] text-3xl font-regular inline">
              Description
            </h1>
            <div>
              <h1 className="text-[#1E242C] text-2xl md:text-4xl font-semibold mt-5 mb-2">
                UPSC Legion:-
              </h1>
              <p className="text-[#1E242C] text-xl md:text-2xl mb-5">
                After 12th Program (For Early Starters): <br />
                Features:
              </p>
              <h1 className="text-[#1E242C] text-xl md:text-3xl font-bold mb-2">
                Duration: 3 years
              </h1>
              <p className="text-[#1E242C] text-xl md:text-2xl mb-5">
                Number of Classes: 500+ Classes <br />
                Masterstroke Classes: 315+ Hours
              </p>
              <h1 className="text-[#1E242C] text-xl md:text-3xl font-bold mb-2">
                Special Classes for mapping, International organisation,
                Economic Survey & Current Affairs.
              </h1>
              <p className="text-[#1E242C] text-xl md:text-2xl mb-5 md:w-[500px]">
                Current Affairs Magazine Special Focus on Editorials Discussion.
                Prelims- 90 Test (45 Basic test, 35 UPSC Replica 10 All India
                Mock Test) Mains 40 Test +10 Test Essay.
              </p>
              <h1 className="text-[#1E242C] text-2xl md:text-3xl font-bold mb-2">
                Books & Material Fees:
              </h1>
              <p className="text-[#1E242C] text-xl md:text-2xl mb-5">
                CLASSROOM : 180,000 HYBRID : 210,000 ONLINE : 50,000
              </p>
              <div className="flex gap-4 mt-8">
                <Link to="/contact">
                  <button className="px-8 py-4 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white  transition ease-in-out duration-300">
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
            <img src={flag} alt="" />
          </div>
        </div>
        <div className="mx-12 md:mx-18  mt-15">
          <h1 className="text-[#224170] text-3xl md:text-5xl font-bold text-center">
            Why Vivechna <span className="text-[#FA6904]">IAS & Judiciary</span>{" "}
            Academy:-
          </h1>
          <p className="text-[#224170] text-center mt-3 text-lg mb-5">
            Learn from experienced mentors who’ve cracked the exam themselves.
          </p>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            <ul className="flex flex-col text-xl md:text-2xl font-regular text-[#1E242C] px-3 mb-5 list-disc leading-[30px]  md:space-y-0  space-y-4 md:leading-[50px]">
              <li>Many of our students are now serving officers.</li>
              <li>In-Depth Coverage of UPSC Syllabus</li>
              <li>Proven Results & Success Stories</li>
              <li>High Selection Rate Every Year </li>
              <li>We simplify complex topics to build a strong foundation. </li>
              <li>Real Success Stories That Inspire</li>
              <li>Updated, Exam-Oriented Study Material </li>
              <li>Modern Classrooms with Smart Learning Tools</li>
              <li>Online + Offline Learning Options</li>
              <li>Mock Tests with Detailed Evaluation</li>
              <li>Supportive & Stress-Free Learning Environment</li>
            </ul>
            {/* <img src={ceo2} alt="" /> */}
          </div>
        </div>
      </div>

      {/* <div className="mx-14 my-5">
        <div className="flex flex-col justify-center items-center border-2 border-[#FA6904] rounded-[24px] p-1 shadow-lg w-[410px]">
          <h1 className="text-[#1E242C] text-4xl font-semibold mt-5 mb-2">
            UPSC Legion
          </h1>
          <h1 className="text-[#1E242C] text-xl font-regular mb-2">
            (Ideal for Early Starters){" "}
          </h1>
          <ul className="list-disc space-y-1 ml-6 text-[#1E242C]">
            <li>Course Duration: 3 Years</li>
            <li>Total Classes: 500+</li>
            <li>Mapping, International Organisations</li>
            <li>Economic Survey & Current Affairs</li>
            <li>Current Affairs Magazine with Editorial Focus </li>
          </ul>
          <div className="flex gap-4 my-4 justify-center">
            <Link to="/our-courses?tab=UPSC">
              
               <button className="flex gap-2 items-center cursor-pointer pl-6 pr-1 py-1 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white  transition ease-in-out duration-300">
                Explore Syllabus <img src={buttonarrow} alt="" width={40} />
              </button>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default UPSC;
