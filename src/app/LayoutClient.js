"use client";

import { usePathname } from "next/navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  // Hide footer on login and register pages
  const hideFooter = pathname.includes("/login") || pathname.includes("/register");

  return (
    <>
      {!hideFooter && <Header />}

      {children}
      {!hideFooter && <Footer />}
    </>
  );
}