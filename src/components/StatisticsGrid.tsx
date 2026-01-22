import { motion } from "framer-motion";
import Image from "next/image";

export default function StatisticsGrid() {
  return (
    <section
      className="w-full flex justify-center mobile:mx-auto"
      style={{
        paddingBlock: "6.25vw",
        paddingInline: "7.9167vw",
      }}
    >
      {/* Container */}
      <div
        className="w-full max-w-full mobile:max-w-full flex flex-col"
        style={{
          gap: "4.1667vw", // 80px
        }}
      >
        {/* Row */}
        <div
          className="flex mobile:flex-row flex-col"
          style={{
            gap: "0.8333vw", // 16px
          }}
        >
          {/* LEFT CARD — 94% */}
          <div
            className="relative overflow-hidden flex flex-col justify-center items-center text-center border border-white/5"
            style={{
              width: "41.6667vw",
              height: "41.6667vw",
              padding: "2.0833vw",
              borderRadius: "2.0833vw", // 40px
              backgroundColor: "#16003F",
            }}
          >
            {/* Background image */}
            <Image
              src="/assets/Hero_Background.PNG"
              alt=""
              fill
              className="object-cover opacity-40"
            />

            {/* Glow */}
            <div
              className="absolute rounded-full"
              style={{
                width: "13.75vw", // 264px
                height: "13.75vw",
                background: "rgba(168,85,247,0.1)",
                filter: "blur(3.125vw)", // 60px
              }}
            />

            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 font-bold text-white tracking-[-0.04em]"
              style={{
                fontSize: "11.25vw", // 216px
                lineHeight: "11.875vw", // 238px
              }}
            >
              94%
            </motion.h2>

            <p
              className="relative z-10 font-bold text-white tracking-[-0.04em]"
              style={{
                fontSize: "1.875vw", // 36px
                lineHeight: "2.0833vw", // 40px
                maxWidth: "37.5vw", // 720px
              }}
            >
              People Feel More Comfortable Meeting New People via Group Matching
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="flex flex-col  "
            style={{
              width: "41.6667vw",
              gap: "0.8333vw",
            }}
          >
            {/* 78% CARD */}
            <div
              className="flex flex-col justify-center items-center text-center border border-white/5"
              style={{
                height: "20.4167vw",
                padding: "2.0833vw",
                borderRadius: "2.0833vw",
                background: "#5F00DB",
              }}
            >
              <h2
                className="font-bold text-white tracking-[-0.04em]"
                style={{
                  fontSize: "5.625vw", // 108px
                  lineHeight: "6.1979vw", // 119px
                }}
              >
                78%
              </h2>
              <p
                className="font-bold text-white tracking-[-0.04em]"
                style={{
                  fontSize: "1.875vw",
                  lineHeight: "2.0833vw",
                  maxWidth: "37.5vw",
                }}
              >
                of Users Report Better First Interactions in Groups
              </p>
            </div>

            {/* TWO SMALL CARDS */}
            <div
              className="flex flex-row"
              style={{
                gap: "0.8333vw",
                height: "20.4167vw",
              }}
            >
              {/* 1.2M+ */}
              <div
                className="flex flex-col justify-center items-center text-center border border-white/5"
                style={{
                  flex: 1,
                  padding: "2.0833vw",
                  borderRadius: "2.0833vw",
                  background: "rgba(95,0,219,0.75)",
                }}
              >
                <h3
                  className="font-bold text-white tracking-[-0.04em]"
                  style={{
                    fontSize: "3.75vw", // 72px
                    lineHeight: "4.1146vw", // 79px
                  }}
                >
                  1.2M+
                </h3>
                <p
                  className="font-bold text-white tracking-[-0.04em]"
                  style={{
                    fontSize: "1.875vw",
                    lineHeight: "2.0833vw",
                  }}
                >
                  Conversation Started
                </p>
              </div>

              {/* 350K+ */}
              <div
                className="flex flex-col justify-center items-center text-center border border-white/5"
                style={{
                  flex: 1,
                  padding: "2.0833vw",
                  borderRadius: "2.0833vw",
                  background: "rgba(95,0,219,0.5)",
                }}
              >
                <h3
                  className="font-bold text-white tracking-[-0.04em]"
                  style={{
                    fontSize: "3.75vw",
                    lineHeight: "4.1146vw",
                  }}
                >
                  350K+
                </h3>
                <p
                  className="font-bold text-white tracking-[-0.04em]"
                  style={{
                    fontSize: "1.875vw",
                    lineHeight: "2.0833vw",
                  }}
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
