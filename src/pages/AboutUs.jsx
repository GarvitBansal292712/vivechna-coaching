import { useState } from "react";

import ceo2 from "../assets/ceo2.png";
import classImg from "../assets/classImg.png";
import star from "../assets/star.png";

import faq1 from "../assets/faq1.png";
import faq2 from "../assets/faq2.png";
import faq3 from "../assets/faq3.png";
import faq4 from "../assets/faq4.png";
import faq5 from "../assets/faq5.png";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
import gallery9 from "../assets/gallery9.jpg";
import gallery10 from "../assets/gallery10.jpg";
import gallery11 from "../assets/gallery11.jpg";
import gallery12 from "../assets/gallery12.jpg";
import gallery13 from "../assets/gallery13.jpg";
import gallery14 from "../assets/gallery14.jpg";
import gallery15 from "../assets/gallery15.jpg";
import gallery16 from "../assets/gallery16.jpg";
import gallery17 from "../assets/gallery17.jpg";
import gallery18 from "../assets/gallery18.jpg";
import gallery19 from "../assets/gallery19.jpg";
import gallery20 from "../assets/gallery20.jpg";
import gallery21 from "../assets/gallery21.jpg";
import gallery22 from "../assets/gallery22.jpg";
import gallery23 from "../assets/gallery23.jpg";

import video1 from "../assets/galleryv1.mp4"


import contactimg from "../assets/contactimg.png";

