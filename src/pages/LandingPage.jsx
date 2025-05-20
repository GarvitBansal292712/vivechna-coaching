import { Link } from "react-router-dom";
import heroImage from "../assets/hero.svg"; // Import the hero image directly
import heroImage2 from "../assets/hero2.svg"; // Import the hero image directly
import { useRef, useState, useEffect } from "react";

import clat from "../assets/clatAvatar.png";
import upsc from "../assets/upsc.png";
import psc from "../assets/psc.png";
import judiciary from "../assets/judiciary.png";

import tick from "../assets/tick.png"; // Assuming the tick vector is named tick.svg
import ceoImage from "../assets/ceo.png"; // CEO image
import program1 from "../assets/program1.png";
import program2 from "../assets/program2.jpg";

import heading from "../assets/headingimg.png";
import buttonarrow from "../assets/button.png";
import cta from "../assets/cta.png";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";

import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";

import faq1 from "../assets/faq1.png";
import faq2 from "../assets/faq2.png";
import faq3 from "../assets/faq3.png";
import faq4 from "../assets/faq4.png";
import faq5 from "../assets/faq5.png";

import star from "../assets/star.png";

import topper1 from "../assets/topper1.png";
import topper2 from "../assets/topper2.png";
import topper3 from "../assets/topper3.png";
import topper4 from "../assets/topper4.png";
import topper5 from "../assets/topper5.png";
import topper6 from "../assets/topper6.png";
import topper7 from "../assets/topper7.png";
import topper8 from "../assets/topper8.png";
import topper9 from "../assets/topper9.png";
import topper10 from "../assets/topper10.png";
import topper11 from "../assets/topper11.png";
import topper12 from "../assets/topper12.png";
import topper13 from "../assets/topper13.png";
import topper14 from "../assets/topper14.png";
import topper15 from "../assets/topper15.png";

import testimonial1 from "../assets/testimonial1.png";
import rating from "../assets/rating.png";

import akshat from "../assets/akshat.png";
import nausheen from "../assets/nausheen.png";
import neha from "../assets/neha.png";
import laiba from "../assets/laiba.png";
import shlok from "../assets/shlok.png";
import shivangi from "../assets/shivangi.png";
import karambir from "../assets/karambir.png";
import uditi from "../assets/uditi.png";

