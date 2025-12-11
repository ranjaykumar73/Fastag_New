"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";

export default function AboutCompanyOverview() {
  return (
       <section className="w-full py-16 px-4  bg-linear-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* Left Section - Overview */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-[#fa9404] rounded-full"></div>
            <span className="px-4 py-2 bg-[#00186b]/5 text-[#00186b] rounded-full text-sm font-semibold border border-[#00186b]/10">
              Services Overview
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Hassle-Free <br />
            <span className="text-[#00186b]">FASTag & E-Challan Solutions</span>
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            Manage your FASTag and E-Challan needs in one place. From quick 
            FASTag activation to instant challan checks and secure payments — we 
            simplify your travel experience with a seamless and reliable platform.
          </p>

   
        </motion.div>

        {/* Middle Section - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center relative my-auto"
        >
          <div className="relative">
            <Image
              src="/user/car3.jpg" 
              alt="FASTag Services"
              width={400}
              height={500}
              className="rounded-2xl shadow-2xl border-r-8 border-b-8 border-[#fa9404] object-cover z-10 relative"
            />
          </div>
        </motion.div>

        {/* Right Section - Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="relative my-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#fa9404] to-[#00186b]"></div>

            {/* FASTag */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ml-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#fa9404]/10 rounded-lg">
                  <BsEye className="w-6 h-6 text-[#fa9404]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">FASTag Services</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Activate, recharge, and manage your FASTag easily. Enjoy smooth 
                toll payments with real-time balance updates and instant support.
              </p>
            </div>

            {/* E-Challan */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ml-10 mt-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#00186b]/10 rounded-lg">
                  <FiTarget className="w-6 h-6 text-[#00186b]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">E-Challan Services</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Check pending challans, download challan details, and make secure 
                online payments instantly — all in one convenient dashboard.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
