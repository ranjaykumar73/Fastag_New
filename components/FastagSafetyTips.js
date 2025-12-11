import { FaShieldAlt, FaCarSide, FaWifi, FaIdCard } from "react-icons/fa";

const tips = [
  {
    icon: <FaShieldAlt size={30} />,
    title: "Keep Your FASTag Secure",
    desc: "Never share your FASTag linked mobile number or wallet credentials with anyone."
  },
  {
    icon: <FaCarSide size={30} />,
    title: "Check Toll Balance Regularly",
    desc: "Maintain enough balance to avoid inconvenience at toll plazas."
  },
  {
    icon: <FaWifi size={30} />,
    title: "Avoid Scratching the Tag",
    desc: "Ensure FASTag is placed properly on the windshield for accurate scanning."
  },
  {
    icon: <FaIdCard size={30} />,
    title: "Report Lost FASTag Immediately",
    desc: "Block your FASTag if your vehicle or tag gets lost or stolen."
  },
];

export default function SafetyTips() {
  return (
    <section className="py-14 mb-6 bg-linear-to-b from-[#00186b]/30 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#003b7a]">
          FASTag Safety Tips
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mt-2">
          Follow these simple precautions for secure and smooth toll payments.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((t) => (
            <div
              key={t.title}
              className="
              p-6 bg-white/70 rounded-2xl shadow-lg border border-blue-100 
              hover:-translate-y-2 duration-300 hover:shadow-2xl
              backdrop-blur-xl
            "
            >
              <div className="text-[#ff7e00] mb-4">{t.icon}</div>
              <h3 className="font-semibold text-lg text-[#003b7a]">{t.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