import contactimg from "../assets/contactimg.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import emailjs from "emailjs-com";

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_my49xee", // Replace with your service ID
        "template_hfob2d4", // Replace with your template ID
        formData,
        "nentHFz2l-aDpOBF-" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            mobile: "",
            query: "",
          }); // Reset the form after success
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Something went wrong, please try again.");
        }
      );
  };

  const [value, setValue] = useState("");

  const courseData = [
    {
      title: "CLAT",
      description:
        "Ace the Law Admission Test with India’s most comprehensive legal prep course.",
      tags: [
        "English",
        "Current Affairs",
        "Quantitative",
        "Legal Reasoning",
        "Logical Reasoning",
      ],
      image: clat,
      category: "Crash Courses",
    },
    {
      title: "UPSC",
      description: `Your Path to India's Most Prestigious Career  Starts Here.`,
      tags: [
        "History",
        "Indian Polity",
        "Geography",
        "Environment & Ecology",
        "Ethics",
      ],
      image: upsc, // Replace with actual image for UPSC
      category: "Current Affairs",
    },
    {
      title: "Judiciary",
      description:
        "The Judiciary Gold Batch is designed program for aspirants preparing for Civil Judge.",
      tags: [
        "Constitution of India",
        "Contract Law",
        "Personal mentorship",
        "History",
      ],
      image: judiciary, // Replace with actual image for Judiciary
      category: "Crash Courses",
    },
    {
      title: "PCS",
      description:
        "Our  PCS course is designed for aspirants aiming to crack the PCS.",
      tags: [
        "GS Paper Coverage",
        "CSAT",
        "Ethics",
        "Essay Writing Techniques",
        "History",
      ],
      image: psc, // Replace with actual image for Haryana PCS
      category: "Test Series",
    },
  ];

  const [selectedTab, setSelectedTab] = useState("All Courses"); // Tracks the selected tab

  // Function to filter courses based on selected tab
  const filteredCourses = courseData.filter((course) => {
    if (selectedTab === "All Courses") return true;
    return course.category === selectedTab;
  });

  // const faqData = [
  //   {
  //     question:
  // "What exactly is the UPSC Civil Services Examination (CSE)? ",
  //     answer:
  //       "The Union Public Service Commission (UPSC) is India's central agency responsible for conducting examinations for recruitment to various government services. The Civil Services Examination (CSE) is the highly competitive national exam administered by UPSC to select candidates for prestigious roles within the Indian government. These roles, often referred to as Civil Services, are directly related to public service and administration. Key services include the Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), and Indian Revenue Service (IRS), among others. The IAS is widely regarded as the premier civil service. The fundamental goal of these services is dedicated public service. Understanding this basic definition is the starting point for most aspirants, and providing a clear explanation establishes the website as a knowledgeable resource. ",
  //     image: faq1,
  //   },
  //   {
  //     question: " What are the different Civil Services I can join through the UPSC CSE? ",
  //     answer:
  //       "The UPSC CSE is the gateway to a wide array of services, broadly categorized as follows: All India Services: These services work under both the Union (Central) Government andState Governments. They include:",
  //     image: faq2,
  //   },
  //   {
  //     question: "Do you provide doubt-solving sessions?",
  //     answer:
  //       "Yes, we have dedicated doubt-solving sessions after every class and also during weekends.",
  //     image: faq3,
  //   },
  //   {
  //     question: "What subjects do you teach?",
  //     answer:
  //       "We offer comprehensive coaching for students from Class 7 to 12 in subjects including Mathematics, Science, English, Social Studies, and more.",
  //     image: faq4,
  //   },
  //   {
  //     question: "How can I enroll in a course?",
  //     answer:
  //       "You can enroll through our website by filling out the online application form, or by visiting our office directly.",
  //     image: faq5,
  //   },
  // ];
  const [openFAQ, setOpenFAQ] = useState(null); // Track which FAQ is open

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null); // Close the FAQ if it's already open
    } else {
      setOpenFAQ(index); // Open the clicked FAQ
    }
  };

  // Separate FAQs into two columns

  const testimonials = [
    {
      name: "Akshat Dalal",
      // role: "Final-Year Engineering Student",
      image: akshat,
      rating: "5.0",
      description:
        "Vivechna IAS & Judiciary Academy is one of the best institutes for serious aspirants. The teachers are highly dedicated and focus on concepts as well as answer writing. They guide each student personally and help build confidence for exams. The study material is up-to-date and very helpful. Thanks to their support, I have seen real improvement in my preparation. Highly recommend it to anyone who wants to succeed in civil services or judiciary exams.",
    },
    {
      name: "Shivangi Modanwal",
      // role: "MBA Student",
      image: shivangi,
      rating: "5.0",
      description:
        "Vivechna IAS & Judiciary Academy has been a game-changer for my UPSC preparation! The coaching provided is top-notch, and the faculty is incredibly supportive. They offer comprehensive guidance, helping students stay focused and motivated throughout their journey. The study materials and resources are well-structured, making it easier to grasp complex topics. I appreciate the personalized attention and regular assessments that help identify areas for improvement. Thanks to Vivechna IAS Academy, I feel more confident and prepared for the UPSC exams. Highly recommended for aspirants looking for quality coaching and mentorship!",
    },
    {
      name: "Shlok Dalal",
      // role: "Medical Student",
      image: shlok,
      rating: "5.0",
      description:
        "Vivechna is a leading coaching centre in Gurugram for judicial and civil services aspirants. The faculty is highly professional, always ready to guide and support students. Their expert mentorship has been a turning point for many in achieving their goals. The management places the utmost priority on students’ interests. The teachers are known for their patience and dedication, offering thoughtful solutions to every student’s concerns — a quality that truly sets them apart.",
    },
    {
      name: "Uditi Mittal",
      // role: "Medical Student",
      image: uditi,
      rating: "5.0",
      description:
        "A big thank you to Ranjeet Sir and Vivechna Academy for making me what I am today, this journey of judgeship is dedicated to my mentors like Sir who helped me at every step of my preparation, be it mains answer writing or those endless mock interviews, I will always be grateful for his immense support and guidance 🙏🏻",
    },
    {
      name: "Laiba sawood",
      // role: "Medical Student",
      image: laiba,
      rating: "5.0",
      description:
        "Vivechna IAS & Judiciary Academy is strong on faculty experience, structured classes, and personalized mentorship. It’s especially good for Judiciary prep and offers solid support for Hindi-medium students. Downsides include occasional large batches and mixed reviews on online class quality. Worth considering if you want focused guidance over big-brand coaching.",
    },
    {
      name: "Neha Verma",
      // role: "Medical Student",
      image: neha,
      rating: "5.0",
      description:
        "Informative, memorable and truly transformative. I had not expected my experience at Vivechna Academy to leave such a significant impression on my personal and professional life. I got to meet and learn from so many amazing mentors, particularly Ranjeet sir These are industry-known people and I could have never imagined being mentored by them and to interact with them. I'm seriously thankful for that. Good times, great people, and a career boost - that’s the best way to describe my time at Vivechna",
    },
    {
      name: "Nausheen Khan",
      // role: "Medical Student",
      image: nausheen,
      rating: "5.0",
      description:
        "The class is well-organized and informative. The instructor's passion for the subject is contagious. The class offers valuable insights and practical skills.",
    },
    {
      name: "Karambir Yadav",
      // role: "Medical Student",
      image: karambir,
      rating: "5.0",
      description:
        "Best academy for IAS and judiciary in gurugram Delhi Rewari..",
    },
  ];

  const toppers = [
    {
      img: topper1,
    },
    {
      img: topper15,
    },
    {
      img: topper2,
    },
    {
      img: topper3,
    },
    {
      img: topper12,
    },
    {
      img: topper4,
    },
    {
      img: topper5,
    },
    {
      img: topper6,
    },
    {
      img: topper7,
    },
    {
      img: topper8,
    },
    {
      img: topper9,
    },
    {
      img: topper10,
    },
    {
      img: topper11,
    },
    {
      img: topper13,
    },
    {
      img: topper14,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Implement your search logic here
    console.log("Search Term:", searchTerm);
  };

  // Slick Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop of slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Auto slide every 3 seconds
    fade: true, // Use fade effect between slides
    dotsClass:
      "slick-dots absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2",
  };

  const stats = [
    { value: "15K+", label: "Number Of Students", icon: icon1 },
    { value: "80%", label: "Percentage Of Success", icon: icon2 },
    { value: "35", label: "Number Of Questions", icon: icon3 },
    { value: "25+", label: "Number Of Experts", icon: icon4 },
    { value: "10+", label: "Years Of Experience", icon: icon5 },
  ];

  const steps = [
    { title: "Sign Up", description: "Sign in to get started", icon: step1 },
    {
      title: "Tell us About assignment",
      description: "Enter Detail for the assignment you want to get complete.",
      icon: step2,
    },
    {
      title: "Pay the amount",
      description: "Pay the amount to proceed further",
      icon: step3,
    },
    {
      title: "Get Result",
      description: "Get your assignment done with our expert.",
      icon: step4,
    },
  ];

  return (
    <>
      {/* HERO SECTION */}

      <section className="pt-18">
        <div className="relative mb-15 ">
          {/* Swiper Background Image Slider */}
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
            {/* Hero Slide with your image */}
            <SwiperSlide className="relative">
              <img
                src={heroImage} // Set your hero image as the background
                alt="Hero"
                className="w-full h-[250px] md:h-[750px] object-cover"
              />
              {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 px-4 sm:px-8 my-6">
                 <h1 className="text-white text-2xl sm:text-5xl font-bold mt-15 text-center">
                  Vivechna...... Where knowledge adds color{" "}
                </h1>
              </div> */}
              {/* Overlay Content */}
            </SwiperSlide>

            {/* Other Slides (if needed) */}
            <SwiperSlide className="relative">
              <img
                src={heroImage2} // Use the same or different image for other slides
                alt="Slide 2"
                className="w-full  h-[250px] md:h-[750px] object-cover"
              />
              {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 px-4 sm:px-8 my-6">
                 <h1 className="text-white text-2xl sm:text-5xl font-bold mt-15 text-center">
                  Vivechna...Committed to success{" "}
                </h1>
              </div> */}
              {/* Overlay Content */}
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* OUR COURSES TAB */}
      <section>
        <h1 className="text-[#224170] text-3xl md:text-5xl font-bold text-center">
          Discover Our <span className="text-[#FA6904]">Courses</span>{" "}
        </h1>
        <p className="text-[#224170] text-center mt-3 text-lg p-3">
          Find the best Course for your Career that boosts your Knowledge.
        </p>
        <div className="max-w-6xl mx-auto p-6">
          {/* Tabs */}
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <button
              onClick={() => setSelectedTab("All Courses")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white  ${
                selectedTab === "All Courses"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setSelectedTab("Crash Courses")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white  ${
                selectedTab === "Crash Courses"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              Crash Courses
            </button>
            <button
              onClick={() => setSelectedTab("Test Series")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white  ${
                selectedTab === "Test Series"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              Test Series
            </button>
            <button
              onClick={() => setSelectedTab("Current Affairs")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904]  cursor-pointer hover:bg-[#FA6904] hover:text-white ${
                selectedTab === "Current Affairs"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              Current Affairs
            </button>
            <button
              onClick={() => setSelectedTab("All Courses")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white  ${
                selectedTab === "All Courses"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setSelectedTab("Crash Courses")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white  ${
                selectedTab === "Crash Courses"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              Crash Courses
            </button>
            <button
              onClick={() => setSelectedTab("Test Series")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904] cursor-pointer hover:bg-[#FA6904] hover:text-white  ${
                selectedTab === "Test Series"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              Test Series
            </button>
            <button
              onClick={() => setSelectedTab("Current Affairs")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904]  cursor-pointer hover:bg-[#FA6904] hover:text-white ${
                selectedTab === "Current Affairs"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              Current Affairs
            </button>
            {/* <button
              onClick={() => setSelectedTab("Current Affairs")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904]  cursor-pointer hover:bg-[#FA6904] hover:text-white ${
                selectedTab === "Current Affairs"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              DUMMY 1
            </button>
            <button
              onClick={() => setSelectedTab("Current Affairs")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904]  cursor-pointer hover:bg-[#FA6904] hover:text-white ${
                selectedTab === "Current Affairs"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              DUMMY 2
            </button>
            <button
              onClick={() => setSelectedTab("Current Affairs")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904]  cursor-pointer hover:bg-[#FA6904] hover:text-white ${
                selectedTab === "Current Affairs"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              DUMMY 3
            </button>
            <button
              onClick={() => setSelectedTab("Current Affairs")}
              className={`py-2 px-6 rounded-[10px] border-1 border-[#FA6904]  cursor-pointer hover:bg-[#FA6904] hover:text-white ${
                selectedTab === "Current Affairs"
                  ? "bg-[#FA6904] text-white"
                  : "bg-white text-[#1E242C]"
              }`}
            >
              DUMMY 4
            </button> */}
          </div>

          {/* Course Cards */}
          <Swiper
            slidesPerView={1} // Default for larger screens
            spaceBetween={30} // Space between slides
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // When the screen width is <= 640px, show 1 slide
              640: {
                slidesPerView: 1, // 1 slide per view on mobile
                spaceBetween: 20, // Smaller space between slides on mobile
              },
              // When the screen width is > 640px, show 3 slides
              768: {
                slidesPerView: 2, // 3 slides per view on tablets/desktops
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3, // 3 slides per view on tablets/desktops
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay, Pagination]} // Add Pagination module
            className="mySwiper"
          >
            {filteredCourses.map((course, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col gap-3 mt-5 bg-[#fa6a041c] border-2 border-[#FA6904] rounded-[19.8px] px-1   py-2 mb-12"
              >
                <div className="flex justify-center">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-20 h-20"
                  />
                </div>
                <p className="font-semibold text-md text-center my-2">
                  {course.title}
                </p>
                <p className="font-regular text-sm text-[#475569] text-center my-2">
                  {course.description}
                </p>
                <div className="flex justify-center flex-wrap gap-2">
                  {course.tags.map((tag, tagIndex) => (
                    <p
                      key={tagIndex}
                      className=" text-sm font-semibold rounded-[99px] px-2 py-1 border-1 border-[#FA6904] text-[#323C4B] "
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <div className="flex justify-center mt-2">
                  {/* <a
                    href="http://Online.vivechna.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex gap-2 cursor-pointer items-center pl-6 pr-1 py-1 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white transition ease-in-out duration-300">
                      Buy Now <img src={buttonarrow} alt="arrow" width={40} />
                    </button>
                  </a> */}
                  <Link to="/our-courses">
                    <button className="flex gap-2 items-center cursor-pointer pl-6 pr-1 py-1 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white transition ease-in-out duration-300">
                      Explore Course <img src={buttonarrow} alt="" width={40} />
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CONTACT US */}
      <section>
        <div className="flex flex-col md:flex-row  items-center rounded-lg  md:justify-evenly gap-12">
          <img src={contactimg} alt="" width={700} className="rounded-xl"/>
          <div>
            <div className="flex justify-center items-center min-h-screen ">
              <div className="bg-white p-8  w-full shadow-lg  rounded-lg sm:w-150" >
                {/* Form Heading */}
                <h1 className="text-[#224170] text-3xl md:text-5xl font-bold text-left">
                  Get In Touch{" "}
                </h1>
                <p className="text-[#224170] text-left mt-1 text-lg py-3">
                  Get free Career Counseling{" "}
                </p>

                {/* Form Fields */}
                <form onSubmit={handleSubmit}>
                  {/* Your Name */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm text-[#1E242C] font-medium mb-2"
                    >
                      Your Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter Your Name"
                      className="w-full p-3 border border-[#A8A8A8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#FA6904] focus:border-none"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm text-[#1E242C] font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      className="w-full p-3 border border-[#A8A8A8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#FA6904] focus:border-none"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="mb-4">
                    <label
                      htmlFor="mobile"
                      className="block text-sm text-[#1E242C] font-medium mb-2"
                    >
                      Mobile Number <span className="text-red-700">*</span>
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      required
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+00 5659 0849696"
                      className="w-full p-3 border border-[#A8A8A8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#FA6904] focus:border-none"
                    />
                  </div>

                  {/* Your Query */}
                  <div className="mb-6">
                    <label
                      htmlFor="query"
                      className="block text-sm text-[#1E242C] font-medium mb-2"
                    >
                      Your Query
                    </label>
                    <textarea
                      id="query"
                      value={formData.query}
                      onChange={handleChange}
                      placeholder="Type here..."
                      className="w-full p-3 border border-[#A8A8A8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#FA6904] resize-none focus:border-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#FA6904] text-white rounded-[338px] font-semibold hover:bg-[#fa6a04ba] shadow-[#5459e835] shadow-xl transition duration-300"
                  >
                    Join Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE VIVECHNA */}
      <section>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#224170] mb-8">
          Why choose <span className="text-[#FA6904]">Vivechna?</span>
        </h2>
        <div className="flex flex-col md:flex-row   justify-center gap-12">
          <div className="flex flex-col md:mt-12 ml-8 md:ml-15">
            <div className=" md:w-[600px]">
              <p className=" text-xl md:text-2xl font-regular text-[#224170] pl-3 pr-4 mb-5">
                At Vivechna, we believe that success in competitive exams like
                Judiciary, UPSC, and CLAT comes from the right guidance and our
                team of expert faculty, comprising experienced educators, is
                dedicated to helping aspirants unlock their full potential.
              </p>

              <div className="flex flex-col gap-3 px-4">
                <div className="flex justify-start gap-3 items-center text-xl text-[#224170]">
                  <img src={tick} alt="Tick" className="w-5 h-5 mr-3" />
                  <p className="flex items-start justify-center  text-lg">
                    We focus on understanding why behind every concept{" "}
                  </p>
                </div>
                <div className="flex justify-start gap-3 items-center text-xl text-[#224170]">
                  <img src={tick} alt="Tick" className="w-5 h-5 mr-3" />
                  <p className="flex items-start text-lg">
                    Conceptual learning rather than rote learning
                  </p>
                </div>
                <div className="flex justify-start gap-3 items-center text-xl text-[#224170]">
                  <img src={tick} alt="Tick" className="w-5 h-5 mr-3" />
                  <p className="flex items-start text-lg">
                    Our Educators are highly qualified and passionate about
                    teaching
                  </p>
                </div>
                <div className="flex justify-start gap-3 items-center text-xl text-[#224170]">
                  <img src={tick} alt="Tick" className="w-5 h-5 mr-3" />
                  <p className="flex items-start text-lg">
                    Personalized Attention: Small batch sizes, one-to-one
                    interactive sessions, and focus on individual strengths and
                    weaknesses.{" "}
                  </p>
                </div>
                <div className="flex justify-start gap-3 items-center text-xl text-[#224170]">
                  <img src={tick} alt="Tick" className="w-5 h-5 mr-3" />
                  <p className="flex items-start text-lg">
                    Research & analysis of previous year’s question papers.
                    Solve the question papers in live classes after evaluation
                    of the future aspects of coming questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full ">
            <img
              src={ceoImage}
              alt="CEO"
              className="w-full h-150  object-cover p-4 rounded-[20px] "
            />
          </div>
        </div>
      </section>

      {/* TYPES OF PROGRAMS */}
      <section>
        <div className="flex items-end justify-center gap-3 mx-2 ">
          <img src={heading} alt="" width={80} />
          <h1 className="text-[#224170] text-3xl md:text-5xl font-bold">
            <span className="text-[#FA6904]">Unlock</span> Your Creative
            Potential
          </h1>
        </div>
        <p className="text-[#224170] text-center mt-3 text-lg px-3">
          Learn from Industry Experts and Enhance Your Skills, with Offline and
          Online Courses.
        </p>

        {/* PROGRAMS SECTION */}
        {/* Hybrid Program */}
        <div className="flex justify-center gap-3 flex-wrap items-center  mx-7">
          <img src={program1} alt="" width={800} />
          <div className="sm:w-120">
            <h1 className="text-[#224170] text-3xl md:text-4xl font-bold leading-12 md:leading-15">
              Hybrid Program{" "}
              <span className="text-[#FA6904] ">(Offline + Online)</span>
            </h1>
            <p className="text-[#224170]  mt-3 text-xl md:text-2xl">
              Our Program is designed for students who prefer traditional
              classroom interactions but also want the flexibility of timings.
              Now you can attend live and interactive classroom
              classes on our app.
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/contact">
                <button className="px-8 py-4 cursor-pointer border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white  transition ease-in-out duration-300">
                  Enquiry
                </button>
              </Link>
              <a
                href="http://Online.vivechna.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex gap-2 cursor-pointer items-center pl-6 pr-1 py-2 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white  transition ease-in-out duration-300">
                  Buy Now <img src={buttonarrow} alt="" width={40} />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Online Program */}
        <div className="flex justify-center gap-4 flex-wrap items-center mx-7">
          <div className="sm:w-120">
            <h1 className="text-[#224170] text-3xl md:text-4xl font-bold mt-5">
              <span className="text-[#FA6904] mr-2">Online</span>
              Program{" "}
            </h1>
            <p className="text-[#224170] font-medium  mt-3 text-xl md:text-2xl">
              Learn from anywhere, anytime — perfect for self-paced preparation.{" "}
            </p>
            <p className="text-[#224170]  mt-3 text-xl md:text-2xl">
              Our Online Course offers complete exam coverage through
              interactive live classes, detailed notes, practice questions, and
              full-length tests — all accessible from your device. Ideal for
              working professionals, distant learners, or those who prefer
              flexible study schedules without compromising on quality.
            </p>
            <div className="flex gap-4 mt-8">
              <Link to="/contact">
                <button className="px-8 py-4 cursor-pointer border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white  transition ease-in-out duration-300">
                  Enquiry
                </button>
              </Link>
              <a
                href="http://Online.vivechna.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex gap-2 cursor-pointer items-center pl-6 pr-1 py-2 border-2 border-[#FA6904] bg-none rounded-[108px] font-bold text-[#FA6904] hover:bg-[#FA6904] hover:text-white  transition ease-in-out duration-300">
                  Buy Now <img src={buttonarrow} alt="" width={40} />
                </button>
              </a>
            </div>
          </div>
          <img src={program2} alt="" width={800} className="rounded-xl mb-5" />
        </div>
      </section>

      {/* CTA */}
      <section className="hidden sm:block">
        <div
          className="relative bg-cover bg-center py-20 px-6 mx-5"
          style={{ backgroundImage: `url(${cta})` }}
        >
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-4 text-[#424242]">
              Get a Top-Notch Assistance <br /> From Certified Experts!
            </h2>
            <Link to="/contact">
              <button className="inline-block px-8 py-3 text-lg font-regular text-white bg-orange-500 rounded-[80px] hover:bg-orange-600">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SUCCESS RECORD */}
      <section className="hidden sm:block">
        {/* <div className="flex justify-center gap-4 flex-wrap items-center mx-2 my-5">
          <div className="flex-col gap-2 justify-center"></div>
        </div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-6 py-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${index === 3 ? "mt-4" : ""}`}
            >
              <div className="mb-2">
                <img src={stat.icon} alt={stat.label} className=" mx-auto" />
              </div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOPPERS */}
      <section>
        <h2 className="text-[#224170] text-3xl md:text-5xl font-bold text-center  mt-3">
          Our Toppers
        </h2>
        <p className="text-[#224170] text-center mt-1 md:mt-2 text-lg p-3">
          Continuous Top Results Over the Year{" "}
        </p>

        <Swiper
          slidesPerView={1} // Default for larger screens
          spaceBetween={30} // Space between slides
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // When the screen width is <= 640px, show 1 slide
            640: {
              slidesPerView: 1, // 1 slide per view on mobile
              spaceBetween: 20, // Smaller space between slides on mobile
            },
            // When the screen width is > 640px, show 3 slides
            768: {
              slidesPerView: 2, // 3 slides per view on tablets/desktops
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // 3 slides per view on tablets/desktops
            },
          }}
          modules={[Autoplay, Pagination]} // Add Pagination module
          className="mySwiper"
        >
          {toppers.map((topper, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center mb-10"
            >
              <div className="flex justify-center items-center">
                {<img src={topper.img} alt="" />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* STEPS */}
      <section className="hidden ">
        <div className="bg-[#fa6a0415] py-8 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center p-6  ">
                <div className="mb-4">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-orange-500">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="py-12 px-6">
          <h2 className="text-[#224170] text-3xl md:text-5xl font-bold text-center">
            Testimonials
          </h2>
          <p className="text-[#224170] text-center mt-3 text-lg">
            Hear from Our Happy Students: Success Stories That Inspire!
          </p>

          <div className="flex justify-center items-center mt-12">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className="flex-row items-center rounded-[30px] border-2 border-[#FA6904] p-10 gap-8 max-w-[600px] shadow-xl"
                >
                  {/* Testimonial Content */}
                  <div className="flex-col justify-start">
                    {/* Personal Info */}
                    <div className="flex items-center gap-4 justify-between">
                      <div className="flex items-center gap-4">
                        <div>
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div>
                          <h1 className="text-[#34364A]">{testimonial.name}</h1>
                          <p className="text-[#9d9d9dcc]">{testimonial.role}</p>
                        </div>
                      </div>
                      {/* Rating Section */}
                      <div>
                        <h1 className="font-bold text-4xl text-[#34364A]">
                          {testimonial.rating}
                        </h1>
                        <img src={rating} alt="rating" width={100} />
                      </div>
                    </div>

                    {/* Testimonial Description */}
                    <p className="font-regular text-[#34364A] mt-4">
                      "{testimonial.description}"
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

    </>
  );
};

export default LandingPage;
