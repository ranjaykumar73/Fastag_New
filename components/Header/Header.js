"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoWalletOutline, IoMenu, IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";
import { useUser } from "@/app/user-profile/context";
import axiosInstance from "../axiosInstance";

export default function Header() {
  const { user } = useUser();
  console.log(user)
  const [open, setOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("upi");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [userr, setuser] = useState(null);
  const [email, setemail] = useState("")
  const [userid, setuserid] = useState("")
  const [walletBalance, setwalletBalance] = useState(0)

  const pathname = usePathname();

  useEffect(() => {
    const userexist = user
    const token = localStorage.getItem("token");

    setToken(token);

    if (user) {
      setuser(user);
      setemail(user.email || "");
      setuserid(user._id || user.id || "");
      setwalletBalance(user?.wallet?.balance || 0);
    }
  }, [user?.email,token]);

  const handleAddFunds = async (e) => {
    e.preventDefault();

    // ✅ Validate amount
    // if (!amount || Number(amount) < 100) {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "Minimum Amount ₹100",
    //     text: "Please enter an amount of ₹100 or more.",
    //   });
    //   return;
    // }

    // ✅ Check token


    if (!token) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to continue.",
        confirmButtonText: "Go to Login",
      }).then(() => {
        window.location.href = "/login";
      });
      return;
    }

    try {
      setLoading(true);

      const payload = {
        email: email,
        amount: Number(amount),
        userId: userid
      };

      const res = await axiosInstance.post("/topup/wallet", payload);

      console.log(res)
      const { data } = await res;
      // console.log(data)

      if (!data.success) {
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: data.message || "Unable to start payment process.",
        });
        return;
      }

      Swal.fire({
        icon: "info",
        title: "Redirecting...",
        text: "Please wait, redirecting to payment gateway.",
        timer: 2000,
        showConfirmButton: false,
      });

      if (data?.ress?.data?.redirectURL) {
        window.location.href = data?.ress?.data?.redirectURL;
      }

      setShowAddFunds(false);
      setAmount("");

    } catch (err) {
      console.error("Topup Error:", err);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Unable to process payment right now.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50
        bg-[#001c38]
        bg-linear-to-r from-white/10 via-white/5 to-white/10
        backdrop-blur-2xl
        border-b border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
      >
        <div className="container mx-auto px-24 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-[#fdc700] to-yellow-500 bg-clip-text text-transparent"
            >
              <Image src={"/fastpaysave.png"} alt="fastpaysave" width={100} height={100} className="" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-[#fdc700] transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#fdc700] transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="/fastag"
                className="text-white hover:text-[#fdc700] transition-colors font-medium"
              >
                Fastag
              </Link>
              <Link
                href="/echallan"
                className="text-white hover:text-[#fdc700] transition-colors font-medium"
              >
                E-Challan
              </Link>
              {token &&
                <Link
                  href="/user-profile"
                  className="text-white hover:text-[#fdc700] transition-colors font-medium"
                >
                  Profile
                </Link>
              }
              {
                !token && (
                  <>
                    <Link
                      href="/login"
                      className="text-white hover:text-[#fdc700] transition-colors font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="text-white hover:text-[#fdc700] transition-colors font-medium"
                    >
                      Register
                    </Link>
                  </>
                )
              }
            </div>

            {/* Wallet + Mobile button */}
            {
              token &&
              <div className="flex items-center gap-3">
                {/* Wallet Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setWalletOpen((v) => !v)}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all group"
                  >
                    <IoWalletOutline className="text-[#fdc700]" />
                    <span className="font-semibold">{walletBalance}</span>
                  </button>

                  {walletOpen && (
                    <div className="absolute top-full right-0 mt-2 w-64 backdrop-blur-xl bg-white/70 border border-white/20 rounded-3xl p-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
                      <h3 className="text-black font-bold mb-4 border-b border-white/20 pb-2">
                        Wallet
                      </h3>
                      <div className="space-y-2 text-sm">
                        <button
                          onClick={() => {
                            setShowAddFunds(true);
                            setWalletOpen(false);
                          }}
                          className="w-full text-left text-black cursor-pointer hover:text-[#fdc700] p-2 rounded-xl hover:bg-white/10 transition-all"
                        >
                          Add Funds
                        </button>
                        {/* <Link
                          href="/profile#transactions"
                          className="block text-black cursor-pointer hover:text-[#fdc700] p-2 rounded-xl hover:bg-white/10 transition-all"
                          onClick={() => setWalletOpen(false)}
                        >
                          Transaction History
                        </Link> */}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="md:hidden p-2 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                >
                  {open ? <IoClose size={24} /> : <IoMenu size={24} />}
                </button>
              </div>
            }
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden mt-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 animate-in slide-in-from-top-4 duration-200">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-white/90 hover:text-[#fdc700] font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white/90 hover:text-[#fdc700] font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/fastag"
                  className="text-white/90 hover:text-[#fdc700] font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  Fastag
                </Link>
                <Link
                  href="/echallan"
                  className="text-white/90 hover:text-[#fdc700] font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  E-Challan
                </Link>
                <Link
                  href="/profile"
                  className="text-white/90 hover:text-[#fdc700] font-medium py-2"
                  onClick={() => setOpen(false)}
                >
                  Profile
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20 md:h-24" />

      {/* Add Funds Modal */}
      {showAddFunds && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-[#021631] border border-white/10 shadow-2xl p-6 relative">
            <button
              onClick={() => setShowAddFunds(false)}
              className="absolute top-3 right-3 text-white/60 hover:text-white"
            >
              <IoClose size={22} />
            </button>

            <h2 className="text-xl font-semibold text-white mb-1">
              Add Wallet Funds
            </h2>
            <p className="text-xs text-white/60 mb-4">
              Recharge your Fastpaysave wallet to pay FASTag tolls and
              e‑Challans instantly.
            </p>

            <form
              className="space-y-4"
              onSubmit={handleAddFunds}
            >
              <div>
                <label className="block text-xs text-white/70 mb-1">
                  Amount (₹)
                </label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!/^\d*$/.test(val)) return;
                    if (val.length > 6) return;
                    setAmount(val);
                  }}
                  placeholder="Enter Amount"
                  className="w-full rounded-2xl bg-white/5 border border-white/15 px-3 py-2 
             text-sm text-white placeholder:text-white/40 
             focus:outline-none focus:ring-2 focus:ring-[#fdc700]"
                />

              </div>

              <div>
                <label className="block text-xs text-white/70 mb-1">
                  Payment Method
                </label>
                <select
                  className="w-full rounded-2xl bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#fdc700]"
                  defaultValue="upi"
                >
                  <option value="upi" className="bg-[#021631]">
                    UPI
                  </option>
                  <option value="card" className="bg-[#021631]">
                    Debit / Credit Card
                  </option>
                  <option value="netbanking" className="bg-[#021631]">
                    Net Banking
                  </option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 rounded-2xl bg-gradient-to-r from-[#fdc700] to-orange-400 text-[#111827] text-sm font-semibold py-2.5 hover:brightness-105 transition-colors"
              >
                {
                  loading ? "Adding..." :
                    "Add Funds"
                }
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
