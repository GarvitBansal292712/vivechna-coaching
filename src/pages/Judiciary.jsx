import { Link } from "react-router-dom"; // Import Link from react-router-dom

import buttonarrow from "../assets/button.png";

import judge from "../assets/judge.png";
import ceo2 from "../assets/ceo2.png";

import judiciaryBanner from "../assets/judiciaryBanner.png";
// import clatBanner from "../assets/clatBanner.png";
// import pscBanner from "../assets/pscBanner.png";
const Judiciary = () => {
  return (
    <>
      <h1 className="text-[#1E242C] text-3xl md:text-5xl font-bold text-center my-5 pt-18">
        Judiciary{" "}
      </h1>
      <div className="Judiciary">
        {/* JUDICIARY Content */}
        <div className="flex justify-center my-10 mx-5">
          <img src={judiciaryBanner} alt="" className="w-[1400px]" />
        </div>

        <div className="  mx-12 md:mx-18  flex z-10 md:h-[800px] items-center">
          <div className="z-10">
            <h1 className="border-b-4 border-[#FA6904] text-xl md:text-3xl font-regular inline">
              Description
            </h1>
            <div>
              <h1 className="text-[#1E242C]  text-xl md:text-4xl font-semibold mt-5 mb-2">
                Judiciary:- Mode of Coaching: Classroom/Online/ <br />
                Hybrid
              </h1>
              {/* <p className="text-[#1E242C] text-2xl mb-5">
                  1 Years Programme
                </p> */}
              <h1 className="text-[#1E242C]  text-xl md:text-3xl font-bold mb-2">
                Duration: 12 Months
              </h1>
              <p className="text-[#1E242C]  text-xl md:text-2xl mb-5">
                Number of lectures: 400+Hours <br />
                Masterstroke Lectures: 100+ Hour{" "}
              </p>
              <h1 className="text-[#1E242C]  text-xl md:text-3xl font-bold mb-2">
                Special Legal Current affairs Sessions{" "}
              </h1>
              <ul className="text-[#1E242C]  text-xl md:text-2xl mb-5 md:w-[500px] list-disc">
                <li>Landmark Judgements Sessions</li>
                <li>Everyday Mains Answer Writing Session</li>
                <li>Pre Judiciary Replica 20 Test</li>
                <li>Mains Judiciary Replica 10 Test</li>
                <li>Essay Writing Practice</li>
                <li>Monthly Current Affairs Magazine</li>
              </ul>
              <h1 className="text-[#1E242C]  text-xl md:text-3xl font-bold mb-2">
                Books & Material Fees:
              </h1>
              <p className="text-[#1E242C]  text-xl md:text-2xl mb-5">Rs : 75,000 </p>
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
            <img src={judge} alt="" />
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
                Learn from experienced mentors who’ve cracked the exam
                themselves.
              </li>
              <li>Many of our students are now serving officers.</li>
              <li>In-Depth Coverage of UPSC Syllabus</li>
              <li>We simplify complex topics to build a strong foundation.</li>
              <li>Proven Results & Success Stories</li>
              <li>High Selection Rate Every Year</li>
              <li>Updated, Exam-Oriented Study Material</li>
              <li>Modern Classrooms with Smart Learning Tools</li>
              <li>Online + Offline Learning Options</li>
              <li>Mock Tests with Detailed Evaluation</li>
              <li>Building blocks of NCERT (6 to 12 Class)</li>
              <li>
                Special Session for State Specific History, Geography,
                Economics, Polity, Society and Culture.
              </li>
              <li>Editorials Analysis Topic analysis</li>
              <li>Summary of Yojana, Kurukshetra</li>
              <li>Weekly Current Affairs Classes</li>
              <li>Monthly Current Affairs Magazine</li>
              <li>Daily Mains Answer Writing</li>
              <li>30 minutes doubt clearing session after Classes</li>
              <li>Personalized mentorship program</li>
              <li>One on one exam-oriented strategy planning</li>
              <li>Diagnostic Test for identifying weak areas</li>
              <li>Focused Session for weak areas</li>
            </ul>
            {/* <img src={ceo2} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Judiciary;
