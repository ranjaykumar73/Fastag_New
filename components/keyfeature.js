"use client";

import Image from "next/image";

const keyFeatures = [
  { title: "Instant FASTag Recharge", img: "/Home/recharge.png" },
  { title: "e‑Challan Check & Pay", img: "/Home/challan.png" },
  { title: "Secure UPI Payments", img: "/Home/upi.png" },
  { title: "Real‑time Updates", img: "/Home/realtime.png" },
  { title: "24/7 Vehicle Support", img: "/Home/support.png" },
];

export default function WalletKeyFeatures() {
  return (
    <section className="md:py-10 py-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          <span className="text-[#09343D]">Key</span>{" "}
          <span className="text-[#ff6f00]">Features</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {keyFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-[2px_4px_22.5px_0px_#00000026] rounded-md p-6 text-center hover:shadow-lg transition flex flex-col items-center justify-center"
            >
              <h4 className="text-sm font-semibold text-[#09343D]">
                {feature.title}
              </h4>
              <div className="mt-3 flex items-center justify-center">
                <Image
                  src={feature.img}
                  alt={feature.title}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
