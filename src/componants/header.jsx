import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from '../image/logo.png'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-9">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#"><img src={Logo} alt="" className="w-[250px]" /></a>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-6 items-center text-[20px] font-400">
          <ul>
            <li className="inline-block mr-[30px]"><a href="#" className="nav-link active text-white hover:text-[#57b283]">Home</a></li>
            <li className="inline-block mr-[30px]"><a href="#" className="nav-link text-white hover:text-[#57b283]">About</a></li>
            <li className="inline-block mr-[30px]"><a href="#" className="nav-link text-white hover:text-[#57b283]">Service</a></li>
            <li className="inline-block mr-[30px]"><a href="#" className="nav-link text-white hover:text-[#57b283]">Blog</a></li>
            <li className="inline-block mr-[30px]"><a href="#" className="nav-link text-white hover:text-[#57b283]">Contact Us</a></li>
            <li className="inline-block">
              <a href="#" className="hidden md:block bg-[#57b283] text-black font-medium px-8 py-2 rounded-full hover:bg-lime-500">
                Log in
              </a>
            </li>
          </ul>
        </nav>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoMdClose size={40}/> : <IoMdMenu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black text-white flex flex-col items-center py-4">
          <ul>
            <li className=" mb-[15px]"><a href="#" className="text-white hover:text-[#57b283] text-center block">Home</a></li>
            <li className=" mb-[15px]"><a href="#" className="text-white hover:text-[#57b283] text-center block">About Us</a></li>
            <li className=" mb-[15px]"><a href="#" className="text-white hover:text-[#57b283] text-center block">Service</a></li>
            <li className=" mb-[15px]"><a href="#" className="text-white hover:text-[#57b283] text-center block">Blog</a></li>
            <li className=" mb-[15px]"><a href="#" className="text-white hover:text-[#57b283] text-center block">Contact Us</a></li>
            <li className="">
              <a href="#" className="hidden md:block bg-lime-400 text-black font-medium px-4 py-2 rounded-full hover:bg-lime-500">
                Download app
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
