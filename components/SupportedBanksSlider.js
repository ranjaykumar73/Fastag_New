"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partners = [
    { name: "Paytm FASTag" },
    { name: "ICICI FASTag" },
    { name: "Axis Bank FASTag" },
    { name: "HDFC FASTag" },
    { name: "Airtel Payments Bank" },
    { name: "NPCI" },
    { name: "State Traffic Police" },
];
export default function SupportedBanksSlider() {
    return (
        <>
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-4 mb-8">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#0060c9]">
                                Supported Banks & Agencies
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mt-1">
                                Trusted by leading payment partners
                            </h2>
                        </div>
                        <p className="hidden md:block max-w-sm text-sm text-[#4b5563]">
                            FASTag recharge and e‑Challan payments powered by India’s most
                            reliable banks and government agencies.
                        </p>
                    </div>

                    {/* Slider */}
                    <div className="rounded-3xl px-4 py-6">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 0, disableOnInteraction: false }}
                            speed={3500}
                            loop
                            slidesPerView={2}
                            breakpoints={{
                                640: { slidesPerView: 3 },
                                768: { slidesPerView: 4 },
                                1024: { slidesPerView: 6 },
                            }}
                            spaceBetween={24}
                            className="!py-2"
                        >
                            {partners.map((item) => (
                                <SwiperSlide key={item.name}>
                                    <div className="group h-20 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-[#e5e7eb] hover:border-[#1a73e8] hover:shadow-md transition-all duration-300">
                                        {/* Replace this block with actual logo <Image /> components */}
                                        <span className="text-[11px] md:text-xs font-semibold tracking-wide text-[#4b5563] group-hover:text-[#1a73e8]">
                                            {item.name}
                                        </span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                </section>

        </>
    )
}
