"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaChartLine,
  FaUserFriends,
  FaTools,
  FaLaptop,
  FaCog,
  FaSignInAlt,
  FaBook,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileOpen && !event.target.closest('nav')) {
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    {
      name: "Markets",
      icon: <FaChartLine />,
      submenu: [
        "All Product", 
        "Forex", 
        "Stocks", 
        "Crypto", 
        "Indices", 
        "Precious Metals", 
        "Commodities"
      ],
    },
    {
      name: "Trading",
      icon: <FaLaptop />,
      submenu: [
        "Account Types", 
        "Trading Conditions", 
        "Deposit Withdrawal", 
        "Trading Hours", 
        "Security", 
        "Regulation"
      ],
    },
    
   
    {
      name: "Partners",
      icon: <FaUserFriends />,
      link: "/partners",
    },
    { 
      name: "More", 
      icon: <FaCog />, 
      submenu: ["About Us", "Contact Us", "FAQ"] 
    },
  ];

  const handleMenuItemClick = (itemName) => {
    if (openMenu === itemName) {
      setOpenMenu(null);
    } else {
      setOpenMenu(itemName);
    }
  };

  return (
    <header className="w-full font-sans sticky top-0 bg-white shadow-md z-50 border-b border-gray-100">
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dknrega1a/image/upload/v1755514721/logo_qyvdl9.webp"
              alt="Qorva Markets Logo"
              width={150}
              height={50}
              className="rounded-md w-[120px] sm:w-[140px] md:w-[150px] h-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-1 font-medium text-gray-700">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() => !item.link && setOpenMenu(item.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.link ? (
                <Link 
                  href={item.link} 
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
                >
                  {item.icon} 
                  <span>{item.name}</span>
                </Link>
              ) : (
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 group">
                  {item.icon} 
                  <span>{item.name}</span>
                  {item.submenu && (
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${openMenu === item.name ? 'rotate-180' : ''}`} />
                  )}
                </button>
              )}

              {/* Desktop Dropdown */}
              {!item.link && item.submenu && openMenu === item.name && (
                <div className="absolute left-0 mt-1 bg-white shadow-xl rounded-xl border border-gray-100 p-2 w-56 z-30 animate-fadeIn">
                  <ul className="space-y-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem}>
                        <Link
                          href={`/${subItem.toLowerCase().replace(/\s+/g, '')}`}
                          className="block px-4 py-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-150"
                        >
                          {subItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
        

        {/* Right Buttons (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/login"
            className="border-2 border-orange-500 text-orange-600 px-5 py-2.5 rounded-lg flex items-center space-x-2 hover:bg-orange-50 transition-all duration-200 font-medium"
          >
            <FaSignInAlt className="text-sm" /> 
            <span>Login</span>
          </Link>
          <Link
            href="/register"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          >
            <FaChartLine className="text-sm" /> 
            <span>Start Trading</span>
          </Link>
        </div>

        {/* Hamburger Button (Mobile & Tablet) */}
        <button
          className="lg:hidden text-2xl text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[76px] bg-black bg-opacity-50 z-40">
          <div className="bg-white w-full max-h-[calc(100vh-76px)] overflow-y-auto shadow-2xl">
            <div className="p-6 space-y-4">
              <ul className="space-y-3 font-medium text-gray-700">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    {item.link ? (
                      <Link 
                        href={item.link}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all duration-200"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.icon} 
                        <span>{item.name}</span>
                      </Link>
                    ) : (
                      <details className="group">
                        <summary className="flex items-center justify-between p-3 cursor-pointer hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all duration-200 list-none">
                          <span className="flex items-center space-x-3">
                            {item.icon} 
                            <span>{item.name}</span>
                          </span>
                          <FaChevronDown className="text-xs transition-transform duration-200 group-open:rotate-180" />
                        </summary>

                        {/* Mobile Submenu */}
                        <div className="mt-2 ml-4 space-y-1">
                          {item.submenu?.map((subItem) => (
                            <Link
                              key={subItem}
                              href={`/${subItem.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                              className="block p-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-150"
                              onClick={() => setMobileOpen(false)}
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      </details>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Buttons */}
              <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                <Link
                  href="/login"
                  className="border-2 border-orange-500 text-orange-600 px-4 py-3 rounded-lg flex items-center space-x-2 justify-center hover:bg-orange-50 transition-all duration-200 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  <FaSignInAlt /> 
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg flex items-center space-x-2 justify-center hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  <FaChartLine /> 
                  <span>Start Trading</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        /* Custom scrollbar for mobile menu */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #ea580c;
          border-radius: 2px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #dc2626;
        }
      `}</style>
    </header>
  );
}