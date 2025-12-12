import Image from 'next/image';
import React from 'react'
import { FaBolt, FaRupeeSign, FaShieldAlt } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
export default function Whyus() {
    const features = [
  {
    icon: <MdDirectionsCar className="w-8 h-8 text-[#fa9404]" />,
    title: "ONE CLICK E‑CHALLAN CHECK",
    description:
      "Enter your vehicle number and instantly view all pending challans with offence details and due dates.",
  },
  {
    icon: <FaBolt className="w-8 h-8 text-[#fa9404]" />,
    title: "INSTANT FASTAG RECHARGE",
    description:
      "Recharge FASTag in seconds using UPI, cards or net‑banking with real‑time balance update at toll plazas.",
  },
  {
    icon: <FaRupeeSign className="w-8 h-8 text-[#fa9404]" />,
    title: "SECURE DIGITAL PAYMENTS",
    description:
      "Pay challans and FASTag top‑ups through an encrypted payment gateway with automatic receipt generation.",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-[#fa9404]" />,
    title: "24/7 COMPLIANCE SUPPORT",
    description:
      "Stay compliant on the road with alerts, reminders and a complete history of your payments and violations.",
  },
];
    return (
        <>
            <section className="py-10 max-w-6xl mx-auto">


                <div className="mt-5 grid grid-cols-1 md:grid-cols-2  items-center">


                    {/* Right Features */}
                    <div className="space-y-5">
{/* 
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-8 bg-[#fa9404] rounded-full"></div>
                            <span className="px-4 py-2 bg-[#00186b]/5 text-[#00186b] rounded-full text-sm font-semibold border border-[#00186b]/10">
                                our partners
                            </span>
                        </div> */}

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight pb">
                            Why choose <br />
                            <span className="text-[#00186b] ">us ? </span>
                        </h2>

                        <p className="mt-2  text-gray-600 max-w-2xl ">
                            We provide a professional renovation and installation service with a
                            real focus on customer satisfaction. Our installations are carried out
                            by fully trained staff to the highest professional standards.
                        </p>

                        {features.map((feature) => (
                            <div key={feature.title} className="flex items-start">
                                <div className="shrink-0">
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full border-2 border-[#fa9404]">
                                        {feature.icon}
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2  text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative">
                        <Image
                            className="w-full max-w-md ms-auto rounded-full border-l-8 border-t-8 border-[#fa9404] aspect-square  shadow-lg"
                            src="/Home/whyus.jpg"
                            width={300}
                            height={300}
                            alt="Construction team"
                        />
                        <div className="hidden md:block absolute left-1/4 -bottom-5 w-48">
                            <Image
                                className=" w-full max-w-lg mx-auto rounded-full aspect-square  border-r-8 border-b-8 border-[#fa9404] shadow-lg"
                                src="/Home/whyus2.jpg"
                                width={500}
                                height={500}
                                alt="Construction team"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
