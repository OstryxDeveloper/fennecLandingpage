import { motion } from "framer-motion";
import Image from "next/image";

export default function StatisticsGrid() {
  return (
    <section
      className="w-full bg-[#111111] flex justify-center mobile:mx-auto py-[9.09vw] px-[3.63vw] lg:py-[6.25vw] lg:px-[7.92vw]"
    >
      {/* Container */}
      <div
        className="w-full max-w-full mobile:max-w-full flex flex-col gap-[3.64vw] lg:gap-[4.17vw]"
      >
        {/* Row */}
        <div
          className="flex flex-col mobile:flex-row gap-[3.64vw] mobile:gap-[0.83vw]"
        >
          {/* LEFT CARD — 94% */}
          <div
            className="relative overflow-hidden flex flex-col justify-center items-center text-center border border-white/5 w-full mobile:w-[41.67vw] h-[92.74vw] mobile:h-[41.67vw] p-[3.63vw] mobile:p-[2.08vw] rounded-[3.63vw] mobile:rounded-[2.08vw] bg-[#16003F]"
          >
            {/* Background image */}
            <Image
              src="/assets/Feature Subsection-1/Card BG.png"
              alt=""
              fill
              className="object-cover opacity-40"
            />

            {/* Glow */}
            <div
              className="absolute rounded-full w-[26.4vw] h-[26.4vw] mobile:w-[13.75vw] mobile:h-[13.75vw] blur-[6vw] mobile:blur-[3.13vw]"
              style={{
                background: "rgba(168,85,247,0.1)",
              }}
            />

            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 font-bold text-white tracking-[-0.04em] text-[21.6vw] leading-[23.8vw] mobile:text-[11.25vw] mobile:leading-[11.88vw]"
            >
              94%
            </motion.h2>

            <p
              className="relative z-10 font-bold text-white tracking-[-0.04em] text-[3.6vw] leading-[4vw] max-w-[72vw] mobile:text-[1.88vw] mobile:leading-[2.08vw] mobile:max-w-[37.5vw]"
            >
              People Feel More Comfortable Meeting New People via Group Matching
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="flex flex-col w-full mobile:w-[41.67vw] gap-[3.64vw] mobile:gap-[0.83vw]"
          >
            {/* 78% CARD */}
            <div
              className="flex flex-col justify-center items-center text-center border border-white/5 h-[45.45vw] mobile:h-[20.42vw] p-[3.63vw] mobile:p-[2.08vw] rounded-[3.63vw] mobile:rounded-[2.08vw] bg-[#5F00DB]"
            >
              <h2
                className="font-bold text-white tracking-[-0.04em] text-[10.8vw] leading-[11.9vw] mobile:text-[5.63vw] mobile:leading-[6.2vw]"
              >
                78%
              </h2>
              <p
                className="font-bold text-white tracking-[-0.04em] text-[3.6vw] leading-[4vw] max-w-[72vw] mobile:text-[1.88vw] mobile:leading-[2.08vw] mobile:max-w-[37.5vw]"
              >
                of Users Report Better First Interactions in Groups
              </p>
            </div>

            {/* TWO SMALL CARDS */}
            <div
              className="flex flex-row gap-[3.64vw] mobile:gap-[0.83vw] h-[45.45vw] mobile:h-[20.42vw]"
            >
              {/* 1.2M+ */}
              <div
                className="flex flex-col justify-center items-center text-center border border-white/5 flex-1 p-[3.63vw] mobile:p-[2.08vw] rounded-[3.63vw] mobile:rounded-[2.08vw] bg-[rgba(95,0,219,0.75)]"
              >
                <h3
                  className="font-bold text-white tracking-[-0.04em] text-[7.2vw] leading-[7.9vw] mobile:text-[3.75vw] mobile:leading-[4.11vw]"
                >
                  1.2M+
                </h3>
                <p
                  className="font-bold text-white tracking-[-0.04em] text-[3.6vw] leading-[4vw] mobile:text-[1.88vw] mobile:leading-[2.08vw]"
                >
                  Conversation Started
                </p>
              </div>

              {/* 350K+ */}
              <div
                className="flex flex-col justify-center items-center text-center border border-white/5 flex-1 p-[3.63vw] mobile:p-[2.08vw] rounded-[3.63vw] mobile:rounded-[2.08vw] bg-[rgba(95,0,219,0.5)]"
              >
                <h3
                  className="font-bold text-white tracking-[-0.04em] text-[7.2vw] leading-[7.9vw] mobile:text-[3.75vw] mobile:leading-[4.11vw]"
                >
                  350K+
                </h3>
                <p
                  className="font-bold text-white tracking-[-0.04em] text-[3.6vw] leading-[4vw] mobile:text-[1.88vw] mobile:leading-[2.08vw]"
                >
                  Groups Connected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
