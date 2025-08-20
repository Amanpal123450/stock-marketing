"use client";
import { Instagram, Twitter, MapPin, Mail, Phone, ShieldCheck, FileCheck2, Lock } from "lucide-react";
import Image from "next/image";
import { FaExclamationTriangle } from "react-icons/fa";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#0e1625] text-gray-300 p-6 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-orange-600 flex items-center justify-center rounded-md">
              <span className="text-white font-bold">Q</span>
            </div>
            <h2 className="text-lg font-bold text-white">Qorva Markets</h2>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Your trusted forex broker with competitive spreads, fast execution, and world-class trading platforms.
            Trade with power, trade with Qorva.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-white"><Instagram size={22} /></a>
            <a href="#" className="hover:text-white"><Twitter size={22} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">MT5 Platform</a></li>
            <li><a href="#" className="hover:text-white">Account Types</a></li>
            <li><a href="#" className="hover:text-white">Education</a></li>
            <li><a href="#" className="hover:text-white">Partner Program</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Legal Documents</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Risk Disclosure</a></li>
            <li><a href="#" className="hover:text-white">AML/KYC Policy</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="text-orange-500 mt-1" />
              <span>Office # 210 Al-Nasar Sports Club<br />Dubai, UAE</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-orange-500" />
              <span>info@qorvamarkets.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-orange-500" />
              <span>+971-50-8596-279<br />24/7 Support</span>
            </li>
          </ul>

          {/* Trust & Security */}
          <h4 className="text-white font-semibold mt-6 mb-3">Trust & Security</h4>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-2 bg-[#1a2233] px-3 py-1 rounded-md text-sm">
              <ShieldCheck size={16} /> SSL Secured
            </span>
            <span className="flex items-center gap-2 bg-[#1a2233] px-3 py-1 rounded-md text-sm">
              <FileCheck2 size={16} /> Licensed
            </span>
            <span className="flex items-center gap-2 bg-[#1a2233] px-3 py-1 rounded-md text-sm">
              <Lock size={16} /> Regulated
            </span>
          </div>
        </div>
      </div>

      <section className=" bg-gray-900 flex justify-center items-center py-12">
      <div className="bg-gray-800 text-gray-200 p-8 rounded-lg max-w-4xl shadow-lg space-y-6">
        
        {/* Header */}
        <div className="flex items-center gap-3">
          <FaExclamationTriangle className="text-yellow-400 text-2xl" />
          <h2 className="text-2xl font-semibold">Risk Disclaimer</h2>
        </div>
        <p className="text-lg font-medium text-gray-300">
          High Risk Investment Warning
        </p>

        {/* Investment Risk */}
        <p>
          <span className="font-semibold">Investment Risk: </span>
          An investment in derivatives may mean investors may lose an amount
          even greater than their original investment. Anyone wishing to invest
          in any of the products mentioned in www.qorvamarkets.com should seek
          their own financial or professional advice. Trading of securities,
          forex, stock market, commodities, options and futures may not be
          suitable for everyone and involves the risk of losing part or all of
          your money.
        </p>

        {/* Market Risk */}
        <p>
          <span className="font-semibold">Market Risk: </span>
          Trading in the financial markets has large potential rewards, but also
          large potential risk. You must be aware of the risks and be willing to
          accept them in order to invest in the markets. Don&apos;t invest and trade
          with money which you can&apos;t afford to lose. Forex Trading are not
          allowed in some countries, before investing your money, make sure
          whether your country is allowing this or not.
        </p>

        {/* Professional Advice */}
        <p>
          <span className="font-semibold">Professional Advice: </span>
          You are strongly advised to obtain independent financial, legal and
          tax advice before proceeding with any currency or spot metals trade.
          Nothing in this site should be read or construed as constituting
          advice on the part of Qorva Markets LTD or any of its affiliates,
          directors, officers or employees.
        </p>

        {/* Restricted Regions */}
        <div className="bg-gray-700 p-5 rounded-lg flex gap-3 items-start">
          <MdOutlineDoNotDisturbOn className="text-red-400 text-xl mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Restricted Regions</h3>
            <p className="text-sm text-gray-300">
              Qorva Markets LTD does not provide services for citizens/residents
              of the <span className="font-semibold">United States, Cuba, Iraq, Myanmar, North Korea, Sudan</span>. 
              The services of Qorva Markets LTD are not intended for distribution 
              to, or use by, any person in any country or jurisdiction where such 
              distribution or use would be contrary to local law or regulation.
            </p>
          </div>
        </div>
      </div>
    </section>

     {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Qorva Markets. All rights reserved.
      </div>

    </footer>
  );
}
