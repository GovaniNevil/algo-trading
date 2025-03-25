import React from "react";
import { FaRobot, FaChartLine, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import SpotlightCard from './spotlightcard';
import TiltedCard from './spring';

const services = [
    { title: "Algorithmic Trading Solutions", icon: <FaRobot />, description: "Leverage cutting-edge AI and machine learning algorithms to automate and optimize your trading strategies, ensuring high-speed execution, reduced risks, and enhanced market efficiency.", link: "#", },
    { title: "Proprietary Trading Desk", icon: <FaChartLine />, description: "Gain exclusive insights and data-driven strategies used by institutional traders. Our proprietary trading desk provides advanced market analysis, real-time trading signals.", link: "#", },
    { title: "Fintech Software Development", icon: <FaLaptopCode />, description: "Build custom financial applications tailored to your business needs. From trading platforms and stock screeners to portfolio management software, we create cutting-edge fintech solutions.", link: "#", },
    { title: "Stock Market Consulting & Education", icon: <FaGraduationCap />, description: "Empower yourself with expert market guidance and educational resources. Our consulting services include personalized mentorship, investment strategy workshops, and in-depth market research reports.", link: "#", },
];

const ServiceGrid = () => {
    return (
        <section className="py-12 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-6xl text-400 mb-12">
                    Our <span className="primary-color">Services</span>
                </h2>
                <div className="grid grid-cols-2 gap-12">
                    {services.map((service, index) => (
                        <TiltedCard key={index} containerHeight="100%" containerWidth="100%" rotateAmplitude={12} showMobileWarning={false} showTooltip={false}>
                            <SpotlightCard className="custom-spotlight-card" spotlightColor="#a3fd3540">
                                <div className="p-6 rounded-lg bg-neutral-900 shadow-md flex flex-col">
                                    <div className="text-7xl mb-6 service-icon bg-transparent text-[#a3fd35]">{service.icon}</div>
                                    <h3 className="text-start text-3xl text-400 bg-transparent">{service.title}</h3>
                                    <p className="text-start text-lg text-[#8e8e8e] mt-4 bg-transparent">{service.description}</p>
                                    <div className="button bg-transparent mt-10 text-start">
                                        <a href={service.link} className="service-btn px-[30px] py-[15px] bg-transparent rounded-lg border">Learn More</a>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </TiltedCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceGrid;
