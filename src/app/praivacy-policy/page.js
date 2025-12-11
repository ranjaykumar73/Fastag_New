"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaShieldAlt,
  FaFolderOpen,
  FaLaptopCode,
  FaCookie,
  FaUserShield,
  FaInfoCircle,
} from "react-icons/fa";

const privacySections = [
  {
    id: "data-security",
    title: "Data Security",
    icon: FaShieldAlt,
    content:
      "Fastpaysave, a service by Finunique Small Pvt. Ltd., secures your FASTag, vehicle, e‑Challan, and wallet information using encryption, firewalled servers, and strict access controls. Payment credentials such as card or UPI details are processed only by certified payment gateways and are never stored in plain text on our systems. Security logs and monitoring help us detect and prevent unauthorized access.",
  },
  {
    id: "data-collection",
    title: "Data We Collect",
    icon: FaFolderOpen,
    content:
      "We collect basic profile and contact details, vehicle and FASTag information, limited transaction metadata, and technical data like device identifiers and usage analytics. This information allows us to fetch challan records from official portals, process toll and fine payments, send alerts, and keep your Fastpaysave account up to date.",
  },
  {
    id: "data-usage",
    title: "How We Use Your Data",
    icon: FaLaptopCode,
    content:
      "Your data is used to provide and improve Fastpaysave features such as FASTag recharge, e‑Challan search and payment, wallet top‑ups, reminders, and support. We may share necessary details with banks, NPCI, and state traffic departments solely to complete transactions or comply with legal requirements. Aggregated and anonymised data may be used to analyse platform performance and prevent fraud.",
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    icon: FaCookie,
    content:
      "Fastpaysave uses cookies and similar technologies to keep you logged in, remember your preferences, and measure how the website or app is used. Some cookies are essential for security and payment flows, while others help us improve the interface. You can control non‑essential cookies through your browser settings, but blocking them may affect certain features.",
  },
  {
    id: "user-rights",
    title: "Your Privacy Rights",
    icon: FaUserShield,
    content:
      "You can review and update your profile details, request correction of inaccurate information, and in many cases ask for deletion of data that is not required to be retained by law or for dispute resolution. You may also contact our support team if you want to know what data is stored about your Fastpaysave account or to withdraw certain consents, subject to regulatory obligations.",
  },
];

export default function Privacy() {
  const [activeSection, setActiveSection] = useState("data-security");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>
      <div className="bg-[#F4FCFF] rounded-2xl shadow-lg">
        <div className="mx-auto px-4 py-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                  <FaInfoCircle className="mr-2 text-[#0060C9]" />
                  Contents
                </h3>

                <ul className="space-y-2">
                  {privacySections.map((s, i) => (
                    <li key={i}>
                      <button
                        onClick={() => scrollToSection(s.id)}
                        className={`w-full flex items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                          activeSection === s.id
                            ? "bg-[#0060C9]/10 text-[#0060C9] font-semibold"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <s.icon
                          className={`w-4 h-4 mr-2 ${
                            activeSection === s.id
                              ? "text-[#0060C9]"
                              : "text-gray-500"
                          }`}
                        />
                        {s.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:w-3/4">
              <div className="bg-white p-8 rounded-2xl shadow mb-8">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#0060C9] to-[#FF6F00] flex items-center justify-center">
                    <FaShieldAlt className="text-white text-3xl" />
                  </div>

                  <div className="inline-block bg-gradient-to-r from-[#FF6F00] to-[#0060C9] text-white font-medium px-8 py-2 rounded-full mt-6 shadow">
                    Fastpaysave Privacy Policy
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-6 mb-4">
                    We protect your FASTag & e‑Challan data with care
                  </h1>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    Fastpaysave by Finunique Small Pvt. Ltd. collects only the
                    information needed to run FASTag recharges, wallet
                    top‑ups, and e‑Challan services, and keeps it safe using
                    modern security practices and regulatory compliance. [web:1]
                  </p>
                </div>
              </div>

              {/* Sections */}
              {privacySections.map((s, i) => (
                <div
                  key={i}
                  id={s.id}
                  ref={(el) => (sectionRefs.current[i] = el)}
                  className="bg-white p-8 rounded-2xl shadow hover:shadow-md transition mb-6"
                >
                  <div className="flex items-start mb-4">
                    <div className="text-2xl mr-4 bg-gradient-to-br from-[#0060C9] to-[#FF6F00] text-white p-3 rounded-lg">
                      <s.icon />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {s.title}
                    </h3>
                  </div>

                  <div className="h-px bg-gray-300 my-4" />

                  <p className="text-gray-600 leading-relaxed">{s.content}</p>
                </div>
              ))}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
