import Serviceicon1 from '../image/service-img-1.png'
import Serviceicon2 from '../image/service-img-2.png'
import Serviceicon3 from '../image/service-img-3.png'
import Serviceicon4 from '../image/service-img-5.png'
import Serviceicon5 from '../image/service-img-5.png'


const Service = () => {
  const serviceData = [
    {
      title: "Algorithmic Trading Development",
      subtitle: "Custom Trading Bots & Strategies",
      description:
        "We design and develop intelligent algorithmic trading systems tailored to your specific goals. Our custom bots analyze market patterns, execute trades, and optimize performance—ensuring speed, accuracy, and efficiency in today's fast-paced markets.",
      icon: <img src={Serviceicon1} alt="" className='rounded'/>,
    },
    {
      title: "Forex Trading Solutions",
      subtitle: "AI-Driven Forex Strategies & Automation",
      description:
        "Tap into the global currency markets with our advanced forex trading solutions. Powered by AI and machine learning, our strategies are built for precision and profitability. Automate your trading with smart algorithms that adapt to market conditions in real-time.",
      icon: <img src={Serviceicon2} alt="" className='rounded' />,
    },
    {
      title: "Proprietary Desk Trading (Prop Desk)",
      subtitle: "Managed Accounts for High-Net-Worth Clients",
      description:
        "Our Prop Desk offers exclusive trading services for HNWIs seeking consistent performance and risk-managed growth. Benefit from institutional-grade strategies, real-time execution, and personalized portfolio management by seasoned trading professionals.",
      icon: <img src={Serviceicon3} alt="" className='rounded'/>,
    },
    {
      title: "Portfolio Management",
      subtitle: "Data-Driven Investment Strategies",
      description:
        "We provide intelligent portfolio management services grounded in data analytics and market research. Whether you're seeking capital growth, income, or wealth preservation, our strategies are crafted to align with your financial objectives.",
      icon: <img src={Serviceicon4} alt="" className='rounded' />,
    },
    {
      title: "Trading Consultancy",
      subtitle: "Market Insights & Strategy Development",
      description:
        "Our consulting services guide traders and investors with actionable insights, risk analysis, and custom strategies. We work closely with individuals and institutions to refine trading approaches, optimize asset allocation, and enhance returns.",
      icon: <img src={Serviceicon5} alt="" className='rounded' />,
    },
    {
      title: "Training & Workshops",
      subtitle: "Education on Algorithmic Trading, Forex & Stock Markets",
      description:
        "Learn from industry experts through our comprehensive training programs. Whether you're a beginner or an experienced trader, our workshops cover the fundamentals to advanced tactics in algorithmic, forex, and stock market trading.",
      icon: <img src={Serviceicon1} alt="" className='rounded' />,
    },
    {
      title: "API & Tech Solutions",
      subtitle: "Custom-Built Trading Platforms & Integrations",
      description:
        "Empower your trading infrastructure with our API development and tech integration services. From building robust platforms to connecting third-party tools, we offer scalable and secure solutions tailored to your trading needs.",
      icon: <img src={Serviceicon1} alt="" className='rounded' />,
    },
  ];

  return (
    <section className=" text-[#202020] py-[115px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="relative text-6xl text-400 pb-4 mb-6 inline-block">
            Exclusive Services
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50px] h-[3px] bg-[#03a373] rounded"></span>
            <span className="absolute bottom-0 left-1/2 translate-x-[30px] w-[10px] h-[3px] bg-[#504f93] rounded"></span>
          </h2>
          <p className="text-lg text-[#8e8e8e]">
            Discover our full range of trading and investment services designed
            to give you an edge in financial markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="relative bg-transparent border border-[#03a37340] rounded-xl p-10 pt-12 overflow-hidden group transition-all duration-500"
            >
              {/* Circle background */}
              <div className="absolute top-0 right-0 translate-x-[40%] -translate-y-[40%] w-[150px] h-[150px] bg-[#03a373] border-[6px] border-[#504f93] rounded-full opacity-50 z-10 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:rounded-none group-hover:border-0"></div>

              {/* Service Content */}
              <div className="relative flex gap-[30px] justify-between items-center z-20 bg-transparent">
                <div className="img-box w-1/2 bg-transparent">
                  <span className="inline-block bg-[#03a373] rounded-md text-white text-[30px] leading-[70px] text-center transition-all duration-300 group-hover:bg-white group-hover:text-[#ff4500]">
                    {service.icon}
                  </span>
                </div>
                <div className="content-box bg-transparent">
                  <h3 className="text-xl bg-transparent font-bold mt-6 mb-4 transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-md bg-transparent text-[#8e8e8e] group-hover:text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
