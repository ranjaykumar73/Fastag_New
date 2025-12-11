"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaCreditCard, FaRupeeSign, FaBolt } from "react-icons/fa";
import { MdDirectionsCar, MdSearch } from "react-icons/md";
const slides = [
    {
        image: "/Home/hero.jpg",
        title: (
            <>
                Drive smart, skip the queue <span className="text-[#ff6f00]">FASTag & e‑Challan</span> in one click.{" "}
            </>
        ),
        subtitle:
            "Automate salaries, compliance, and payouts in one secure platform designed for growing businesses.",
    },
    {
        image: "/Home/HomeBanner.jpg",
        title: (
            <>
                Enter your vehicle number <span className="text-[#ff6f00]">pay tolls and challans</span>  the smart way.
            </>
        ),
        subtitle: "Cut down manual work and ensure every payout is on time.",
    },
    {
        image: "/Home/HomeBanner2.webp",
        title: (
            <>
                Tap, check, pay <span className="text-[#ff6f00]">FASTag balance and e‑Challan</span> in seconds.
            </>
        ),
        subtitle: "Keep up with regulations without extra effort.",
    },
];

export default function Homepage() {
    const [index, setIndex] = useState(0);
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [activeTab, setActiveTab] = useState('echallan');
    const [fastagNumber, setFastagNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSearching(true);
        // Simulate API call
        setTimeout(() => {
            setIsSearching(false);
            onSubmit({ type: activeTab, [activeTab === 'echallan' ? 'vehicleNumber' : 'fastagNumber']: activeTab === 'echallan' ? vehicleNumber : fastagNumber });
        }, 2000);
    };

    useEffect(() => {
        const id = setInterval(
            () => setIndex((prev) => (prev + 1) % slides.length),
            5000
        );
        return () => clearInterval(id);
    }, []);

    // tabs



    return (
        <section className="relative md:-mt-32 -mt-20 h-[90vh] md:h-[92vh] w-full overflow-hidden bg-slate-800 text-white">

            {/* background slides */}
            <div className="absolute inset-0">
                {slides.map((slide, i) => (
                    <div
                        key={slide.image}
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* content */}
            <div className="relative z-10 mt-20 gap-20 flex h-full items-center px-6 sm:px-10 md:px-16">
                <div className="max-w-xl sm:max-w-2xl">
                    <div key={index} className="animate-slideUpFade">

                        <p className="mb-2 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-widest text-white">
                            Your Fastag, our precision
                        </p>

                        {/* Responsive Heading */}
                        <h1 className="mb-6 sm:mb-10 text-[30px] leading-[1.2] sm:text-[42px] md:text-[50px] font-bold">
                            {slides[index].title}
                        </h1>

                        {/* Subtitle */}
                        <p className="mb-6 sm:mb-8 text-sm sm:text-base text-slate-100 max-w-lg">
                            Fast, secure, and reliable services
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row  gap-4 sm:gap-5">
                            <Link
                                href="/contact"
                                className="rounded-md border w-fit border-slate-200 px-6 py-3 text-sm transition hover:border-[#ff6f00] hover:text-[#ff6f00] text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-white/80 backdrop-blur-xl p-6 lg:p-8 rounded-3xl shadow-2xl border border-white/50">
                    <div className="max-w-md mx-auto">
                        <div className="flex bg-gray-100/50 rounded-2xl p-1 mb-6 shadow-lg">
                            <button
                                onClick={() => setActiveTab('echallan')}
                                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'echallan'
                                    ? 'bg-gradient-to-r from-[#0060c9] to-[#1a73e8] text-white shadow-xl shadow-blue-500/25 scale-[1.02]'
                                    : 'text-gray-600 hover:text-[#0060c9] hover:scale-[1.01]'
                                    }`}
                            >
                                <MdDirectionsCar className="w-5 h-5" />
                                e-Challan
                            </button>
                            <button
                                onClick={() => setActiveTab('fastag')}
                                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'fastag'
                                    ? 'bg-gradient-to-r from-[#ff6f00] to-[#d15805] text-white shadow-xl shadow-orange-500/25 scale-[1.02]'
                                    : 'text-gray-600 hover:text-[#ff6f00] hover:scale-[1.01]'
                                    }`}
                            >
                                <FaCreditCard className="w-5 h-5" />
                                FASTag
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {activeTab === 'echallan' && (
                                <div>
                                    <label htmlFor="vehicleNo" className="block text-xs font-semibold text-gray-700 mb-3 uppercase tracking-widest">
                                        Vehicle Registration Number
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                            <MdDirectionsCar className="w-5 h-5 text-gray-400" />
                                        </div>
                                        <input
                                            id="vehicleNo"
                                            type="text"
                                            placeholder="MH01AB1234"
                                            value={vehicleNumber}
                                            onChange={(e) => setVehicleNumber(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                                            minLength="8"
                                            required
                                            className="w-full pl-12 pr-4 py-4 border-2 text-black border-gray-200 rounded-2xl text-lg uppercase font-mono tracking-widest bg-gradient-to-r from-slate-50 to-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                        Real-time data from traffic authorities
                                    </p>
                                </div>
                            )}

                            {activeTab === 'fastag' && (
                                <div>
                                    <label htmlFor="fastagNo" className="block text-xs font-semibold text-gray-700 mb-3 uppercase tracking-widest">
                                        FASTag ID / Wallet Number
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                                            <FaBolt className="w-3 h-3" />
                                        </div>
                                        <input
                                            id="fastagNo"
                                            type="text"
                                            placeholder="FASTAG1234567890"
                                            onChange={(e) => setFastagNumber(e.target.value.replace(/[^A-Z0-9]/g, '').toUpperCase())}
                                            minLength="10"
                                            required
                                            className="w-full pl-12 pr-4 py-4 border-2 text-black border-gray-200 rounded-2xl text-lg uppercase font-mono tracking-widest bg-gradient-to-r from-orange-50/50 to-white focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-3 text-xs text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <FaRupeeSign className="w-3 h-3 text-orange-500" />
                                            <span>Min ₹100 recharge</span>
                                        </div>
                                        <div className="flex items-center gap-1 justify-end">
                                            <FaBolt className="w-3 h-3 text-green-500" />
                                            <span>Instant activation</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 data-[tab=fastag]:from-orange-500 data-[tab=fastag]:to-orange-600 hover:from-blue-700 hover:to-blue-800 data-[tab=fastag]:hover:from-orange-600 data-[tab=fastag]:hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/30 data-[tab=fastag]:focus:ring-orange-500/30"
                                data-tab={activeTab}
                            >
                                <div className="relative flex items-center justify-center gap-3">
                                    {isSearching ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            <span className="font-medium">Processing...</span>
                                        </>
                                    ) : activeTab === 'echallan' ? (
                                        <>
                                            <MdSearch className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            Check Challan Status
                                        </>
                                    ) : (
                                        <>
                                            <FaBolt className="w-5 h-5 animate-pulse" />
                                            Recharge FASTag
                                        </>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            </button>

                            <p className="text-xs text-center text-gray-500 pt-4 opacity-75">
                                🔒 Secure • Powered by Finunique Small Private Limited
                            </p>
                        </form>
                    </div>
                </div> */}
            </div>

            {/* Indicators */}
            <div className="absolute right-4 sm:right-6 top-1/2 z-10 -translate-y-1/2 flex flex-col items-center gap-3 sm:gap-4">
                {slides.map((_, i) => {
                    const active = i === index;
                    return (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={
                                active
                                    ? "flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-slate-800/90 text-white text-sm sm:text-base shadow-lg"
                                    : "text-white/80 text-xs sm:text-sm"
                            }
                        >
                            {String(i + 1).padStart(2, "0")}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}