import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
         <footer className="bg-gray-900 text-white py-16 px-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-2xl font-bold">FastTag E-Challan</span>
              </div>
              <p className="text-gray-400 mb-6">India's leading platform for FASTag recharge and e-challan payments.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/fastag" className="hover:text-white transition-colors">FASTag</Link></li>
                <li><Link href="/echallan" className="hover:text-white transition-colors">E-Challan</Link></li>
                {/* <li><Link href="/profile" className="hover:text-white transition-colors">Profile</Link></li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><Link href="/register" className="hover:text-white transition-colors">Register</Link></li>
                <li><Link href="/praivacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <p>support@7unique.in</p>
                <p>0141-4511098</p>
                <p>Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur, Rajasthan, India - 302017</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Powered by Finunique Small Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
            
        </>
    )
}
