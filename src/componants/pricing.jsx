import PixelCard from "./pixel";

export default () => {
    const plans = [
        {
            name: "Enterprise",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 32,
            isMostPop: true,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            name: "Startup",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 12,
            isMostPop: false,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            name: "Startup",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 12,
            isMostPop: false,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
    ];

    return (
        <section className="relative py-14">
            <div className="relative max-w-screen-xl mx-auto text-gray-300 sm:px-4 md:px-8">
                <div className="max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0">
                    <h3 className="text-[#03a373] font-semibold">Pricing</h3>
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Pay as you grow
                    </p>
                    <div className="max-w-xl">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            efficitur consequat nunc.
                        </p>
                    </div>
                </div>
                <div className="mt-16 justify-center sm:flex gap-5">
                    {plans.map((item, idx) => (
                        <div
                            key={idx}
                        >
                            <PixelCard variant="pink" className="relative">
                                <div className="border border-[#0e63b3] rounded-3xl absolute top-0 left-0 bg-transparent">
                                    <div className="p-4 py-8 space-y-4 rounded-3xl md:p-8 bg-transparent">
                                        <span className="text-gray-200 font-medium bg-transparent">{item.name}</span>
                                        <div className="text-cyan-400 text-3xl font-semibold bg-transparent">
                                            ${item.price} <span className="text-xl font-normal bg-transparent">/mo</span>
                                        </div>
                                        <p className="text-gray-400 bg-transparent">{item.desc}</p>
                                        <button className="px-3 py-3 bg-transparent rounded-lg w-full font-semibold text-sm duration-150 text-white bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700">
                                            Get Started
                                        </button>
                                    </div>
                                    <ul className="p-4 py-8 space-y-3 bg-transparent rounded-3xl md:p-8 ">
                                        {item.features.map((featureItem, idx) => (
                                            <li key={idx} className="flex bg-transparent items-center gap-5">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`h-5 w-5 ${item.isMostPop ? "text-cyan-600" : ""} bg-transparent`}
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </PixelCard>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
