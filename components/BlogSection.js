"use client";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

// 1) BLOGS DATA ARRAY
const blogsData = [
  {
    id: 1,
    image: "/image/blog1.jpg",
    alt: "FASTag Recharge and Toll Automation",
    title: "How FASTag is Revolutionizing Toll Payments Across Highways",
  },
  {
    id: 2,
    image: "/image/blog2.jpg",
    alt: "FASTag App Recharge Guide",
    title: "A Complete Guide to FASTag Recharge, Balance Check & Transaction Alerts",
  },
  {
    id: 3,
    image: "/user/car2.jpg",
    alt: "FASTag for Commercial Fleets",
    title: "Why FASTag is Essential for Fleet Owners: Savings, Tracking & Automation",
  },
];


export default function BlogsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
      
      {/* Title */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00186b] leading-snug">
          Check out our impressive and <br />
          <span className="text-[#fa9404]">Latest Blogs</span>
        </h2>
      </div>

      {/* Blogs Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.alt}
                width={600}
                height={400}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#00186b] group-hover:text-[#fa9404] transition">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
{/* <Link href="/blog" className="my-3 md:my-5 float-end ">
   <span> <FaArrowRight className="bg-[#00186b] rounded-full text-white w-10 h-10  p-2" /></span>
</Link> */}
    </section>
  );
}
