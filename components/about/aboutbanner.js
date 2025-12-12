"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHandshake, FaStar } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { BiUser } from "react-icons/bi";
import { FiMessageCircle } from "react-icons/fi";

export default function AboutHeroSection() {
  return (
    <section className="w-full bg-white py-12 md:py-15 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-5"
        >
          <p className="text-gray-500 font-medium">
            India’s most trusted FASTag & E-Challan services
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Instant <span className="text-[#fa9404] swing">FASTag</span> <br />
            & <span className="text-[#fa9404] backInLeft">E-Challan</span> Solutions
          </h1>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Recharge FASTag, check challan status, pay fines, and manage all your
            vehicle services in one trusted platform.
          </p>

          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00186b] hover:bg-[#fa9404] font-bold text-white px-6 py-2 rounded-full shadow-md transition-all duration-300"
            >
              Explore Services
            </motion.button>
          </Link>

          {/* Ratings Section */}
          <div className="flex items-center gap-3 pt-4">
            <span className="text-gray-700 font-medium">User Rating</span>
            <FaStar className="text-yellow-400 fill-yellow-400 w-5 h-5" />
            <span className="text-lg font-semibold text-gray-800">4.9</span>

            <div className="flex -space-x-2 ml-2">
              {[1, 2, 3, 4].map((_, i) => (
                <Image
                  key={i}
                  src="/user/user.jpg"
                  alt="User"
                  width={32}
                  height={40}
                  className="rounded-full w-10 h-10 border-2 border-white shadow-sm"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 relative"
        >
          <div className="relative w-[600px] h-[400px] rounded-2xl overflow-hidden group">

            <span className="absolute inset-0 rounded-2xl border-4 border-transparent bg-[conic-gradient(from_0deg,#fa9404_0%,transparent_100%)] animate-spin-slow group-hover:animate-spin-fast"></span>

            <div className="absolute inset-1 rounded-2xl overflow-hidden">
              <Image
                src="/image/bridge.jpg"
                alt="FASTag Services"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-5xl shadow-lg p-6 rounded-xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center mt-18 md:mt-16 gap-8"
      >
        {[
          { number: "5L+", label: "FASTag Recharges", icon: LuBuilding2 },
          { number: "2L+", label: "Challan Payments", icon: BiUser },
          { number: "500+", label: "Verified Partners", icon: FaHandshake },
          { number: "25K+", label: "Customer Reviews", icon: FiMessageCircle },
        ].map((stat, i) => (
          <div key={i} className="space-y-2 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black">{stat.number}</h3>
            <p className="text-black text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
