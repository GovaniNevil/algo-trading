import { motion } from "framer-motion";
import Aurora from './aurora';

export default function CTASection() {
    return (
        <section className="bg-black text-white  text-center">
            <div className="container-fluid mx-auto">
                <div className="   mx-auto bg-[#a3e635]  py-10 px-20 text-center  relative">
                    <div className="text-center md:text-left py-12 px-12 bg-[#a3e635]">
                        <h2 className="text-5xl font-semibold text-black bg-[#a3e635]">Start investing today.</h2>
                        <p className=" mt-4  text-lg   bg-[#a3e635] text-black">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed erat.
                        </p>
                        <a
                            href="/utility-pages/request-a-demo"
                            className="mt-4 inline-block px-6 py-3 bg-black  font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
                        >
                            Download app
                        </a>
                    </div>
                    <div className="mt-6 md:mt-0 w-[400px] absolute bottom-0 right-0 bg-transparent">
                        <img
                            src="https://cdn.prod.website-files.com/63719f2fab8916e8a5f98324/63b47bac66795a214d9ccfd5_image-cta-footer-finantech-x-webflow-template.svg"
                            alt="Start Investing Today"
                            className="bg-transparent"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
