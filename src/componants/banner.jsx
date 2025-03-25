import React from 'react';
import { motion } from 'framer-motion';
import BannerImage from "../image/ai-trading.jpg";
import Introvideo from "../image/introvideo.mp4";
import Line from "../image/lite.svg";
import Eth from "../image/eth.svg";
import Ring from "../image/ring.svg";
import Solana from "../image/solana.svg";

const Banner = () => {
    return (
        <section className="banner relative overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="container mx-auto mb-[100px] mt-[200px]"
            >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 banner-row">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bannercontent w-2/5"
                    >
                        <h1 className="banner-title text-[52px] leading-[80px] font-[400] text-[#ffffff]">
                            Trade Smarter. <span className='primary-color'>Earn</span> More. Let <span className='primary-color'>AI</span> Do the Heavy Lifting.
                        </h1>
                        <p className="banner-text text-xl my-6">
                            CAPEIT gives you AI-driven strategies and real-time insights, so you can trade with confidence and maximize your profits—without the stress.
                        </p>
                        <div className='button'>
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="banner-btn base-btn primary-bg mr-8"
                            >
                                Get Started Now
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="banner-btn border-btn"
                            >
                                View Live Performance
                            </motion.button>
                        </div>
                    </motion.div>
                    
                    {/* Image Section */}
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bannerimg relative w-1/2"
                    >
                        <img src={BannerImage} alt="AI Trading" className='rounded-[20px]' />
                        {/* <motion.img src={Line} alt="Litecoin" className='absolute top-[-40px] right-[150px] floating' animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3 }} />
                        <motion.img src={Eth} alt="Ethereum" className='absolute top-[-140px] right-[0px] floating' animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }} />
                        <motion.img src={Ring} alt="Ring" className='absolute top-[10%] left-[40%] floating -translate-x-1/2' animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 5 }} />
                        <motion.img src={Solana} alt="Solana" className='absolute top-[20px] right-[0px] floating' animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} /> */}
                    </motion.div>
                </div>
                
                {/* Video Section */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    data-aos="flip-left" 
                    className="video mt-[150px]"
                >
                    <video src={Introvideo} autoPlay loop muted playsInline className='rounded-[20px]'></video>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Banner;