const AboutUs = () => {
  const images = [
    { src: gallery1, alt: "Gallery Item 1" },
    { src: gallery2, alt: "Gallery Item 2" },
    { src: gallery3, alt: "Gallery Item 3" },
    { src: gallery21, alt: "Gallery Item 21" },
    { src: gallery4, alt: "Gallery Item 4" },
    { src: gallery5, alt: "Gallery Item 5" },
    { src: gallery19, alt: "Gallery Item 19" },

    { src: gallery20, alt: "Gallery Item 20" },

    { src: gallery6, alt: "Gallery Item 6" },
    { src: gallery7, alt: "Gallery Item 7" },
    { src: gallery8, alt: "Gallery Item 8" },
    { src: gallery9, alt: "Gallery Item 9" },
    { src: gallery10, alt: "Gallery Item 10" },
    { src: gallery11, alt: "Gallery Item 11" },
    { src: gallery12, alt: "Gallery Item 12" },
    { src: gallery13, alt: "Gallery Item 13" },
    { src: gallery14, alt: "Gallery Item 14" },
    { src: gallery15, alt: "Gallery Item 15" },
    { src: gallery16, alt: "Gallery Item 16" },
    { src: gallery17, alt: "Gallery Item 17" },
    { src: gallery18, alt: "Gallery Item 18" },
    { src: gallery22, alt: "Gallery Item 22" },
    { src: gallery23, alt: "Gallery Item 23" },

  ];

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

  const [activeIndex, setActiveIndex] = useState(null); // Keeps track of the active FAQ index

  const faqData = [
    {
      question: "What makes Vivechna different from other tuition classes?",
      answer:
        "We offer personalized attention, experienced teachers, and a curriculum tailored to meet individual learning needs.",
      image: faq1,
    },
    {
      question: "How do you make learning interactive?",
      answer:
        "We use a variety of teaching tools such as interactive whiteboards, educational videos, and group discussions.",
      image: faq2,
    },
    {
      question: "Do you provide doubt-solving sessions?",
      answer:
        "Yes, we have dedicated doubt-solving sessions after every class and also during weekends.",
      image: faq3,
    },
    {
      question: "What subjects do you teach?",
      answer:
        "We offer comprehensive coaching for students from Class 7 to 12 in subjects including Mathematics, Science, English, Social Studies, and more.",
      image: faq4,
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll through our website by filling out the online application form, or by visiting our office directly.",
      image: faq5,
    },
  ];

  const handleFAQClick = (index) => {
    // If the clicked FAQ is already open, close it (set activeIndex to null)
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      // Otherwise, open the clicked FAQ (set activeIndex to clicked index)
      setActiveIndex(index);
    }
  };

  // Separate FAQs into two columns
  const firstColumnFAQs = faqData.slice(0, 3); // First 3 FAQs
  const secondColumnFAQs = faqData.slice(3, 6); // Last 3 FAQs
  return (
    <>
      <h1 className="text-[#1E242C] text-3xl md:text-5xl font-bold text-center my-5 pt-18">
        About Us
      </h1>
      <div className="flex justify-around gap-4 flex-wrap items-center mx-4">
        <div>
          <p className="text-[#1E242C] text-xl md:text-2xl max-w-[800px]">
            At Vivechna, we are committed to nurturing the next generation of
            leaders, thinkers, and changemakers. As a premier coaching institute
            for Judiciary, UPSC, and CLAT, our goal is to empower aspirants with
            the right knowledge, strategy, and mindset needed to crack India’s
            most competitive exams. <br />
            Founded by a team of passionate educators and subject experts,
            Vivechna is more than just a coaching center — it's a movement
            toward disciplined learning, critical thinking, and nation-building.
            With a blend of traditional mentoring and innovative teaching
            methods, we ensure that every student who walks through our doors
            gets closer to realizing their dream. <br />
            We believe that success in competitive exams doesn't come from rote
            memorization, but from clarity of thought, conceptual understanding,
            and consistent effort — and we’re here to guide you every step of
            the way.
          </p>
        </div>
        <div>
          <img src={ceo2} alt="" className="h-[550px] object-cover" />
        </div>
      </div>
      <div className="mx-8 md:mx-16">
        <h1 className="text-[#1E242C] text-4xl font-semibold mt-5 mb-4">
          Our Vision
        </h1>
        <p className="text-[#1E242C] text-xl md:text-2xl  ">
          At Vivechna IAS & Judiciary Academy, our vision is to cultivate a new
          generation of civil servants and judicial officers who are not merely
          administrators but true leaders dedicated to serving and leading the
          nation. We are committed to fostering a mindset that champions the
          transition from a "Licensed Raj" to a "Welfare Raj" rooted in the
          robust Rule of Law. This is achieved by instilling a strong sense of
          duty to the nation, upholding an established Code of Ethics, and
          promoting unwavering probity and transparency in all actions. We
          emphasize a profound sense of responsibility, self-confidence, and
          determination, coupled with a deep commitment to the welfare of the
          'Antyaja' – the most downtrodden sections of society. Our students are
          encouraged to become role models of grass-root democracy, embodying
          gender neutrality and respect for everyone. We nurture a curious and
          receptive mind, fostering effective intelligence, strong reasoning
          abilities, and superior organizing skills, all essential for tackling
          the complexities of public service. Choosing Vivechna means embracing
          a journey to become an officer equipped not only with knowledge but
          also with the character and conviction to serve with integrity and
          lead with vision.
          {/* <ul className="list-disc space-y-1 ml-6">
            <li>
              We nurture a curious and receptive mind, fostering effective
              intelligence, strong reasoning abilities, and superior organizing
              skills, all essential for tackling the complexities of public
              service.
            </li>
            <li>
              Choosing Vivechna means embracing a journey to become an officer
              equipped not only with knowledge but also with the character and
              conviction to serve with integrity and lead with vision.
            </li>
          </ul> */}
        </p>
      </div>

      <section className="py-16 bg-gray-100 mt-5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div className="relative" key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            ))}
              <video src={video1}  loop controls width={400} className="rounded-xl "></video>

          </div>

            {/* <div className="mt-5">
              <h1 className="text-4xl font-bold text-gray-900 mb-12">
               Our Videos
              </h1>
              <video src={video1} autoPlay loop controls width={400} className="rounded-xl"></video>
            </div> */}
        </div>
      </section>

      {/* FAQS */}
      <section className="hidden">
        <h2 className="text-[#224170] text-3xl md:text-5xl font-bold text-center mb-6 mt-20">
          Frequently Asked Questions
        </h2>
        <div className="max-w-5xl mx-auto p-6">
          {/* Flex container for 2 columns */}
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {/* First column with 3 FAQs */}
            <div className="flex flex-col gap-4 w-full">
              {firstColumnFAQs.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-[24.72px] border-2 ${
                    activeIndex === index
                      ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                      : "bg-white"
                  } border-[#fa6a04]`}
                >
                  <div
                    onClick={() => handleFAQClick(index)} // Clicking toggles the FAQ open/close
                    className="flex justify-between items-center gap-3 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={`faq${index + 1}`}
                      className="w-8 h-8"
                    />
                    <p className="text-lg font-semibold text-[#1E242C]">
                      {item.question}
                    </p>
                    <img
                      src={star}
                      alt="star"
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        activeIndex === index ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index ? "max-h-80" : "max-h-0"
                    }`}
                  >
                    {activeIndex === index && (
                      <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                        {item.answer}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Second column with 3 FAQs */}
            <div className="flex flex-col gap-4 w-full">
              {secondColumnFAQs.map((item, index) => (
                <div
                  key={index + 3} // Adjust index for the second column
                  className={`p-4 rounded-[24.72px] border-2 ${
                    activeIndex === index + 3
                      ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                      : "bg-white"
                  } border-[#fa6a04]`}
                >
                  <div
                    onClick={() => handleFAQClick(index + 3)} // Clicking toggles the FAQ open/close
                    className="flex justify-between items-center gap-3 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={`faq${index + 4}`}
                      className="w-8 h-8"
                    />
                    <p className="text-lg font-semibold text-[#1E242C]">
                      {item.question}
                    </p>
                    <img
                      src={star}
                      alt="star"
                      className={`w-6 h-6 transform transition-transform duration-300 ${
                        activeIndex === index + 3 ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index + 3 ? "max-h-80" : "max-h-0"
                    }`}
                  >
                    {activeIndex === index + 3 && (
                      <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                        {item.answer}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section>
        <div className="flex flex-col md:flex-row  items-center  md:justify-evenly gap-12">
                    <img src={contactimg} alt="" width={700} className="rounded-xl"/>
          
          <div>
            <div className="flex justify-center items-center min-h-screen ">
              <div className="bg-white p-8 shadow-lg  rounded-lg  w-full sm:w-150">
                {/* Form Heading */}
                <h1 className="text-[#224170] text-3xl md:text-5xl font-bold text-left">
                  Get In Touch{" "}
                </h1>
                <p className="text-[#224170] text-left mt-1 text-lg py-3">
                  Contact Professionals for Guidance
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
    </>
  );
};

export default AboutUs;
