import ServiceGrid from "../componants/services";
import ReviewSection from "../componants/clientreview";
import WhoWeAre from "../image/who-we-are.jpg";
import GridDistortion from "../componants/grid-distraction";

const AboutUs = () => {
  return (
    <section className="bg-black text-white">
      <div className="container mt-[100px] mx-auto ">
        {/* Hero Section */}
        <div className="hero-box grid grid-cols-2 items-center gap-[60px]">
          <div className="">
            <h1 className="banner-title text-[52px] leading-[80px] font-[400] text-[#ffffff]">
              Who <span className="primary-color">We</span> Are ?
            </h1>
            <p className="banner-text text-xl my-6">
              At CAPEIT, we believe trading shouldn’t feel like gambling—it
              should feel like strategy. That’s why we’ve built a platform that
              combines powerful AI algorithms, live market intelligence, and
              smart automation to help traders like you make informed,
              high-confidence decisions in real time.<br></br> <br></br> Our
              mission is to simplify the complexities of trading through
              intelligent automation and data-driven insights. Whether you're a
              beginner or a pro, our tools adapt to your trading style and help
              you spot opportunities before they become headlines.
            </p>
          </div>
          <div className="img-box w-[100%] h-[500px] relative  ">
            <GridDistortion
              imageSrc={WhoWeAre}
              grid={10}
              mouse={0.1}
              strength={0.15}
              relaxation={0.9}
              className="custom-class rounded-[10px]"
            />
          </div>
        </div>

        {/* What We Do */}
        <div className="my-[50px]">
          <ServiceGrid />
        </div>

        

        {/* Our Journey
        <div className="bg-gray-900 py-16 px-6">
          <h2 className="text-4xl font-semibold text-green-400 text-center">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10 text-center">
            <div className="p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold">2021</h3>
              <p className="text-gray-400 mt-2">
                Founded with a vision to democratize trading.
              </p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold">2022</h3>
              <p className="text-gray-400 mt-2">
                Expanded into algorithmic trading solutions.
              </p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold">2023</h3>
              <p className="text-gray-400 mt-2">
                Launched advanced trading education & workshops.
              </p>
            </div>
          </div>
        </div> */}

        <ReviewSection />
      </div>
    </section>
  );
};

export default AboutUs;
