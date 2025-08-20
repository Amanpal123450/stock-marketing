"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  FaChartLine,
  FaUserFriends,
  FaLaptop,
  FaCog,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);   // which dropdown is open
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu open/close
  const headerRef = useRef(null); // ✅ wrap header + mobile menu for outside-click

  // ✅ Close mobile menu when clicking outside the HEADER (includes nav + mobile menu)
  useEffect(() => {
    const handleOutside = (event) => {
      if (
        mobileOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [mobileOpen]);

  // ✅ Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        "Commodities",
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
        "Regulation",
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
      submenu: ["About Us", "Contact Us", "FAQ"],
    },
  ];

  const handleMenuItemClick = (itemName) => {
    setOpenMenu((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <header
      ref={headerRef}
      className="w-full font-sans sticky top-0 bg-white shadow-md z-50 border-b border-gray-100"
    >
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
                <button
                  type="button"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:text-orange-600 hover:bg-orange-50 transition-all duration-200 group"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.submenu && (
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        openMenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
              )}

              {/* Desktop Dropdown (hover) */}
              {!item.link && item.submenu && openMenu === item.name && (
                <div className="absolute left-0 mt-1 bg-white shadow-xl rounded-xl border border-gray-100 p-2 w-56 z-30 animate-fadeIn">
                  <ul className="space-y-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem}>
                        <Link
                          href={`/${subItem.toLowerCase().replace(/\s+/g, "")}`}
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
          type="button"
          className="lg:hidden text-2xl text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={() => {
            setMobileOpen((s) => !s);
            setOpenMenu(null);
          }}
          aria-expanded={mobileOpen}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* ✅ Mobile Menu (inside the same header) */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-100 animate-slideDown">
          <ul className="flex flex-col p-4 space-y-2 overflow-y-auto max-h-[70vh]">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.link ? (
                  <Link
                    href={item.link}
                    className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
                    onClick={() => {
                      setMobileOpen(false);
                      setOpenMenu(null);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => handleMenuItemClick(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
                      aria-expanded={openMenu === item.name}
                    >
                      <div className="flex items-center space-x-2">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      {item.submenu && (
                        <FaChevronDown
                          className={`transition-transform duration-200 ${
                            openMenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {/* ✅ Mobile Submenu (click se toggle) */}
                    {item.submenu && openMenu === item.name && (
                      <ul className="pl-10 pr-4 py-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem}>
                            <Link
                              href={`/${subItem
                                .toLowerCase()
                                .replace(/\s+/g, "")}`}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-150"
                              onClick={() => {
                                setMobileOpen(false);
                                setOpenMenu(null);
                              }}
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}

            {/* Buttons (Mobile) */}
            <li className="pt-4 border-t border-gray-200 flex flex-col gap-2">
              <Link
                href="/login"
                className="border-2 border-orange-500 text-orange-600 px-5 py-2.5 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-50 transition-all duration-200 font-medium"
                onClick={() => {
                  setMobileOpen(false);
                  setOpenMenu(null);
                }}
              >
                <FaSignInAlt className="text-sm" />
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-lg flex items-center justify-center space-x-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                onClick={() => {
                  setMobileOpen(false);
                  setOpenMenu(null);
                }}
              >
                <FaChartLine className="text-sm" />
                <span>Start Trading</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Animations */}
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
      `}</style>
    </header>
  );
}
