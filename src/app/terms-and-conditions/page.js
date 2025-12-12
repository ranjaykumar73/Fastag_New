"use client";

import { useState, useRef, useEffect } from "react";
import {
  FaShieldAlt,
  FaUser,
  FaBalanceScale,
  FaBullhorn,
  FaClipboardList,
  FaFileAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const termsSections = [
  {
    id: "data-security",
    title: "Data Security",
    icon: FaShieldAlt,
    content:
      "Fastpaysave, operated by Finunique Small Pvt. Ltd., uses encryption and secure infrastructure to protect your FASTag, vehicle, e‑Challan, and wallet information. Payment credentials such as card numbers and UPI PINs are processed only by certified payment gateways and are never stored in plain text on our systems. Your data is used solely to provide services like FASTag recharge, challan lookup, and digital payments, and is shared with banks, NPCI, and state transport or traffic departments only when required to complete a transaction or comply with the law.",
  },
  {
    id: "user-responsibility",
    title: "User Responsibility",
    icon: FaUser,
    content:
      "By using Fastpaysave, you confirm that all details you provide, including your name, mobile number, vehicle registration number, and identification documents, are true and accurate. You are responsible for maintaining the confidentiality of your OTPs, passwords, and device access and for all activities that occur under your account. You agree not to misuse the platform, attempt to alter challan records, initiate fraudulent chargebacks, or interfere with FASTag or payment systems; Finunique Small Pvt. Ltd. may suspend or terminate accounts and, where applicable, report suspicious activity to authorities.",
  },
  {
    id: "limitations",
    title: "Limitations of Liability",
    icon: FaBalanceScale,
    content:
      "Fastpaysave aggregates challan and FASTag information from external systems such as issuing banks, NPCI, and state traffic or transport portals, which remain the official sources of record. Finunique Small Pvt. Ltd. is not responsible for errors, delays, or omissions in data received from these external systems, nor for network issues, gateway failures, or other events beyond our reasonable control. To the maximum extent permitted by law, our total liability for any claim related to the use of Fastpaysave is limited to the service fee or platform charge, if any, paid by you for the transaction giving rise to that claim.",
  },
  {
    id: "policy-changes",
    title: "Policy & Terms Changes",
    icon: FaBullhorn,
    content:
      "Finunique Small Pvt. Ltd. may update these Terms of Use and the associated Privacy Policy for Fastpaysave to reflect changes in law, banking and NPCI rules, FASTag norms, or e‑Challan procedures. When changes are significant, we will inform you through website or app notifications, email, or SMS sent to your registered contact details. By continuing to use Fastpaysave services such as FASTag recharge, wallet top‑up, or e‑Challan payment after such updates take effect, you are deemed to have read, understood, and accepted the revised terms.",
  },
];

const faqItems = [
  {
    q: "Does Fastpaysave share my FASTag or vehicle data with others?",
    a: "Fastpaysave shares your FASTag, vehicle, and challan data only with trusted parties directly involved in processing your transactions, such as issuing banks, payment gateways, NPCI, and relevant state transport or traffic departments. We do not sell your personal data to advertisers or unrelated third parties, and any sharing is strictly limited to what is necessary for compliance and service delivery.",
  },
  {
    q: "What happens if I violate Fastpaysave’s terms of use?",
    a: "If you violate these terms—for example by providing false information, attempting fraud, misusing offers, or trying to tamper with transaction records—Finunique Small Pvt. Ltd. may restrict features, temporarily suspend, or permanently close your Fastpaysave account. In serious cases, we may also cooperate with banks, NPCI, or law‑enforcement agencies and share relevant logs or evidence as required.",
  },
  {
    q: "Are my online payments on Fastpaysave secure?",
    a: "Payments made through Fastpaysave are routed via secure, industry‑standard payment gateways that use encryption and strong authentication. Card, net‑banking, and UPI credentials are entered on secure payment pages controlled by the gateway or your bank and are not stored by Finunique Small Pvt. Ltd. beyond limited tokens or references needed to identify a transaction.",
  },
  {
    q: "How will I know if Finunique Small Pvt. Ltd. updates these terms?",
    a: "Whenever there is a major update to the Terms of Use or Privacy Policy, Fastpaysave will display a notice on the website or app and may also send you an email, SMS, or in‑app message summarising the key changes. You may be asked to review the updated document, and your continued use of Fastpaysave after that point will mean you agree to the new version.",
  },
  {
    q: "Who should I contact if I have questions about my data or these terms?",
    a: "If you have any questions, concerns, or requests related to your data, FASTag or e‑Challan transactions, or these terms, you can reach out using the Help or Contact section in the Fastpaysave app or website. Our support team at Finunique Small Pvt. Ltd. will review your request and respond within a reasonable timeframe, subject to verification of your identity.",
  },
];

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState("data-security");
const sectionRefs = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <section className="bg-[#F4FCFF] rounded-2xl shadow-lg">
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* TOC */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FaClipboardList className="w-5 h-5 mr-2 text-[#0060C9]" />
                Policy Sections
              </h3>
              <ul className="space-y-2">
                {termsSections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left py-2 px-3 rounded-lg transition-all duration-200 flex items-center cursor-pointer ${
                          activeSection === section.id
                            ? "bg-[#0060C9]/10 text-[#0060C9] font-semibold"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 mr-2 ${
                            activeSection === section.id
                              ? "text-[#0060C9]"
                              : "text-gray-500"
                          }`}
                        />
                        {section.title}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:w-3/4">
            {/* Intro card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
              <div className="text-center mb-10">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-linear-to-br from-[#0060C9] to-[#FF6F00] rounded-full flex items-center justify-center">
                    <FaFileAlt className="text-white text-3xl" />
                  </div>
                </div>
                <div className="inline-block bg-linear-to-r from-[#FF6F00] to-[#0060C9] text-white font-medium px-8 py-2 rounded-full mb-4 shadow-md">
                  Fastpaysave Terms of Use
                </div>
                <h1 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6 mt-4">
                  By using Fastpaysave, you agree to the terms set by Finunique
                  Small Pvt. Ltd. for FASTag and e‑Challan services.
                </h1>
                <div className="h-1 w-20 bg-linear-to-r from-[#FF6F00] to-[#0060C9] mx-auto mb-6 rounded-full" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  These terms explain how Fastpaysave manages your FASTag
                  recharges, e‑Challan lookups and payments, wallet balance, and
                  related services, and how your information is protected while
                  you interact with the platform. [web:1]
                </p>
              </div>
            </div>

            {/* Individual sections */}
            {termsSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  id={section.id}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="bg-white p-8 rounded-2xl shadow-sm mb-6 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start mb-4">
                    <div className="text-2xl mr-4 bg-linear-to-br from-[#0060C9] to-[#FF6F00] text-white p-2 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {section.title}
                    </h3>
                  </div>
                  <div className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent my-4" />
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              );
            })}

            {/* FAQ */}
            <div className="bg-white p-8 max-w-6xl rounded-2xl shadow-sm mt-10">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FaQuestionCircle className="w-5 h-5 mr-2 text-[#0060C9]" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h4 className="font-medium text-gray-800 mb-2">
                      {item.q}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
