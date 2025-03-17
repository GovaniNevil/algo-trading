import React from 'react';
import BannerImage from "../image/banner-image.svg";
import Line from "../image/lite.svg";
import Eth from "../image/eth.svg";
import Ring from "../image/ring.svg";
import Solana from "../image/solana.svg";

const Banner = () => {
    return (
        <>
            <section className="banner ">
                <div className="container mx-auto mb-[100px] mt-[200px]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 banner-row">
                        <div className="bannercontent w-2/5">
                            <h1 className="banner-title text-[82px] leading-[100px] font-[400] text-[#ffffff]">Buy and trade <span className='primary-color'>stocks</span> like never <span className='primary-color'>before.</span></h1>
                            <p className="banner-text text-xl my-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sit earum suscipit similique error quaerat deserunt perferendis quae porro neque. Nemo, laborum. Suscipit eligendi quisquam expedita, nam repellat a maxime.</p>
                            <button className="banner-btn base-btn primary-bg">Get Started</button>
                        </div>
                        <div className="bannerimg relative">
                            <img src={BannerImage} alt="" className='' />
                            <div className="floating-img">
                                <img src={Line} alt="" className='lite-coin absolute top-[-40px] right-[150px] bg-transparent' />
                                <img src={Eth} alt="" className='eth-coin absolute top-[-140px] right-[0px] bg-transparent' />
                                <img src={Ring} alt="" className='ring-img absolute top-[10%] left-[40%] bg-transparent -translate-x-1/2 ' />
                                <img src={Solana} alt="" className='solana-coin absolute top-[20px] right-[0px] bg-transparent' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;