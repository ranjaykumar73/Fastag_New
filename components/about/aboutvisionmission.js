"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="relative bg-[#120A25] text-white py-10  overflow-hidden ">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex justify-between ">
          <div className="col-lg-9">
            {/* Small Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-3 h-3 rounded-full bg-[#fa9404]" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">
                About FASTag & E-Challan
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
            >
              FAST, SECURE & <br />  
              HASSLE-FREE VEHICLE SERVICES
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-3xl mb-12 leading-relaxed"
            >
              We provide seamless FASTag recharge, instant challan checking,
              and secure online fine payments — all on one trusted platform.
              Our mission is to make digital toll and traffic services easier,
              faster, and more reliable for every vehicle owner in India.
            </motion.p>
          </div>

          <div className="col-lg-3">
            <Image
              src="/user/c1.jpg"
              width={100}
              height={100}
              alt="img"
              className="w-50 h-56 border-3 border-[#fa9404] rounded-lg hidden md:block"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision Box */}
          <div
            className="p-6 rounded-2xl border border-gray-600 hover:border-[#e87e15] transition-all md:h-50"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">OUR VISION</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To make FASTag recharge and E-Challan management simpler,
              trustworthy, and accessible for every vehicle owner across the country,
              ensuring smooth and stress-free travel.
            </p>
          </div>

          {/* Mission Box */}
          <div
            className="p-6 rounded-2xl border border-gray-600 hover:border-[#e87e15] transition-all md:h-50"
          >
            <h3 className="text-2xl font-bold mb-3 text-white">OUR MISSION</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our mission is to offer fast, accurate, and secure FASTag and
              challan services with complete transparency, helping users save
              time, avoid penalties, and enjoy hassle-free road journeys.
            </p>
          </div>

          {/* Philosophy Card + Image */}
          <div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Background Image */}
            <div className="relative">
              <Image
                src="/user/c2.jpg"
                alt="FASTag and challan services"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full h-76"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
