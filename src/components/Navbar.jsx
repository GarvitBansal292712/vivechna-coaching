import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isE_LibraryOpen, setIsE_LibraryOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/our-courses" },
    { name: "E-Library", path: "#", isE_Library: true }, // Adding E-Library here with special handling
    { name: "About", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  const eLibraryLinks = [
    { name: "Our YouTube Channel", url: "https://students.vivechna.com/our-youtube-channel/" },
    { name: "PDF Resources", url: "https://students.vivechna.com/pdf-library/" },
    { name: "Latest News", url: "https://students.vivechna.com/current-affairs/" },
  ];

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded hover:text-orange-500 ${
      isActive ? "text-orange-500 font-semibold" : "text-blue-600"
    }`;

  const handleE_LibraryClick = (e) => {
    e.preventDefault();
    setIsE_LibraryOpen(!isE_LibraryOpen);
  };

  return (
    <nav className="bg-white border-b border-white/10 fixed top-0 left-0 w-full z-50 text-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="">
          <img src={logo} alt="Logo" width={400} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <div key={link.name} className="relative text-blue-600">
              {/* If it's E-Library, show dropdown on click */}
              {link.isE_Library ? (
                <>
                  <button
                    onClick={handleE_LibraryClick}
                    className={navLinkClass} 
                  >
                    {link.name}
                  </button>
                  {isE_LibraryOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md text-center">
                      {eLibraryLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-blue-600 hover:bg-gray-100 text-center"
                          onClick={() => setIsE_LibraryOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={navLinkClass}
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}

          {/* Register Now Button */}
          <Link to="/contact">
            <button className="rounded-[120px] border-2 border-[#FA6904] cursor-pointer py-2 px-4 flex items-center space-x-2 text-[#FA6904] hover:bg-[#FA6904] hover:text-white transition ease-in-out duration-300">
              <span>Register Now</span>
              <span>&rarr;</span>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          {isOpen ? (
            <XMarkIcon className="w-8 h-8 text-[#FA6904]" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-[#FA6904]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200 text-center pb-4">
          {links.map((link) => (
            <div key={link.name} className="relative">
              {/* If it's E-Library, show dropdown in mobile */}
              {link.isE_Library ? (
                <>
                  <button
                    onClick={handleE_LibraryClick}
                    className={navLinkClass}
                  >
                    {link.name}
                  </button>
                  {isE_LibraryOpen && (
                    <div className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-md z-10">
                      {eLibraryLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-blue-600 hover:bg-gray-100"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={navLinkClass}
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}

          {/* Register Now Button in Mobile */}
          <Link to="/contact">
            <div className="flex justify-center">
              <button className="rounded-[120px] border-2 border-[#FA6904] cursor-pointer py-2 px-4 flex items-center space-x-2 text-[#FA6904] hover:bg-[#FA6904] hover:text-white transition ease-in-out duration-300">
                <span>Register Now</span>
                <span>&rarr;</span>
              </button>
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
