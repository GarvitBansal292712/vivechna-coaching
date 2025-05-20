import contactBanner from "../assets/contactBanner.png";
import orangemail from "../assets/orangemail.png";
import orangephone from "../assets/orangephone.png";
import orangemap from "../assets/orangemap.png";
import emailjs from "emailjs-com";
import { useState } from "react";
import star from "../assets/star.png";

import gurgaonmap from "../assets/gurgaonmap.jpg";
import rewarimap from "../assets/rewarimap.jpg";

const ContactUs = () => {
  const [openFAQ, setOpenFAQ] = useState(null); // Track which FAQ is open

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null); // Close the FAQ if it's already open
    } else {
      setOpenFAQ(index); // Open the clicked FAQ
    }
  };

  // Handle form data change
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    city: "",
    course: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure the form data is being sent correctly
    console.log(formData);

    // Send email via EmailJS
    emailjs
      .send(
        "service_my49xee", // Replace with your service ID
        "template_vrxo4di", // Replace with your template ID
        formData, // Pass formData to the EmailJS template
        "nentHFz2l-aDpOBF-" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            contactNo: "",
            city: "",
            course: "",
          }); // Reset the form after success
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <>
      <h1 className="text-[#1E242C] text-2xl md:text-5xl font-bold text-center my-5 pt-18">
        Contact Us
      </h1>
      <div className="flex justify-center my-4 md:my-10 mx-5">
        <img src={contactBanner} alt="" className="w-[1400px]" />
      </div>
      <div className="flex  justify-around gap-5 flex-wrap px-10">
        <div className="flex flex-col justify-start mt-4 md:mt-8 gap-2 ">
          <h1 className="text-[#1E242C] text-2xl md:text-4xl font-semibold mt-5  ">
            Connect With Us
          </h1>
          <p className="text-[#1E242C]">
            Questions, comments, or suggestions? Simply <br /> fill in the form
            and we’ll be in touch shortly.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={orangephone} alt="" width={25} height={25} />
              <p className="text-[#1E242C] text-md md:text-2xl ">+91 8130433691</p>
              <p className="text-[#1E242C] text-md md:text-2xl ">+91 8053099154</p>
            </div>
            <div className="flex items-center  gap-2">
              <img src={orangemail} alt="" width={25} height={25} />
              <p className="text-[#1E242C] text-md md:text-2xl ">iasvicechna@gmail.com</p>
            </div>
            {/* <div className="flex items-center gap-2">
              <img src={orangemap} alt="" width={25} height={25} />
              <p className="text-[#1E242C] text-2xl ">
                M-1, OLD DLF, SECTOR 14, GURUGRAM
              </p>
            </div> */}
          </div>
        </div>
        <div className="w-[500px] my-5 bg-white  rounded-[20px] border-2 border-[#FA6904]">
          <form onSubmit={handleSubmit} className="space-y-4 px-6 py-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-[#BEBEBE] rounded-[20px] focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email-Id
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-[#BEBEBE] rounded-[20px] focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="contactNo"
                className="block text-sm font-medium text-gray-700"
              >
                Contact No. <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="contactNo"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-[#BEBEBE] rounded-[20px] focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter Your Contact No."
                required
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Enter City <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-[#BEBEBE] rounded-[20px] focus:ring-orange-500 focus:border-orange-500"
                placeholder="Enter City"
                required
              />
            </div>

            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700"
              >
                Select Course <span className="text-red-700">*</span>
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-[#BEBEBE] rounded-[20px] focus:ring-orange-500 focus:border-orange-500"
                required
              >
                <option value="">Select a Course</option>
                <option value="UPSC">UPSC</option>
                <option value="PCS">PCS</option>
                <option value="Judiciary">Judiciary</option>
                <option value="CLAT">CLAT</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-25 bg-orange-500 text-white rounded-[338px] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <h1 className="text-[#224170] text-2xl md:text-5xl font-bold text-center mb-5">
        <span className="text-[#FA6904]">Our</span> Centers
      </h1>
      <div className="flex justify-around gap-4 flex-wrap">
        <div className="flex-col gap-3">
          <h1 className="text-[#224170] text-xl md:text-3xl font-bold text-center">
            GURGAON
          </h1>
          <p className="font-regular text-[#34364A] mt-4 text-center mb-3">
            M1, near Shree Krishna <br />
            Mandir, Block M, Old DLF <br />
            Colony, Sector 14, Gurugram, <br />
            Haryana 122001
          </p>

          <a
            href="https://maps.app.goo.gl/YaSxYrcYkyUUCVoH9"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gurgaonmap} alt="" width={400} className="mb-5" />
          </a>
        </div>
        <div className="flex-col gap-3 mt-5">
          <h1 className="text-[#224170] text-2xl md:text-3xl font-bold text-center">
            REWARI
          </h1>
          <p className="font-regular text-[#34364A] mt-4 text-center mb-3">
            Police Chowki, Near, 67, FIRST <br />
            Floor Model Town Extension, <br />
            Sector 3, Rewari, Haryana <br />
            123401
          </p>
          <a
            href="https://maps.app.goo.gl/f1r9FsFz39WqdQFu6"
            className="text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={rewarimap} alt="" width={400} className="mb-5" />
          </a>
        </div>
      </div>

      {/* FAQS */}
      <section className=" ">
        <h2 className="text-[#224170] text-2xl md:text-5xl font-bold text-center mb-6 mt-20">
          Let's Answer your queries
        </h2>

        <div className="max-w-5xl mx-auto p-6">
          {/* Flex container for 2 columns */}
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            {/* First column with 3 FAQs */}
            <div className="flex flex-col gap-4 w-full">
              {/* FAQ 1 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 0
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(0)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What exactly is the UPSC Civil Services Examination (CSE)?
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 0 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 0 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 0 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      The Union Public Service Commission (UPSC) is India's
                      central agency responsible for conducting examinations for
                      recruitment to various government services. The Civil
                      Services Examination (CSE) is the highly competitive
                      national exam administered by UPSC to select candidates
                      for prestigious roles within the Indian government. These
                      roles, often referred to as Civil Services, are directly
                      related to public service and administration. Key services
                      include the Indian Administrative Service (IAS), Indian
                      Police Service (IPS), Indian Foreign Service (IFS), and
                      Indian Revenue Service (IRS), among others. The IAS is
                      widely regarded as the premier civil service. The
                      fundamental goal of these services is dedicated public
                      service. Understanding this basic definition is the
                      starting point for most aspirants, and providing a clear
                      explanation establishes the website as a knowledgeable
                      resource.
                    </div>
                  )}
                </div>
              </div>

              {/* FAQ 2 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 1
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(1)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What are the different Civil Services I can join through the
                    UPSC CSE?
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 1 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 1 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 1 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      The UPSC CSE is the gateway to a wide array of services,
                      broadly categorized as follows: <br />
                      <strong>All India Services: </strong> These services work
                      under both the Union (Central) Government and State
                      Governments. They include: <br />
                      <ul className="list-disc ">
                        <li>Indian Administrative Service (IAS):</li>
                        <li>Indian Police Service (IPS):</li>
                        <li>
                          Indian Forest Service (IFoS) - Note: The IFoS exam has
                          slightly different eligibility criteria and a separate
                          preliminary screening process, though it shares the
                          main CSE Prelims paper.
                        </li>
                      </ul>
                      <strong>Central Services (Group A): </strong> These
                      services function primarily under the Union Government.
                      Examples include: <br />
                      <ul className="list-disc ">
                        <li>Indian Foreign Service (IFS)</li>
                        <li>
                          Indian Revenue Service (IRS - Income Tax & Customs and
                          Indirect Taxes)
                        </li>
                        <li> Indian Audit and Accounts Service (IA&AS)</li>
                        <li>Indian Information Service (IIS)</li>
                        <li>Indian Postal Service</li>
                        <li>And many others.</li>
                      </ul>
                      <strong>Central Services (Group B):</strong> Examples
                      include services like the Armed Forces Headquarters Civil
                      Service. <br />
                      In total, the CSE recruits for over 20 distinct services.
                      Highlighting this variety is important as it showcases the
                      breadth of opportunities available beyond the commonly
                      known IAS and IPS, potentially aligning with diverse
                      aspirant interests and managing expectations about service
                      allocation based on rank. For a complete, updated list,
                      aspirants should refer to the official UPSC notification
                      for the specific examination year.
                    </div>
                  )}
                </div>
              </div>

              {/* FAQ 3 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 2
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(2)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    Am I eligible for the UPSC CSE? (Age, Education, Attempts,
                    Nationality){" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 2 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 2 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 2 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      Eligibility is a critical first hurdle for any UPSC
                      aspirant, often causing considerable anxiety. The criteria
                      must be met precisely. Here's a breakdown: <br />
                      <strong>Nationality:</strong> For the Indian
                      Administrative Service (IAS) and Indian Police Service
                      (IPS), a candidate must be a citizen of India. For other
                      services, citizens of Nepal, Bhutan, Tibetan refugees (who
                      came over before January 1, 1962), and persons of Indian
                      origin (who have migrated from specific countries with the
                      intention of permanently settling in India) may also be
                      eligible, subject to specific conditions outlined in the
                      official notification. <br />
                      <strong>Educational Qualification:</strong> A candidate
                      must hold a graduate degree (Bachelor's degree) from any
                      University incorporated by an Act of the Central or State
                      Legislature in India or other educational institutions
                      established by an Act of Parliament or declared to be
                      deemed as a University under Section 3 of the University
                      Grants Commission Act, 1956, or possess an equivalent
                      qualification. Degrees from any stream (Arts, Science,
                      Commerce, Engineering, Medicine, etc.) are acceptable.
                      Crucially, candidates who are in their final year of
                      graduation and awaiting results can appear for the
                      Preliminary Examination, provided they can produce proof
                      of passing the requisite examination when applying for the
                      Main Examination.
                      <br />
                      <strong>Age Limit:</strong> A candidate must have attained
                      the age of 21 years and must not have attained the age of
                      32 years as on the 1st of August of the year of
                      examination for the General Category. Age relaxations in
                      the upper age limit are provided for various reserved
                      categories.
                      <br />
                      <strong>Number of Attempts: </strong> The number of times
                      a candidate can appear for the examination is limited
                      based on their category. An attempt is counted if a
                      candidate appears in at least one paper of the Preliminary
                      Examination. Simply applying for the exam but not
                      appearing does not count as an attempt.
                      <br />
                      The following table summarizes the age limits and number
                      of attempts for different categories:
                      <br />
                      <strong>
                        Table 1: UPSC CSE Eligibility Snapshot{" "}
                      </strong>{" "}
                      <br />
                      <table className="min-w-full table-auto border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="px-4 py-2 text-left">Category</th>
                            <th className="px-4 py-2 text-left">Minimum Age</th>
                            <th className="px-4 py-2 text-left">
                              Maximum Age (as of Aug 1st of Exam Year)
                            </th>
                            <th className="px-4 py-2 text-left">
                              Number of Attempts
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-2">General / EWS</td>
                            <td className="px-4 py-2">21</td>
                            <td className="px-4 py-2">32</td>
                            <td className="px-4 py-2">6</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-2">
                              Other Backward Classes (OBC)
                            </td>
                            <td className="px-4 py-2">21</td>
                            <td className="px-4 py-2">
                              35 (32 + 3 years relaxation)
                            </td>
                            <td className="px-4 py-2">9</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-2">
                              Scheduled Caste / Scheduled Tribe (SC/ST)
                            </td>
                            <td className="px-4 py-2">21</td>
                            <td className="px-4 py-2">
                              37 (32 + 5 years relaxation)
                            </td>
                            <td className="px-4 py-2">Unlimited</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-2">
                              Persons with Benchmark Disability (PwBD)
                            </td>
                            <td className="px-4 py-2">21</td>
                            <td className="px-4 py-2">
                              42 (32 + 10 years relaxation)
                            </td>
                            <td className="px-4 py-2">
                              General/EWS PwBD: 9, OBC PwBD: 9, SC/ST PwBD:
                              Unlimited
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-2">Ex-Servicemen</td>
                            <td className="px-4 py-2">21</td>
                            <td className="px-4 py-2">
                              37 (32 + 5 years relaxation)
                            </td>
                            <td className="px-4 py-2">As per category</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-2">
                              Defence Services Personnel (Disabled)
                            </td>
                            <td className="px-4 py-2">21</td>
                            <td className="px-4 py-2">
                              35 (32 + 3 years relaxation)
                            </td>
                            <td className="px-4 py-2">As per category</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 4 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 3
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(3)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What is the structure of the UPSC Exam? (Prelims, Mains,
                    Interview)
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 3 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 3 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 3 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      The UPSC Civil Services Examination is a rigorous,
                      multi-stage process designed to test candidates
                      comprehensively. It consists of three distinct stages :
                      <br />
                      <ul className="list-disc ">
                        <li>
                          <strong>
                            {" "}
                            Stage 1: Preliminary Examination (Prelims)
                          </strong>
                          <ul className="list-disc ">
                            <li>
                              <strong>Nature:</strong> Objective type (Multiple
                              Choice Questions - MCQs). It serves as a screening
                              test to select candidates for the Main
                              Examination.
                            </li>
                            <li>
                              <strong> Papers: </strong> Consists of two
                              compulsory papers:
                              <ul>
                                <li>
                                  <strong>General Paper I (GP-I)</strong>100
                                  questions, 200 marks, 2 hours duration. Marks
                                  obtained in this paper are counted for
                                  qualifying for the Main Examination.
                                </li>
                                <li>
                                  <strong>
                                    General Studies Paper-II (CSAT - Civil
                                    Services Aptitude Test):
                                  </strong>{" "}
                                  80 questions, 200 marks, 2 hours duration.
                                  This paper is qualifying in nature; candidates
                                  must score a minimum of 33% (approximately 66
                                  marks) to be eligible for evaluation of their
                                  GS Paper-I.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Marking:</strong> There is negative
                              marking for incorrect answers in both papers. For
                              each wrong answer, one-third (1/3rd) of the marks
                              assigned to that question will be deducted.
                            </li>
                            <li>
                              <strong>Ranking:</strong> Marks obtained in the
                              Preliminary Examination are not counted for
                              determining the final order of merit.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Stage 2: Main Examination (Mains):</strong>
                          <ul className="list-disc ">
                            <li>
                              <strong>Nature:</strong> Descriptive/Written
                              examination. This stage is crucial as the marks
                              obtained here (along with the Interview) determine
                              the final merit ranking.
                            </li>
                            <li>
                              <strong> Papers: </strong> Consists of nine
                              papers:
                              <ul className="list-disc ">
                                <li>
                                  <strong> Qualifying Papers:</strong>
                                  <ul>
                                    <li>
                                      Paper A: Compulsory Indian Language
                                      (chosen from the languages included in the
                                      Eighth Schedule of the Constitution). 300
                                      marks.
                                    </li>
                                    <li>Paper B: English. 300 marks.</li>
                                    <li>
                                      These papers are of Matriculation (Class
                                      X) standard and qualifying in nature.
                                      Candidates must score a minimum of 25% (75
                                      marks) in each. Marks are not counted for
                                      merit ranking.{" "}
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <strong>
                                    Merit Papers (Total 1750 Marks):
                                  </strong>{" "}
                                  <ul className="list-disc ">
                                    <li>Paper I: Essay (250 marks)</li>
                                    <li>
                                      Paper II: General Studies–I (Indian
                                      Heritage and Culture, History and
                                      Geography of the World and Society) (250
                                      marks)
                                    </li>
                                    <li>
                                      Paper III: General Studies–II (Governance,
                                      Constitution, Polity, Social Justice and
                                      International relations) (250 marks)
                                    </li>
                                    <li>
                                      Paper IV: General Studies–III (Technology,
                                      Economic Development, Bio-diversity,
                                      Environment, Security and Disaster
                                      Management) (250 marks)
                                    </li>
                                    <li>
                                      Paper V: General Studies–IV (Ethics,
                                      Integrity and Aptitude) (250 marks)
                                    </li>
                                    <li>
                                      Paper VI: Optional Subject – Paper 1 (250
                                      marks)
                                    </li>
                                    <li>
                                      Paper VII: Optional Subject – Paper 2 (250
                                      marks)
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Marking:</strong> There is no negative
                              marking in the Main Examination
                            </li>
                            <li>
                              <strong>Marking:</strong> There is negative
                              marking for incorrect answers in both papers. For
                              each wrong answer, one-third (1/3rd) of the marks
                              assigned to that question will be deducted.
                            </li>
                            <li>
                              <strong>Ranking:</strong> Marks obtained in the
                              Preliminary Examination are not counted for
                              determining the final order of merit.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>
                            Stage 3: Personality Test (Interview):
                          </strong>
                          <ul className="list-disc ">
                            <li>
                              <strong>Nature:</strong> Final stage involving a
                              face-to-face interview with a Board convened by
                              UPSC. It assesses the candidate's suitability for
                              a career in public service, evaluating personality
                              traits rather than just factual knowledge.
                            </li>
                            <li>
                              <strong> Marks: </strong> Carries a total of 275
                              marks.
                              <ul className="list-disc ">
                                <li>
                                  <strong> Qualifying Papers:</strong>
                                  <ul>
                                    <li>
                                      Paper A: Compulsory Indian Language
                                      (chosen from the languages included in the
                                      Eighth Schedule of the Constitution). 300
                                      marks.
                                    </li>
                                    <li>Paper B: English. 300 marks.</li>
                                    <li>
                                      These papers are of Matriculation (Class
                                      X) standard and qualifying in nature.
                                      Candidates must score a minimum of 25% (75
                                      marks) in each. Marks are not counted for
                                      merit ranking.{" "}
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <strong>
                                    Merit Papers (Total 1750 Marks):
                                  </strong>{" "}
                                  <ul className="list-disc ">
                                    <li>Paper I: Essay (250 marks)</li>
                                    <li>
                                      Paper II: General Studies–I (Indian
                                      Heritage and Culture, History and
                                      Geography of the World and Society) (250
                                      marks)
                                    </li>
                                    <li>
                                      Paper III: General Studies–II (Governance,
                                      Constitution, Polity, Social Justice and
                                      International relations) (250 marks)
                                    </li>
                                    <li>
                                      Paper IV: General Studies–III (Technology,
                                      Economic Development, Bio-diversity,
                                      Environment, Security and Disaster
                                      Management) (250 marks)
                                    </li>
                                    <li>
                                      Paper V: General Studies–IV (Ethics,
                                      Integrity and Aptitude) (250 marks)
                                    </li>
                                    <li>
                                      Paper VI: Optional Subject – Paper 1 (250
                                      marks)
                                    </li>
                                    <li>
                                      Paper VII: Optional Subject – Paper 2 (250
                                      marks)
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Ranking:</strong> The marks obtained in
                              the Interview are added to the marks obtained in
                              the Main Examination (Written part - 1750 marks).
                              The final merit list is prepared based on this
                              total score (out of 2025 marks).
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <br />
                      <strong>
                        Table 2: UPSC CSE Exam Pattern Overview
                      </strong>{" "}
                      <br />
                      <table className="min-w-full table-auto">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">Stage</th>
                            <th className="px-4 py-2 border">
                              Paper Name/Number
                            </th>
                            <th className="px-4 py-2 border">Type</th>
                            <th className="px-4 py-2 border">Max Marks</th>
                            <th className="px-4 py-2 border">Duration</th>
                            <th className="px-4 py-2 border">
                              Status for Final Merit
                            </th>
                            <th className="px-4 py-2 border">
                              Negative Marking
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Prelims */}
                          <tr>
                            <td className="px-4 py-2 border">Prelims</td>
                            <td className="px-4 py-2 border">
                              General Studies Paper-I
                            </td>
                            <td className="px-4 py-2 border">Objective</td>
                            <td className="px-4 py-2 border">200</td>
                            <td className="px-4 py-2 border">2 Hours</td>
                            <td className="px-4 py-2 border">Not Counted</td>
                            <td className="px-4 py-2 border">Yes (1/3rd)</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">Prelims</td>
                            <td className="px-4 py-2 border">
                              General Studies Paper-II (CSAT)
                            </td>
                            <td className="px-4 py-2 border">Objective</td>
                            <td className="px-4 py-2 border">200</td>
                            <td className="px-4 py-2 border">2 Hours</td>
                            <td className="px-4 py-2 border">
                              Not Counted (Qualifying - 33%)
                            </td>
                            <td className="px-4 py-2 border">Yes (1/3rd)</td>
                          </tr>

                          {/* Mains */}
                          <tr>
                            <td className="px-4 py-2 border">Mains</td>
                            <td className="px-4 py-2 border">
                              Paper A: Indian Language
                            </td>
                            <td className="px-4 py-2 border">Descriptive</td>
                            <td className="px-4 py-2 border">300</td>
                            <td className="px-4 py-2 border">3 Hours</td>
                            <td className="px-4 py-2 border">
                              Not Counted (Qualifying - 25%)
                            </td>
                            <td className="px-4 py-2 border">No</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">Mains</td>
                            <td className="px-4 py-2 border">
                              Paper B: English
                            </td>
                            <td className="px-4 py-2 border">Descriptive</td>
                            <td className="px-4 py-2 border">300</td>
                            <td className="px-4 py-2 border">3 Hours</td>
                            <td className="px-4 py-2 border">
                              Not Counted (Qualifying - 25%)
                            </td>
                            <td className="px-4 py-2 border">No</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">Mains</td>
                            <td className="px-4 py-2 border">Paper I: Essay</td>
                            <td className="px-4 py-2 border">Descriptive</td>
                            <td className="px-4 py-2 border">250</td>
                            <td className="px-4 py-2 border">3 Hours</td>
                            <td className="px-4 py-2 border">Counted</td>
                            <td className="px-4 py-2 border">No</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">Mains</td>
                            <td className="px-4 py-2 border">
                              Paper II: General Studies-I
                            </td>
                            <td className="px-4 py-2 border">Descriptive</td>
                            <td className="px-4 py-2 border">250</td>
                            <td className="px-4 py-2 border">3 Hours</td>
                            <td className="px-4 py-2 border">Counted</td>
                            <td className="px-4 py-2 border">No</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">Mains</td>
                            <td className="px-4 py-2 border">
                              Paper III: General Studies-II
                            </td>
                            <td className="px-4 py-2 border">Descriptive</td>
                            <td className="px-4 py-2 border">250</td>
                            <td className="px-4 py-2 border">3 Hours</td>
                            <td className="px-4 py-2 border">Counted</td>
                            <td className="px-4 py-2 border">No</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">Mains</td>
                            <td className="px-4 py-2 border">
                              Paper IV: General Studies-III
                            </td>
                            <td className="px-4 py-2 border">Descriptive</td>
                            <td className="px-4 py-2 border">250</td>
                            <td className="px-4 py-2 border">3 Hours</td>
                            <td className="px-4 py-2 border">Counted</td>
                            <td className="px-4 py-2 border">No</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">Mains</td>
                            <td className="px-4 py-2 border">
                              Paper V: General Studies-IV (Ethics)
                            </td>
                            <td className="px-4 py-2 border">Descriptive</td>
                            <td className="px-4 py-2 border">250</td>
                            <td className="px-4 py-2 border">3 Hours</td>
                            <td className="px-4 py-2 border">Counted</td>
                            <td className="px-4 py-2 border">No</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">Mains</td>
                            <td className="px-4 py-2 border">
                              Paper VI: Optional Subject Paper-1
                            </td>
                            <td className="px-4 py-2 border">Descriptive</td>
                            <td className="px-4 py-2 border">250</td>
                            <td className="px-4 py-2 border">3 Hours</td>
                            <td className="px-4 py-2 border">Counted</td>
                            <td className="px-4 py-2 border">No</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">Mains</td>
                            <td className="px-4 py-2 border">
                              Paper VII: Optional Subject Paper-2
                            </td>
                            <td className="px-4 py-2 border">Descriptive</td>
                            <td className="px-4 py-2 border">250</td>
                            <td className="px-4 py-2 border">3 Hours</td>
                            <td className="px-4 py-2 border">Counted</td>
                            <td className="px-4 py-2 border">No</td>
                          </tr>

                          {/* Interview */}
                          <tr>
                            <td className="px-4 py-2 border">Interview</td>
                            <td className="px-4 py-2 border">
                              Personality Test
                            </td>
                            <td className="px-4 py-2 border">Interview</td>
                            <td className="px-4 py-2 border">275</td>
                            <td className="px-4 py-2 border">~20-30 min</td>
                            <td className="px-4 py-2 border">Counted</td>
                            <td className="px-4 py-2 border">N/A</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              {/* FAQ 5 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 4
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(4)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What is the detailed syllabus for UPSC Prelims and Mains?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 4 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 4 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 4 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      The UPSC syllabus is extensive, covering a wide range of
                      subjects. Providing the entire detailed syllabus here is
                      impractical, but an overview of the core areas is
                      essential for orientation: <br />
                      <strong> Preliminary Examination</strong>
                      <ul>
                        <li>
                          <strong>GS Paper-I:</strong>Focuses on Current events
                          of national and international importance; History of
                          India and Indian National Movement; Indian and World
                          Geography (Physical, Social, Economic); Indian Polity
                          and Governance (Constitution, Political System,
                          Panchayati Raj, Public Policy, Rights Issues, etc.);
                          Economic and Social Development (Sustainable
                          Development, Poverty, Inclusion, Demographics, Social
                          Sector initiatives, etc.); General issues on
                          Environmental Ecology, Bio-diversity and Climate
                          Change; and General Science.
                        </li>
                        <li>
                          <strong>GS Paper-II (CSAT):</strong>Tests
                          Comprehension; Interpersonal skills including
                          communication skills; Logical reasoning and analytical
                          ability; Decision-making and problem-solving; General
                          mental ability; Basic numeracy (numbers and their
                          relations, orders of magnitude, etc. - Class X level);
                          and Data interpretation (charts, graphs, tables, data
                          sufficiency, etc. - Class X level)
                        </li>
                      </ul>
                      <strong>Main Examination (Merit Papers):</strong>
                      <ul>
                        <li>
                          <strong>Essay:</strong> Candidates write essays on
                          given topics, testing their ability to structure ideas
                          logically, express thoughts clearly and concisely, and
                          present a balanced perspective.
                        </li>
                        <li>
                          <strong>GS Paper-I: </strong>Covers Indian Heritage
                          and Culture, History (including Modern Indian History
                          from mid-18th century, Freedom Struggle,
                          Post-independence consolidation, World History
                          including events from 18th century like Industrial
                          Revolution, World Wars, etc.), and Geography of the
                          World and Society (including salient features of
                          Indian Society, Diversity, Urbanization, Globalization
                          effects, etc.).
                        </li>
                        <li>
                          <strong> GS Paper-II: </strong>Focuses on Governance,
                          Constitution, Polity, Social Justice, and
                          International Relations (including Indian
                          Constitution, functions of Union/States, separation of
                          powers, Parliament, Judiciary, pressure groups,
                          welfare schemes, poverty/hunger issues, aspects of
                          governance like transparency/accountability,
                          e-governance, role of civil services, India and its
                          neighborhood relations, bilateral/regional/global
                          groupings, important international institutions).
                        </li>
                        <li>
                          <strong> GS Paper-III: </strong>Deals with Technology,
                          Economic Development, Bio-diversity, Environment,
                          Security, and Disaster Management (including Indian
                          Economy, planning, mobilization of resources, growth,
                          development, employment, government budgeting,
                          agriculture, food processing, land reforms,
                          liberalization effects, infrastructure, investment
                          models, Science & Technology
                          developments/applications, achievements of Indians in
                          S&T, IT, Space, Computers, Robotics, Nano-tech,
                          Bio-tech, IPR issues, Conservation, environmental
                          pollution/degradation, disaster management, linkages
                          between development and extremism, internal security
                          challenges, cyber security, money laundering, border
                          area security).
                        </li>
                        <li>
                          <strong> GS Paper-IV: </strong> Concentrates on
                          Ethics, Integrity, and Aptitude (including Ethics and
                          Human Interface - essence, determinants, consequences;
                          dimensions of ethics; ethics in public/private
                          relationships; Human Values - lessons from
                          leaders/reformers/administrators, role of
                          family/society/education; Attitude - content,
                          structure, function, influence, moral/political
                          attitudes, social influence; Aptitude and foundational
                          values for Civil Service - integrity, impartiality,
                          non-partisanship, objectivity, dedication, empathy,
                          tolerance, compassion; Emotional intelligence
                          concepts, utility in administration; Contributions of
                          moral thinkers; Public/Civil service values and Ethics
                          in Public administration; Probity in Governance -
                          concept, philosophical basis, information sharing,
                          transparency, RTI, Codes of Ethics/Conduct, Citizen's
                          Charters, Work culture, quality of service delivery,
                          utilization of public funds, challenges of corruption;
                          Case Studies on above issues).
                        </li>
                        <li>
                          <strong> Optional Subject Papers I & II: </strong>{" "}
                          Require in-depth knowledge of the chosen optional
                          subject, covering both fundamental principles and
                          India-specific applications or contemporary issues.
                        </li>
                      </ul>
                      Aspirants must consult the official UPSC website
                      (upsc.gov.in) for the complete and authoritative detailed
                      syllabus. Coaching programs are designed to provide
                      structured coverage of these vast topics, breaking them
                      down into manageable modules. Listing the core areas here
                      helps aspirants grasp the scope of the examination and
                      targets relevant search terms.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 6 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 5
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(5)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    How do I choose the right Optional Subject for Mains?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 5 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 5 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 5 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      Selecting the right optional subject for the Mains
                      examination is a critical decision that often causes
                      significant confusion among aspirants. Candidates must
                      choose one optional subject from the list provided by
                      UPSC, which includes around 48 subjects spanning
                      humanities, sciences, engineering, and literature.
                      Importantly, candidates can choose an optional subject
                      even if they have not studied it at the graduate or
                      postgraduate level.
                      <br />
                      Several factors should guide this crucial choice:
                      <ul>
                        <li>
                          <strong>Personal Interest and Aptitude:</strong>{" "}
                          Genuine interest in the subject is paramount, as it
                          fuels motivation for the extensive study required. An
                          inherent aptitude or comfort level with the subject
                          matter can also be beneficial.
                        </li>
                        <li>
                          <strong> Academic Background:</strong> While not
                          mandatory, having a background in the subject can
                          provide a foundational advantage and familiarity.
                          However, many successful candidates choose subjects
                          unrelated to their graduation stream.
                        </li>
                        <li>
                          <strong>
                            {" "}
                            Availability of Study Material and Guidance:
                          </strong>{" "}
                          Ensure that quality study materials, standard
                          textbooks, and reliable coaching or guidance are
                          readily accessible for the chosen subject. Lack of
                          resources can significantly hinder preparation.
                        </li>
                        <li>
                          <strong>
                            {" "}
                            Scoring Trends and Syllabus Overlap:{" "}
                          </strong>{" "}
                          While trends can fluctuate, analyzing the recent
                          scoring patterns of a subject can offer some insight
                          (use with caution). Consider the extent to which the
                          optional syllabus overlaps with the General Studies
                          papers, which could potentially save preparation time.
                        </li>
                        <li>
                          <strong>Syllabus Length and Time Commitment: </strong>{" "}
                          Realistically assess the length and complexity of the
                          syllabus in relation to the time available for
                          preparation. Some subjects may have more extensive
                          syllabi than others.
                        </li>
                      </ul>
                      Many coaching institutes offer counseling sessions to help
                      aspirants navigate this decision. They may also provide
                      specialized coaching for popular optional subjects,
                      ensuring access to expert faculty and tailored resources.
                      Making an informed choice based on these practical
                      factors, rather than solely on perceived popularity or
                      peer pressure, is key to effective preparation.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 7 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 6
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(6)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What should I know about the UPSC Interview/Personality Test
                    stage?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 6 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 6 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 6 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      The application process for the UPSC Civil Services
                      Examination is conducted entirely online through the
                      official UPSC portal: https://upsconline.nic.in. Here are
                      the typical steps involved:
                      <br />
                      <ul>
                        <li>
                          <strong>Check the Notification:</strong> UPSC releases
                          an Annual Programme (Calendar) of Examinations,
                          usually in June for the following calendar year,
                          indicating tentative notification dates. The detailed
                          Examination Notice for the CSE is typically released
                          about 3 months before the Preliminary exam date on the
                          official websites upsc.gov.in and upsconline.nic.in.
                          This notice contains all crucial information,
                          including eligibility criteria, syllabus, vacancies,
                          and application deadlines.
                        </li>
                        <li>
                          <strong> One-Time Registration (OTR):</strong>{" "}
                          Candidates usually need to complete a One-Time
                          Registration on the upsconline.nic.in portal,
                          providing basic personal and contact details. This
                          creates a profile for future applications.
                        </li>
                        <li>
                          <strong> Fill the Application Form:</strong> Log in
                          using OTR credentials and fill out the online
                          application form for the specific examination (CSE
                          Prelims). This involves providing detailed personal
                          information, educational qualifications, selecting the
                          examination center, choosing the optional subject for
                          Mains, and selecting the medium of examination for
                          Mains papers.
                        </li>
                        <li>
                          <strong> Upload Documents: </strong> Upload scanned
                          copies of required documents, such as a photograph,
                          signature, and photo ID proof, as per the
                          specifications mentioned in the notification.
                        </li>
                        <li>
                          <strong>Fee Payment: </strong> Pay the examination fee
                          online through available modes (Net Banking,
                          Credit/Debit Card, UPI). Female candidates and
                          candidates belonging to SC/ST/PwBD categories are
                          generally exempted from fee payment.
                        </li>
                        <li>
                          <strong>Final Submission: </strong> Review the
                          application form carefully before final submission.
                          Once submitted, download or print a copy of the
                          completed application form for future reference.
                        </li>
                      </ul>
                      It is absolutely crucial for candidates to ensure they
                      meet all eligibility criteria before applying. Reading the
                      official notification thoroughly is essential to
                      understand all instructions, requirements, and deadlines.
                      Providing the official link and outlining these steps
                      helps simplify what can seem like a complex administrative
                      procedure.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 8 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 7
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(7)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What types of UPSC coaching courses do you offer?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 7 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 7 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 7 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      We offer a diverse range of courses designed to cater to
                      the varying needs of UPSC aspirants at different stages of
                      their preparation journey:
                      <br />
                      <ul className="list-disc ">
                        <li>
                          <strong>Foundation Courses:</strong> Comprehensive
                          programs, often available in 1-Year, 2-Year, or 3-Year
                          durations, designed for beginners aiming to build a
                          strong base across the entire Prelims, Mains, and
                          Interview syllabus.
                        </li>
                        <li>
                          <strong>Prelims-Focused Courses:</strong> Intensive
                          programs or crash courses specifically targeting the
                          Preliminary Examination syllabus, often including
                          focused revision and test series.
                        </li>
                        <li>
                          <strong>Mains-Focused Courses:</strong> Advanced
                          courses concentrating on the Mains syllabus,
                          emphasizing answer writing practice, essay strategy,
                          and ethics case studies.
                        </li>
                        <li>
                          <strong>Integrated Programs:</strong> Holistic courses
                          covering all three stages (Prelims, Mains, Interview)
                          seamlessly.
                        </li>
                        <li>
                          <strong>Optional Subject Coaching:</strong>{" "}
                          Specialized coaching for specific optional subjects.
                          <ul className="list-decimal pl-6 space-y-1">
                            <li>
                              [List the optionals covered by the institute here]
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>CSAT Preparation Courses:</strong> Dedicated
                          modules to cover the syllabus and strategy for the
                          qualifying CSAT paper.
                        </li>
                        <li>
                          <strong>Essay Writing Modules:</strong> Workshops and
                          courses focused on developing skills for writing
                          high-scoring essays.
                        </li>
                        <li>
                          <strong>Current Affairs Programs:</strong> Regular
                          classes, modules, or magazines covering current events
                          relevant to both Prelims and Mains.
                        </li>
                        <li>
                          <strong>Mode of Delivery:</strong> Our courses are
                          available through various platforms and formats
                          (online, offline, hybrid, etc.).
                        </li>
                      </ul>
                      Clearly listing these diverse offerings helps aspirants
                      identify the program that best suits their current
                      preparation level, time availability, and learning
                      preferences.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 9 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 8
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(8)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What is your teaching approach and methodology?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 8 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 8 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 8 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      Our teaching methodology is centered around providing
                      conceptual clarity and equipping aspirants with the skills
                      needed to excel in the UPSC CSE. Key aspects include:
                      <br />
                      <ul className="list-disc pl-6 space-y-4">
                        <li>
                          <strong>Experienced Faculty:</strong> Our faculty
                          comprises highly qualified and experienced educators,
                          many with advanced degrees (Masters/PhD), NET/SET
                          qualifications, and significant experience in guiding
                          UPSC aspirants. Faculty quality is paramount to
                          effective learning.
                        </li>
                        <li>
                          <strong>Class Structure:</strong> We offer recorded
                          sessions typically available for a specified duration
                          (e.g., up to 3 years) for revision purposes. We strive
                          to maintain optimal batch sizes to facilitate better
                          interaction and individual attention. Classes are
                          conducted in various formats (online, offline, hybrid,
                          etc.).
                        </li>
                        <li>
                          <strong>Pedagogy:</strong> Our approach focuses on
                          building a strong foundation by explaining core
                          concepts clearly. We emphasize interlinking static
                          syllabus portions with dynamic current affairs,
                          reflecting the integrated approach required by UPSC
                          today. Answer writing practice and skill development
                          are integrated into the curriculum. Modern teaching
                          aids like projectors and interactive panels are used
                          to enhance the learning experience.
                        </li>
                        <li>
                          <strong>Doubt Resolution:</strong> We have a robust
                          system for doubt clearance, including dedicated time
                          for resolving queries to ensure that student queries
                          are addressed promptly.
                        </li>
                      </ul>
                      Understanding the teaching approach helps aspirants gauge
                      if the institute's style aligns with their learning
                      preferences. Highlighting faculty expertise and structured
                      support systems builds confidence in the quality of
                      education provided.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 10 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 9
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(9)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What study materials, resources, and mock tests are
                    included?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 9 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 9 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 9 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      Our courses come bundled with a comprehensive suite of
                      resources designed to support every aspect of UPSC
                      preparation:
                      <br />
                      <ul className="list-disc ">
                        <li>
                          <strong>Study Material:</strong>
                          <span>
                            {" "}
                            We provide well-researched, comprehensive, and
                            updated study notes covering the entire Prelims and
                            Mains syllabus. These materials are curated from
                            authoritative sources like NCERTs, standard
                            reference books, government reports (e.g., PIB), and
                            academic journals.
                          </span>
                        </li>
                        <li>
                          <strong>Current Affairs Coverage:</strong>
                          <span>
                            {" "}
                            Stay updated with our regular current affairs
                            resources, which may include covering events from
                            Prelims and Mains perspectives.
                          </span>
                        </li>
                        <li>
                          <strong>Mock Tests (Test Series):</strong>
                          <span>
                            {" "}
                            Regular mock tests are integral to our programs.
                            This includes tests for both Prelims (GS Paper-I and
                            CSAT) and Mains (GS Papers, Essay, and Optional
                            Subject). Tests are designed to simulate the actual
                            exam pattern and include both sectional tests
                            (topic-wise) and full-length tests.
                          </span>
                        </li>
                        <li>
                          <strong>Evaluation and Feedback:</strong>
                          <span>
                            {" "}
                            All Mains mock tests are evaluated by our expert
                            team, providing detailed feedback to help identify
                            strengths and weaknesses. Performance analysis and
                            guidance are provided to help students improve.
                          </span>
                        </li>
                        <li>
                          <strong>Online Learning Portal:</strong>
                          <span>
                            {" "}
                            Registered students get access to our dedicated
                            online portal/app, which hosts all learning
                            materials and updates.
                          </span>
                        </li>
                        <li>
                          <strong>Value-Added Resources:</strong>
                          <span>
                            {" "}
                            We may also provide supplementary materials like
                            videos, articles, or additional reading resources to
                            aid understanding and retention.
                          </span>
                        </li>
                      </ul>
                      Detailing these inclusions demonstrates the comprehensive
                      support offered and the value proposition of the coaching
                      program. Aspirants expect high-quality materials and
                      rigorous testing as part of a reputable coaching package.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 12 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 10
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(10)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    Do you provide mentorship and doubt-clearing support?
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 10 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 10 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 10 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      Yes, personalized guidance and robust support systems are
                      core components of our coaching philosophy. We understand
                      that the UPSC journey requires more than just classroom
                      teaching. Our support structure includes:
                      <br />
                      <ul className="list-disc  ">
                        <li>
                          <strong>Mentorship Program:</strong> We offer
                          mentorship through experienced faculty members or
                          individuals with significant UPSC CSE experience,
                          potentially including past toppers.
                        </li>
                        <li>
                          <strong>Role of Mentors:</strong> Mentors work with
                          students to guide and support them throughout the
                          preparation journey.
                        </li>
                        <li>
                          <strong>Doubt Clearance:</strong> In addition to
                          mentor support, doubts can be cleared through various
                          interactive sessions and resources.
                        </li>
                        <li>
                          <strong>Communication Channels:</strong> Students can
                          connect with mentors and support teams via multiple
                          platforms for easy access and support.
                        </li>
                      </ul>
                      Personalized mentorship is increasingly recognized as a
                      crucial factor in navigating the complexities of the UPSC
                      exam, providing tailored support, accountability, and
                      motivation, especially in online learning environments.
                      Highlighting a strong mentorship program can be a
                      significant advantage for an institute.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 13 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 11
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(11)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What are the course fees and available payment options?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 11 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 11 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 11 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      We believe in transparency regarding our course fees. The
                      fees for our various programs are. Please note whether the
                      stated fees are inclusive or exclusive of applicable taxes
                      like GST. To make our programs accessible, we offer the
                      following payment options:
                      <br />
                      <ul className="list-disc  not-last:">
                        <li>
                          <strong>Full Payment:</strong> Option to pay the
                          entire course fee upfront.
                        </li>
                        <li>
                          <strong>Installment Plans:</strong> We offer
                          structured installment plans allowing payment in parts
                          over a defined period. Details of the installment
                          schedule are available upon request or on the course
                          page.
                        </li>
                        <li>
                          <strong>EMI Facility:</strong> Equated Monthly
                          Installment (EMI) options may be available through
                          partnerships with financing institutions or via
                          standard credit card EMI schemes offered by banks.
                          Please inquire for specific details and eligibility.
                        </li>
                      </ul>
                      We ensure there are no hidden costs associated with our
                      standard course offerings. Detailed fee structures for
                      each course are available. Cost is a significant
                      consideration for aspirants , and providing clear
                      information along with flexible payment options enhances
                      accessibility.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 14 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 12
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(12)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What is your cancellation and refund policy?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 12 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 12 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 12 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      We understand that circumstances can change. Our
                      cancellation and refund policy is designed to be clear and
                      fair. Please review the following terms carefully before
                      enrolling:
                      <br />
                      <ul className="list-disc  ">
                        <li>
                          <strong>Refund Request Window:</strong> A request for
                          a refund must be submitted in writing within a
                          specified window, whichever is earlier. Some policies
                          might offer a shorter window like 5-6 business days
                          from enrollment.
                        </li>
                        <li>
                          <strong>Refund Amount:</strong> If a valid refund
                          request is received within the specified Refund
                          Window, the refund amount will be processed. No
                          refunds will typically be processed for requests
                          received after the Refund Window expires.
                        </li>
                        <li>
                          <strong>Non-Refundable Items:</strong> Please note
                          that certain items or services may be non-refundable.
                        </li>
                        <li>
                          <strong>Processing:</strong> Approved refunds will be
                          processed within a specified timeframe and credited
                          back to the original mode of payment. You may be
                          contacted to verify details or provide alternate bank
                          information if needed.
                        </li>
                        <li>
                          <strong>Third-Party Loans:</strong> If the course fee
                          was paid using a loan from a third-party financier,
                          the institute typically does not provide a direct
                          refund. Cancellation requests may lead to loan
                          foreclosure, which becomes the sole responsibility of
                          the borrower (student) to settle with the financing
                          company. We can assist in forwarding the cancellation
                          information to the financier upon request.
                        </li>
                      </ul>
                      This policy is subject to the terms agreed upon during
                      enrollment. We encourage prospective students to read the
                      detailed terms and conditions before making a payment. A
                      clearly communicated policy, even if restrictive, manages
                      expectations and helps prevent future disputes.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 15 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 13
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(13)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    How does your online coaching compare to offline options?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 13 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 13 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 13 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      Choosing between online and offline coaching is a common
                      dilemma for UPSC aspirants. Both modes have distinct
                      advantages and disadvantages:
                      <br />
                      <ul className="list-disc  ">
                        <li>
                          <strong>Offline Coaching:</strong>
                          <ul className="list-inside space-y-2">
                            <li>
                              <strong>Pros:</strong> Offers a structured
                              learning environment with fixed schedules, direct
                              face-to-face interaction with faculty and peers,
                              opportunities for immediate doubt clarification,
                              and a disciplined atmosphere that some find
                              motivating. Peer interaction can broaden
                              perspectives.
                            </li>
                            <li>
                              <strong>Cons:</strong> Generally involves higher
                              costs (tuition fees plus potential relocation and
                              living expenses), geographical limitations
                              (centers often concentrated in specific cities),
                              less flexibility in scheduling, and time lost in
                              commuting.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Online Coaching:</strong>
                          <ul className="list-inside space-y-2">
                            <li>
                              <strong>Pros:</strong> Provides significant
                              flexibility (learn anytime, anywhere, at your own
                              pace), often more cost-effective, wider access to
                              diverse resources and top educators regardless of
                              location, and the ability to revisit recorded
                              lectures for better understanding and revision.
                            </li>
                            <li>
                              <strong>Cons:</strong> Requires strong
                              self-discipline and motivation, potential for
                              technical glitches (internet connectivity), and
                              potentially less direct personal interaction
                              compared to a physical classroom (though many
                              platforms mitigate this with interactive sessions
                              and mentorship).
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <h2 className="text-2xl font-semibold mb-4">
                        Institute's Position
                      </h2>
                      <ul className="list-disc pl-6 space-y-4">
                        <li>
                          <strong>If primarily online:</strong> "Our online
                          programs are designed to maximize flexibility while
                          mitigating potential drawbacks through highly
                          interactive live classes, dedicated mentorship for
                          personalized guidance, robust technical support, and
                          comprehensive online resources."
                        </li>
                        <li>
                          <strong>If primarily offline:</strong> "Our offline
                          centers provide an immersive and disciplined learning
                          environment with direct access to expert faculty and
                          valuable peer interaction, which many aspirants find
                          crucial for success."
                        </li>
                        <li>
                          <strong>If hybrid:</strong> "We offer hybrid models
                          combining the benefits of both – structured classroom
                          learning supplemented by flexible online resources and
                          support."
                        </li>
                      </ul>
                      Ultimately, the best mode depends on individual learning
                      styles, circumstances, and preferences. Addressing this
                      comparison directly demonstrates an understanding of
                      aspirant concerns and helps position the institute's
                      specific model effectively.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 16 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 14
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(14)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    How can I choose the best coaching institute for my needs?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 14 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 14 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 14 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      Selecting the right coaching institute is a significant
                      decision that can impact your UPSC preparation journey.
                      While many institutes claim to be the best, the "best"
                      choice is subjective and depends on your individual
                      requirements. Here are key factors to consider when
                      evaluating options :
                      <br />
                      <ul className="list-disc ">
                        <li>
                          <strong>Faculty Quality and Experience:</strong> Are
                          the teachers knowledgeable, experienced in UPSC
                          guidance, and effective communicators? Look beyond
                          popularity. (Refer back to our faculty details in FAQ
                          10).
                        </li>
                        <li>
                          <strong>
                            Course Structure and Syllabus Coverage:
                          </strong>{" "}
                          Does the course curriculum comprehensively cover the
                          latest UPSC syllabus for your target exam year? Is the
                          structure logical and well-paced? (See our course
                          offerings in FAQ 9).
                        </li>
                        <li>
                          <strong>Study Material and Resources:</strong> Is the
                          provided material updated, relevant, comprehensive,
                          and easy to understand? Are supplementary resources
                          like current affairs updates included? (Review our
                          resources in FAQ 11).
                        </li>
                        <li>
                          <strong>Teaching Methodology and Style:</strong> Does
                          the institute's teaching approach (e.g., interactive
                          live classes, recorded lectures, focus on conceptual
                          clarity, answer writing integration) align with your
                          learning style? (Consider our methodology outlined in
                          FAQ 10).
                        </li>
                        <li>
                          <strong>Mock Tests and Evaluation:</strong> Does the
                          institute conduct regular mock tests (Prelims and
                          Mains) that simulate the exam pattern? Is there a
                          mechanism for timely evaluation and meaningful
                          feedback? (Check our testing approach in FAQ 11).
                        </li>
                        <li>
                          <strong>Mentorship and Doubt Support:</strong> Is
                          personalized guidance, mentorship, and effective
                          doubt-clearing support available when you need it?
                          (See our support system in FAQ 12).
                        </li>
                        <li>
                          <strong>Batch Size and Individual Attention:</strong>{" "}
                          Particularly for offline classes, inquire about the
                          typical batch size. Smaller batches generally allow
                          for more interaction and individual attention.
                        </li>
                        <li>
                          <strong>Past Results and Student Feedback:</strong>{" "}
                          While past results should be viewed critically (see
                          FAQ 17), look for credible testimonials or feedback
                          from former students. Check online reviews and forums.
                        </li>
                        <li>
                          <strong>Fees and Value Proposition:</strong> Does the
                          fee structure fit your budget? Assess the overall
                          value offered in terms of faculty, resources, tests,
                          and support relative to the cost. (Refer to our fees
                          in FAQ 13).
                        </li>
                        <li>
                          <strong>Demo Classes and Institute Visit:</strong> If
                          possible, attend a demo class (online or offline) to
                          experience the teaching firsthand. If considering
                          offline coaching, visiting the institute can give you
                          a feel for the environment and infrastructure.
                        </li>
                      </ul>
                      We encourage you to explore our specific course details
                      [Link to Course Pages], attend a free demo session, or
                      schedule a counseling call [Link to Counselling] to see
                      how our offerings align with your needs. Making an
                      informed choice based on these factors will set you on the
                      right path.
                    </div>
                  )}
                </div>
              </div>
              {/* FAQ 17 */}
              <div
                className={`p-4 rounded-[24.72px] border-2 ${
                  openFAQ === 15
                    ? "bg-[#fa6a041c] shadow-[#fa6a041c] shadow-2xl"
                    : "bg-white"
                } border-[#fa6a04]`}
              >
                <div
                  onClick={() => toggleFAQ(15)} // Clicking toggles FAQ open/close
                  className="flex justify-between items-center gap-3 cursor-pointer text-left"
                >
                  <p className="text-lg font-semibold text-[#1E242C] text-left">
                    What is the success rate of your students?{" "}
                  </p>
                  <img
                    src={star}
                    alt="star"
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openFAQ === 15 ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={` overflow-auto transition-all duration-300 ease-in-out ${
                    openFAQ === 15 ? "max-h-80" : "max-h-0"
                  }`}
                >
                  {openFAQ === 15 && (
                    <div className="py-4 px-6 text-gray-600 mt-4 rounded-b-[24.72px]">
                      This is a question many aspirants ask, and understandably
                      so. While we are proud of the achievements of our students
                      who have successfully cleared the UPSC CSE under our
                      guidance , it's important to understand the context of
                      "success rates" in the UPSC exam. Success in the CSE is a
                      result of multiple factors, with the candidate's own hard
                      work, dedication, consistency, and strategy playing the
                      most significant role. Coaching institutes act as
                      facilitators, providing structured guidance, quality
                      resources, and a supportive ecosystem. Therefore, instead
                      of focusing solely on output numbers which can sometimes
                      be misleading or difficult to verify independently across
                      the industry, we focus on providing the best possible
                      inputs to maximize every sincere aspirant's chances of
                      success. This includes:
                      <br />
                      <ul className="list-disc ">
                        <li>High-quality teaching by experienced faculty.</li>
                        <li>Comprehensive and updated study materials.</li>
                        <li>
                          A rigorous schedule of mock tests with detailed
                          evaluation and feedback.
                        </li>
                        <li>Robust mentorship and doubt-clearing support.</li>
                      </ul>
                      We believe that providing these essential elements
                      empowers aspirants to perform to their full potential. You
                      can explore testimonials from our successful students on
                      our website to understand their experiences with our
                      programs.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
