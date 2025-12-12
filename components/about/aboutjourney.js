"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BiAward, BiCalendar, BiStar, BiTrendingUp } from "react-icons/bi";

export default function JourneyTimeline() {
const milestones = [
  {
    id: 1,
    year: "2018",
    title: "FASTag Services ",
    desc: "We entered the digital mobility sector by introducing FASTag services to simplify toll payments. With a focus on speed, transparency, and user-friendly processing, our platform quickly became a preferred choice for vehicle owners.",
    icon: <BiCalendar className="w-6 h-6 text-[#00186b]" />,
    image: "/user/car1.jpg",
  },
  {
    id: 2,
    year: "2020",
    title: "E-Challan System ",
    desc: "To enhance user convenience, we introduced online E-Challan checking and payment. This helped users instantly find penalties, track challan history, and make secure payments — all from one dashboard.",
    icon: <BiAward className="w-6 h-6 text-[#00186b]" />,
    image: "/user/car2.jpg",
  },
];



  return (
   <section className="max-w-6xl mx-auto py-16">

          <h1 className="text-5xl font-extrabold mt-2 leading-tight text-[#00186b]">
         About Our Services
          </h1>
  <div className="flex flex-col items-center relative pt-8">
    {milestones.map((step, index) => {
      const isEven = index % 2 === 1;
      const isLast = index === milestones.length - 1;

      return (
        <React.Fragment key={step.id}>
          <div
            className={`relative flex flex-col md:flex-row items-center gap-8 w-full h-auto px-6 py-3  ${
              isEven
                ? "md:flex-row-reverse md:border-r-4 border-amber-400 rounded-r-[150px]"
                : "md:border-l-4 border-amber-400 rounded-l-[150px]"
            }`}
          >
            {/* Image Section */}
            <div className="rounded-full overflow-hidden">
              <Image
              width={200}
              height={200}
                src={step.image}
                alt={step.title}
                className="aspect-square w-40 h-40 rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left">
            

              <h3 className="text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 max-w-3xl">{step.desc}</p>
            </div>
          </div>

          {/* Separator Line (not for last item) */}
          {!isLast && (
            <div className="w-[80%] h-0.5 bg-amber-400/80 rounded-full mx-auto"></div>

          )}
        </React.Fragment>
      );
    })}
  </div>
</section>

  );
}
