import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import gridIcon from "../assets/gridIcon.png";
import lawIcon from "../assets/law.png";
import upscIcon from "../assets/upscIcon.png";
import pcsIcon from "../assets/pcsIcon.png";
import buttonarrow from "../assets/button.png";

import clatBanner from "../assets/clatBanner.png";
import upscBanner from "../assets/upscBanner.png";
import pcsBanner from "../assets/pcsBanner.png";
import judiciaryBanner from "../assets/judiciaryBanner.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

const OurCourses = () => {
  const upscCourses = [
    {
      name: "UPSC Legion",
      description: "(Ideal for Early Starters)",
      duration: "3 Years",
      totalClasses: "500+",
      focusAreas: [
        "Mapping, International Organisations",
        "Economic Survey & Current Affairs",
        "Current Affairs Magazine with Editorial Focus",
      ],
      link: "/courses/upsc",
      headerBgColor: "#FDCB82", // Header background color for this course
      footerBgColor: "#FDCB82", // Footer background color for this course
    },
    {
      name: "UPSC Advanced",
      description: "(For Experienced Learners)",
      duration: "2 Years",
      totalClasses: "400+",
      focusAreas: [
        "Advanced Economic Survey",
        "Mock Tests",
        "In-depth Current Affairs Focus",
      ],
      link: "/courses/upsc-advanced",
      headerBgColor: "#A6D3FF",
      footerBgColor: "#A6D3FF",
    },
    // You can add more courses with their own colors
  ];

  const clatCourses = [
    {
      name: "CLAT Basics",
      description: "Start your CLAT preparation from scratch",
      duration: "2 Years",
      totalClasses: "300+",
      focusAreas: [
        "Legal Aptitude",
        "Logical Reasoning",
        "General Knowledge & Current Affairs",
      ],
      link: "/courses/clat",
      headerBgColor: "#FFD1DC",

      footerBgColor: "#FFD1DC",
    },
  ];

  const pcsCourses = [
    {
      name: "PCS Foundation",
      description: "PCS Foundation Course for Beginners",
      duration: "3 Years",
      totalClasses: "500+",
      focusAreas: [
        "General Studies",
        "Political Science",
        "History & Geography",
      ],
      link: "/courses/pcs",
      headerBgColor: "#D1F1D3",

      footerBgColor: "#D1F1D3",
    },
  ];

  const judiciaryCourses = [
    {
      name: "Judiciary Foundation",
      description: "Prepare for the Judiciary exams",
      duration: "3 Years",
      totalClasses: "400+",
      focusAreas: [
        "Constitutional Law",
        "Civil & Criminal Laws",
        "Current Affairs & Case Studies",
      ],
      link: "/courses/judiciary",
      headerBgColor: "#D1C5F9",

      footerBgColor: "#D1C5F9",
    },
  ];

  const [activeTab, setActiveTab] = useState("UPSC"); // Default tab is UPSC
  const location = useLocation();

  // Set the active tab based on the URL query parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [location]);

  return (
    <>
      <h1 className="text-[#1E242C] text-3xl md:text-5xl font-bold text-center my-5 pt-18">
        Our Courses
      </h1>
      {/* Tabs as a secondary navbar */}
      <div className="flex justify-center gap-6 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab("UPSC")}
          className={`flex gap-2 items-center py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white ${
            activeTab === "UPSC"
              ? "bg-[#FA6904] text-white"
              : "bg-white text-[#1E242C]"
          }`}
        >
          <img src={upscIcon} alt="" width={25} /> UPSC
        </button>
        <button
          onClick={() => setActiveTab("PCS")}
          className={`flex gap-2 items-center py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white ${
            activeTab === "PCS"
              ? "bg-[#FA6904] text-white"
              : "bg-white text-[#1E242C]"
          }`}
        >
          <img src={pcsIcon} alt="" width={25} /> PCS
        </button>
        <button
          onClick={() => setActiveTab("Judiciary")}
          className={`flex gap-2 items-center py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white ${
            activeTab === "Judiciary"
              ? "bg-[#FA6904] text-white"
              : "bg-white text-[#1E242C]"
          }`}
        >
          <img src={lawIcon} alt="" width={25} /> Judiciary
        </button>
        <button
          onClick={() => setActiveTab("CLAT")}
          className={`flex gap-2 items-center py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white ${
            activeTab === "CLAT"
              ? "bg-[#FA6904] text-white"
              : "bg-white text-[#1E242C]"
          }`}
        >
          <img src={gridIcon} alt="" width={25} /> CLAT
        </button>
        <button
          onClick={() => setActiveTab("Course5")}
          className={`flex gap-2 items-center py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white ${
            activeTab === "CLAT"
              ? "bg-[#FA6904] text-white"
              : "bg-white text-[#1E242C]"
          }`}
        >
          <img src={gridIcon} alt="" width={25} /> Course5
        </button>
        <button
          onClick={() => setActiveTab("Course5")}
          className={`flex gap-2 items-center py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white ${
            activeTab === "CLAT"
              ? "bg-[#FA6904] text-white"
              : "bg-white text-[#1E242C]"
          }`}
        >
          <img src={gridIcon} alt="" width={25} /> Course5
        </button>
        <button
          onClick={() => setActiveTab("Course5")}
          className={`flex gap-2 items-center py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white ${
            activeTab === "CLAT"
              ? "bg-[#FA6904] text-white"
              : "bg-white text-[#1E242C]"
          }`}
        >
          <img src={gridIcon} alt="" width={25} /> Course5
        </button>
        <button
          onClick={() => setActiveTab("Course5")}
          className={`flex gap-2 items-center py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white ${
            activeTab === "CLAT"
              ? "bg-[#FA6904] text-white"
              : "bg-white text-[#1E242C]"
          }`}
        >
          <img src={gridIcon} alt="" width={25} /> Course5
        </button>
      </div>

      {/* UPSC COURSE TAB */}
      {activeTab === "UPSC" && (
        <div className="UPSC">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            loop={true} // Infinite loop of slides
            className="mySwiper"
          >
            <SwiperSlide className="relative">
              <div className="flex justify-center my-10 mx-5">
                <img src={upscBanner} alt="" className="w-[1400px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="flex justify-center my-10 mx-5">
                <img src={clatBanner} alt="" className="w-[1400px]" />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Map through the courses and dynamically generate course content */}
          <div className="mx-4 my-5 flex justify-center flex-wrap gap-2">
            {upscCourses.map((course, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center  rounded-[24px] m-4  shadow-md   w-[410px]"
              >
                <div
                  className="header w-full text-center rounded-t-[24px]"
                  style={{ backgroundColor: course.headerBgColor }}
                >
                  <h1 className="text-[#1E242C] text-2xl md:text-4xl  font-semibold mt-5 mb-2">
                    {course.name}
                  </h1>
                  <h1 className="text-[#1E242C]   font-regular mb-2 text-center">
                    {course.description}
                  </h1>
                </div>

                <div className="px-4 py-8 ">
                  <ul className="list-disc space-y-1 ml-6 text-[#1E242C] text-md md:text-2xl">
                    <li>Course Duration: {course.duration}</li>
                    <li>Total Classes: {course.totalClasses}</li>
                    {course.focusAreas.map((focusArea, index) => (
                      <li key={index}>{focusArea}</li>
                    ))}
                  </ul>
                </div>

                <div
                  className="footer flex gap-4  justify-center w-full text-center p-4 rounded-b-[24px]"
                  style={{ backgroundColor: course.footerBgColor }}
                >
                  <Link to={course.link}>
                    <button className="flex gap-2 items-center cursor-pointer pl-6 pr-1 py-1 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white transition ease-in-out duration-300">
                      Explore Syllabus{" "}
                      <img src={buttonarrow} alt="" width={40} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CLAT COURSE TAB */}
      {activeTab === "CLAT" && (
        <div className="CLAT">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            loop={true} // Infinite loop of slides
            className="mySwiper"
          >
            <SwiperSlide className="relative">
              <div className="flex justify-center my-10 mx-5">
                <img src={clatBanner} alt="" className="w-[1400px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="flex justify-center my-10 mx-5">
                <img src={clatBanner} alt="" className="w-[1400px]" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="mx-4 my-5 flex justify-center flex-wrap gap-5">
            {clatCourses.map((course, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center  rounded-[24px] m-4  shadow-md   w-[410px]"
              >
                <div
                  className="header w-full text-center rounded-t-[24px]"
                  style={{ backgroundColor: course.headerBgColor }}
                >
                  <h1 className="text-[#1E242C] text-2xl md:text-4xl font-semibold mt-5 mb-2">
                    {course.name}
                  </h1>
                  <h1 className="text-[#1E242C]   font-regular mb-2 text-center">
                    {course.description}
                  </h1>
                </div>

                <div className="px-4 py-8 ">
                  <ul className="list-disc space-y-1 ml-6 text-[#1E242C] text-md md:text-2xl">
                    <li>Course Duration: {course.duration}</li>
                    <li>Total Classes: {course.totalClasses}</li>
                    {course.focusAreas.map((focusArea, index) => (
                      <li key={index}>{focusArea}</li>
                    ))}
                  </ul>
                </div>

                <div
                  className="footer flex gap-4  justify-center w-full text-center p-4 rounded-b-[24px]"
                  style={{ backgroundColor: course.footerBgColor }}
                >
                  <Link to={course.link}>
                    <button className="flex gap-2 items-center cursor-pointer pl-6 pr-1 py-1 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white transition ease-in-out duration-300">
                      Explore Syllabus{" "}
                      <img src={buttonarrow} alt="" width={40} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PCS COURSE TAB */}
      {activeTab === "PCS" && (
        <div className="PCS">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            loop={true} // Infinite loop of slides
            className="mySwiper"
          >
            <SwiperSlide className="relative">
              <div className="flex justify-center my-10 mx-5">
                <img src={pcsBanner} alt="" className="w-[1400px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="flex justify-center my-10 mx-5">
                <img src={pcsBanner} alt="" className="w-[1400px]" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="mx-4 my-5 flex justify-center flex-wrap gap-5">
            {pcsCourses.map((course, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center  rounded-[24px] m-4  shadow-md   w-[410px]"
              >
                <div
                  className="header w-full text-center rounded-t-[24px]"
                  style={{ backgroundColor: course.headerBgColor }}
                >
                  <h1 className="text-[#1E242C] text-2xl md:text-4xl font-semibold mt-5 mb-2">
                    {course.name}
                  </h1>
                  <h1 className="text-[#1E242C]   font-regular mb-2 text-center">
                    {course.description}
                  </h1>
                </div>

                <div className="px-4 py-8 ">
                  <ul className="list-disc space-y-1 ml-6 text-[#1E242C] text-md md:text-2xl">
                    <li>Course Duration: {course.duration}</li>
                    <li>Total Classes: {course.totalClasses}</li>
                    {course.focusAreas.map((focusArea, index) => (
                      <li key={index}>{focusArea}</li>
                    ))}
                  </ul>
                </div>

                <div
                  className="footer flex gap-4  justify-center w-full text-center p-4 rounded-b-[24px]"
                  style={{ backgroundColor: course.footerBgColor }}
                >
                  <Link to={course.link}>
                    <button className="flex gap-2 items-center cursor-pointer pl-6 pr-1 py-1 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white transition ease-in-out duration-300">
                      Explore Syllabus{" "}
                      <img src={buttonarrow} alt="" width={40} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* JUDICIARY COURSE TAB */}
      {activeTab === "Judiciary" && (
        <div className="Judiciary">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            loop={true} // Infinite loop of slides
            className="mySwiper"
          >
            <SwiperSlide className="relative">
              <div className="flex justify-center my-10 mx-5">
                <img src={judiciaryBanner} alt="" className="w-[1400px]" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <div className="flex justify-center my-10 mx-5">
                <img src={judiciaryBanner} alt="" className="w-[1400px]" />
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="mx-4 my-5 flex justify-center flex-wrap gap-5">
            {judiciaryCourses.map((course, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center  rounded-[24px] m-4  shadow-md   w-[410px]"
              >
                <div
                  className="header w-full text-center rounded-t-[24px]"
                  style={{ backgroundColor: course.headerBgColor }}
                >
                  <h1 className="text-[#1E242C] text-2xl md:text-4xl font-semibold mt-5 mb-2">
                    {course.name}
                  </h1>
                  <h1 className="text-[#1E242C] text-xl font-regular mb-2 text-center">
                    {course.description}
                  </h1>
                </div>

                <div className="px-4 py-8 ">
                  <ul className="list-disc space-y-1 ml-6 text-[#1E242C] text-md md:text-2xl">
                    <li>Course Duration: {course.duration}</li>
                    <li>Total Classes: {course.totalClasses}</li>
                    {course.focusAreas.map((focusArea, index) => (
                      <li key={index}>{focusArea}</li>
                    ))}
                  </ul>
                </div>

                <div
                  className="footer flex gap-4  justify-center w-full text-center p-4 rounded-b-[24px]"
                  style={{ backgroundColor: course.footerBgColor }}
                >
                  <Link to={course.link}>
                    <button className="flex gap-2 items-center cursor-pointer pl-6 pr-1 py-1 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white transition ease-in-out duration-300">
                      Explore Syllabus{" "}
                      <img src={buttonarrow} alt="" width={40} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default OurCourses;
