import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { BsShieldLock, BsBarChart } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import Trading1 from "../image/Trading1.png";
import Trading2 from "../image/Trading2.png";
import Trading3 from "../image/Trading3.png";
import Trading4 from "../image/Trading4.png";

const Feature = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <motion.div
          className="title-box flex justify-between items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-5xl leading-[60px]  mb-12">
              Trade Smarter with{" "}
              <span className="primary-color">Automated <br /> Stock Trading</span> Fully featured
            </h2>
            <p className="text-gray-400">
              Let algorithms do the heavy lifting—execute trades faster, track market trends in real-time, and manage your portfolio with ease.
            </p>
          </div>
          <div className="mt-6 flex gap-4">
            <button className="base-btn">Download app</button>
            <button className="border-btn">Browse all features</button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-12">
          {/* Lottie Animation */}
          <motion.div
            className="col-span-2 row-span-3 p-6 border border-[#382d2d] rounded-tl-[20px] rounded-bl-[20px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
          >
            <DotLottieReact
              src="https://lottie.host/ad5f733b-325f-4e41-a440-93776435d188/Vh9p7adoI7.lottie"
              loop
              autoplay
            />
          </motion.div>

          {/* Feature Cards */}
          {[
            { img: Trading1, title: "Effortless Automated Trading", text: "Say goodbye to manual trading—our algorithms execute trades with precision and speed." },
            { img: Trading2, title: "Stay Ahead with Live Market Updates", text: "Get real-time stock data, trends, and insights to make informed decisions." },
            { img: Trading3, title: "Simplified Portfolio Tracking", text: "Keep an eye on your investments with clear, transparent performance tracking." },
            { img: Trading4, title: "Watch and Analyze Charts", text: "Understand market movements with in-depth charts and expert insights." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 border border-[#2f2f2f] ${index === 1 ? "rounded-tr-[20px]" : index === 3 ? "rounded-br-[20px]" : ""
                } flex flex-col items-center text-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            >
              <img src={feature.img} alt="" className="w-[200px] mx-auto" />
              <h3 className="primary-color text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
