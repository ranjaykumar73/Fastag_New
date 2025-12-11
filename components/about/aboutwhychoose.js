"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsShieldCheck } from "react-icons/bs";
import { FiZap } from "react-icons/fi";
import { BiAward, BiTimeFive } from "react-icons/bi";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Verified & Secure",
      description:
        "Every FASTag recharge and e-Challan inquiry is processed through secure and trusted systems for maximum safety.",
      icon: <BsShieldCheck className="w-8 h-8 text-[#00186b]" />,
    },
    {
      title: "Instant Processing",
      description:
        "FASTag recharge, challan check, and challan payment—all done in seconds with real-time updates.",
      icon: <FiZap className="w-8 h-8 text-[#fa9404]" />,
    },
    {
      title: "PAN-India Support",
      description:
        "Supports all FASTag providers and state-wise challan systems across India for maximum coverage.",
      icon: <BiTimeFive className="w-8 h-8 text-[#00186b]" />,
    },
    {
      title: "Highly Reliable Service",
      description:
        "Our platform ensures accurate challan reports, seamless FASTag recharges, and trusted processing.",
      icon: <BiAward className="w-8 h-8 text-[#fa9404]" />,
    },
  ];

  return (
    <section className="relative py-16 bg-gray-100 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#fa9404]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#00186b]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-4 md:px-0 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#00186b]">
            Why <span className="text-[#fa9404] swing">Choose Us?</span>
          </h2>

          <p className="text-gray-600">
            With fast processing, verified data, and secure payments, we make
            FASTag recharge and e-Challan services seamless and reliable for
            every vehicle owner.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-[#00186b]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Images */}
        <div className="relative">
          <Image
            className="w-full max-w-md ms-auto rounded-full border-l-8 border-t-8 border-[#fa9404] aspect-square shadow-lg"
            src="/footer/i5.png"
            width={300}
            height={300}
            alt="FASTag recharge service"
          />
          <div className="hidden md:block absolute left-1/4 -bottom-5 w-48">
            <Image
              className="w-full max-w-lg mx-auto rounded-full aspect-square border-r-8 border-b-8 border-[#fa9404] shadow-lg"
              src="/footer/i3.png"
              width={500}
              height={500}
              alt="E-Challan services"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
