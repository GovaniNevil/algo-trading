import { motion } from "framer-motion";
import Carousel from './review-slider'

export default function ReviewSection() {
    return (
        <section className="review-section">
            <div className="container mx-auto mt-[150px]">
                <div className="flex flex-col lg:flex-row items-center gap-10 justify-between banner-row">
                    <div className="bannercontent w-[60%]">
                        <h1 className="banner-title text-[82px] leading-[100px] font-[400] text-[#ffffff]">What Our Users Say</h1>
                        <p className="banner-text text-xl my-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam sit earum suscipit similique error quaerat deserunt perferendis quae porro neque. Nemo, laborum. Suscipit eligendi quisquam expedita, nam repellat a maxime.</p>
                        <button className="banner-btn base-btn primary-bg">Get Started</button>
                    </div>
                    <div className="review-slider w-1/4">
                        <div style={{ height: '600px', position: 'relative' }} className="mobilescreen">
                            <Carousel
                                baseWidth={300}
                                autoplay={true}
                                autoplayDelay={3000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
