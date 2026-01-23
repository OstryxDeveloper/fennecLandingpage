import Image from "next/image";

export default function ProblemStatement() {
    return (
        <div className="w-full bg-[#111111] flex flex-col items-center py-[9.09vw] mobile:py-[5.5vw] px-[3.63vw] mobile:px-[7.0vw]">
            <div className="w-full max-w-full mobile:max-w-[90.24vw] flex flex-col items-start gap-[9.09vw] mobile:gap-[1.87vw]">

                {/* Heading Section */}
                <div className="w-full relative flex flex-col items-start">
                    <h2 className="text-white text-[10.9vw] mobile:text-[3vw] font-bold leading-[110%] tracking-[-0.04em] text-left">
                        Traditional dating <br className="mobile:hidden" />
                        apps are <br className="mobile:hidden" />
                        <span className="inline-block bg-[#5F00DB] px-[1.2vw] py-[0.2vw] mobile:px-[0.5vw] mobile:py-[0.05vw] rounded-[2.72vw] mobile:rounded-[0.76vw] my-[0.3vw] mobile:my-0">too individual.</span> <br />
                        Social networks <br className="mobile:hidden" />
                        <span className="inline-block bg-[#5F00DB] px-[1.2vw] py-[0.2vw] mobile:px-[0.5vw] mobile:py-[0.05vw] rounded-[2.72vw] mobile:rounded-[0.76vw] my-[0.3vw] mobile:my-0 mt-[0.3vw]">are too broad.</span>
                    </h2>
                </div>

                {/* Description */}
                <p className="text-[#CCCCCC] text-[4.54vw] mobile:text-[1.11vw] font-normal leading-[120%] mobile:leading-[140%] tracking-[-0.02em] text-left max-w-full mobile:max-w-[90.24vw]">
                    There&apos;s no space for small groups who want to
                    meet new people—whether for friendships,
                    hangouts, trips, or shared hobbies.
                </p>

                {/* Lower Image Card */}
                <div className="relative w-full h-[92.72vw] mobile:h-[31.9vw] rounded-[5.45vw] mobile:rounded-[1.8vw] overflow-hidden shadow-2xl">
                    <Image
                        src="/assets/Feature Subsection-1/lottie_file.png"
                        alt="Group Connection"
                        fill
                        className="object-cover"
                    />
                    {/* Overlay with Content */}
                    <div className="absolute inset-0 bg-[#16003F]/50 p-[5.45vw] mobile:p-[3.75vw] flex flex-col mobile:flex-row items-start mobile:items-end justify-end mobile:justify-between gap-[9.09vw] mobile:gap-[1.87vw]">

                        {/* Logo / Pattern - Top Left on Mobile, Bottom Right on Desktop */}
                        <div className="w-[18.18vw] h-[18.18vw] mobile:w-[7.36vw] mobile:h-[7.36vw] relative flex-shrink-0 mobile:order-2">
                            <Image
                                src="/assets/Feature Subsection-1/Vector_logo.png"
                                alt="Fennec Pattern"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <h4
                            className="text-white text-[6.36vw] mobile:text-[3.33vw] font-normal leading-[120%] mobile:leading-[110%] tracking-[-0.04em] flex-1 w-full max-w-full mobile:max-w-none h-auto mobile:h-auto flex flex-col justify-end text-left mobile:order-1"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                        >
                            Fennec makes expanding
                            your circle natural, effortless,
                            and fun—together.
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}