import Video from '../image/video.mp4'

const VideoBackground = () => {
    return (
        <div className="relative h-[500px] w-full my-[150px] overflow-hidden">
            {/* Video Background */}
            <video
                className=" w-full h-full object-cover"
                src={Video} // Replace with your actual video path
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay for better readability */}


            {/* Content on top of the video */}
            <div className="absolute bg-[#00000090] top-0 left-0 w-full z-10 flex flex-col items-center justify-center h-full text-white text-center">
                <h1 className="text-5xl bg-[#00000080]  mb-4">Trade Smarter, Not Harder!</h1>
                <p className="text-xl bg-[#00000080]">Let our AI handle the market moves while you focus on your goals. Faster execution, better profits—no stress!</p>
                <button className="mt-6  base-btn">
                    Start Trading Now
                </button>
            </div>
        </div>
    );
};

export default VideoBackground;
