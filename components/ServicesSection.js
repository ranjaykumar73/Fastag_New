import Link from 'next/link';
import React from 'react'
import { FaCreditCard, FaBolt, FaRupeeSign } from "react-icons/fa";
import { MdDirectionsCar, MdSearch } from "react-icons/md";

export default function ServicesSection() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#f8fbff] to-[#f5f7fb] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-left mb-4 max-w-6xl mx-auto">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0060c9] mb-4">
              Services
            </p>
            {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0f172a] via-[#0060c9] to-[#ff6f00] bg-clip-text text-transparent leading-tight">
              Smart solutions for{" "}
              <span className="block">FASTag & e‑Challan</span>
            </h2> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight pb">
            Smart solutions for <br />
                            <span className="text-[#00186b] ">FASTag & e‑Challan </span>
                        </h2>
            <p className="mt-6 text-md md:text-md text-[#4b5563] max-w-3xl leading-relaxed">
              Instant recharges, challan tracking and secure payments. Designed for drivers who value time and convenience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* FASTag Recharge Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 border border-white/50">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl  transition-opacity duration-700 blur-xl -z-10" />
              
              <div className="relative p-8 lg:p-10">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#ff6f00] to-[#0060c9] rounded-2xl -rotate-12 opacity-20 group-hover:opacity-30 transition-opacity" />
                
                <div className="flex items-start gap-6 mb-6">
                  <div className="shrink-0 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#1a73e8] to-[#0060c9] rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <FaCreditCard className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-[#e8f1ff] to-[#d4eaff] text-sm font-semibold text-[#0060c9] shadow-lg">
                      <FaBolt className="w-4 h-4 animate-pulse" />
                      Instant Recharge
                    </span>
                    <h3 className="mt-4 text-2xl lg:text-3xl font-bold text-[#0f172a] leading-tight">
                      FASTag Recharge
                    </h3>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-[#4b5563] mb-8 max-w-md">
                  Recharge anywhere, anytime with UPI, cards or netbanking. 
                  Balance updates instantly across all toll plazas nationwide.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f0f9ff]/50 group-hover:bg-[#e0f2fe] transition-colors">
                    <div className="w-3 h-3 rounded-full bg-[#ff6f00] animate-ping" />
                    <span className="text-sm font-medium text-[#0f172a]">24/7 Available</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f0f9ff]/50 group-hover:bg-[#e0f2fe] transition-colors">
                    <FaRupeeSign className="w-4 h-4 text-[#ff6f00]" />
                    <span className="text-sm font-medium text-[#0f172a]">UPI/Cards/Netbanking</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#e5e7eb]/50">
                  <Link href={"/fastag"} className="w-full group/btn flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#ff6f00] to-[#d15805] text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200">
                    Recharge Now
                    <FaBolt className="w-5 h-5 group-hover:animate-pulse" />
                  </Link>
                </div>
              </div>
            </div>

            {/* e-Challan Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#013b70] via-[#0060c9] to-[#1a73e8] text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20 backdrop-blur-xl">
              {/* Floating elements */}
              <div className="absolute top-8 -right-12 w-32 h-32 bg-[#ff6f00]/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-white/10 rounded-2xl rotate-12" />

              <div className="relative p-8 lg:p-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="shrink-0 w-20 h-20 lg:w-24 lg:h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl ring-2 ring-white/30 group-hover:scale-110 transition-transform duration-300">
                    <MdDirectionsCar className="w-10 h-10 lg:w-12 lg:h-12" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/20 backdrop-blur-sm text-xs font-semibold shadow-lg">
                      <MdSearch className="w-4 h-4" />
                      Instant Check
                    </span>
                    <h3 className="mt-4 text-2xl lg:text-3xl font-bold leading-tight">
                      e-Challan Check & Pay
                    </h3>
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-white/90 mb-8 max-w-md">
                  Enter vehicle number to view all pending challans with offence details, 
                  amounts and secure payment options across all states.
                </p>

                {/* Quick stats preview */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-2xl lg:text-3xl font-bold text-[#ff6f00]">5s</div>
                    <div className="text-xs uppercase tracking-wide opacity-80">Check Time</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                    <div className="text-2xl lg:text-3xl font-bold text-[#a7f3d0]">₹0</div>
                    <div className="text-xs uppercase tracking-wide opacity-80">Extra Fee</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20">
                  <Link href={"/echallan"} className="w-full group/btn flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200">
                    Check Challan
                    <MdSearch className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}