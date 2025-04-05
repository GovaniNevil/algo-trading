import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../image/logo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-black text-white py-5 transition-all duration-300 ${isSticky ? "fixed top-0 left-0 w-full shadow-lg z-50 py-4" : "relative"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={Logo} alt="Logo" className="w-[200px]" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center text-[18px] font-medium">
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="text-white hover:text-[#57b283]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-[#57b283]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#57b283]">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#57b283]">
                Trading Tool
              </a>
            </li>
            <li>
              <a href="/pricing" className="text-white hover:text-[#57b283]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#57b283]">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact-us" className="text-white hover:text-[#57b283]">
                Contact Us
              </a>
            </li>
            
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose size={40} /> : <IoMdMenu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white flex flex-col items-center py-4">
          <ul>
            <li className="mb-[15px]">
              <a href="#" className="text-white hover:text-[#57b283]">
                Home
              </a>
            </li>
            <li className="mb-[15px]">
              <a href="#" className="text-white hover:text-[#57b283]">
                About Us
              </a>
            </li>
            <li className="mb-[15px]">
              <a href="#" className="text-white hover:text-[#57b283]">
                Service
              </a>
            </li>
            <li className="mb-[15px]">
              <a href="#" className="text-white hover:text-[#57b283]">
                Tradng Tools
              </a>
            </li>
            <li className="mb-[15px]">
              <a href="/pricing" className="text-white hover:text-[#57b283]">
                Pricing
              </a>
            </li>
            <li className="mb-[15px]">
              <a href="#" className="text-white hover:text-[#57b283]">
                Blog
              </a>
            </li>
            <li className="mb-[15px]">
              <a href="/contact-us" className="text-white hover:text-[#57b283]">
                Contact Us
              </a>
            </li>
            <li className="mb-[15px]">
              <a href="#" className="text-white hover:text-[#57b283]">
                
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
