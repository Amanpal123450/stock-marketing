"use client";

import { useState } from "react";
import { MdPersonOutline, MdExpandMore, MdExpandLess } from "react-icons/md";

const faqData = [
  {
    sectionTitle: "Account Related",
    icon: <MdPersonOutline className="text-orange-500 w-6 h-6 mr-2" />,
    items: [
      {
        question: "How do I open a trading account?",
        answer:
          'Opening an account is simple. Click on "Register" button, fill out the registration form with your personal details, verify your email, and complete the KYC process by uploading required documents. Your account will be activated within 24 hours.',
      },
      {
        question: "What are the different account types available?",
        answer:
          "We offer three account types: Standard (from 1.0 pips, $100 minimum), Raw (from 0.0 pips, $500 minimum), and Pro (institutional spreads, $10,000 minimum). Each account type is designed for different trading styles and experience levels.",
      },
      {
        question: "Can I have multiple trading accounts?",
        answer:
          "Yes, you can open multiple trading accounts under the same client profile. This allows you to trade with different strategies, account types, or manage funds separately.",
      },
    ],
  },
  {
    sectionTitle: "Trading",
    icon: <MdPersonOutline className="text-orange-500 w-6 h-6 mr-2" />, // Replace with a suitable icon if you want
    items: [
      {
        question: "What instruments can I trade?",
        answer:
          "You can trade over 100+ instruments including major, minor, and exotic forex pairs, commodities (gold, silver, oil), indices (US30, SPX500, NASDAQ), and cryptocurrencies (Bitcoin, Ethereum, etc.).",
      },
      {
        question: "What is the maximum leverage available?",
        answer:
          "Maximum leverage varies by account type: Standard and Raw accounts offer up to 1:500, while Pro accounts offer up to 1:1000. Leverage may vary depending on the instrument and market conditions.",
      },
      {
        question: "What are your trading hours?",
        answer:
          "Forex markets are open 24/5, from Sunday 22:00 GMT to Friday 22:00 GMT. Other instruments have specific trading hours. Please check the contract specifications for each instrument in your trading platform.",
      },
    ],
  },
  {
    sectionTitle: "Platform",
    icon: <MdPersonOutline className="text-orange-500 w-6 h-6 mr-2" />, // Replace with suitable icon
    items: [
      {
        question: "Which trading platforms do you offer?",
        answer:
          "We offer MetaTrader 5 (MT5) across all devices: Desktop (Windows/Mac), Web Terminal (browser-based), and Mobile apps (iOS/Android/Huawei). MT5 provides advanced charting, automated trading, and professional analysis tools.",
      },
      {
        question: "Can I use Expert Advisors (EAs)?",
        answer:
          "Yes, MT5 supports Expert Advisors for automated trading. You can use existing EAs or develop your own using MQL5 programming language. EAs work on desktop and VPS platforms.",
      },
      {
        question: "Is there a demo account available?",
        answer:
          "Yes, we offer unlimited demo accounts with $10,000 virtual balance. Demo accounts have the same features as live accounts, allowing you to practice trading strategies without risk.",
      },
    ],
  },
  {
    sectionTitle: "Deposits & Withdrawals",
    icon: <MdPersonOutline className="text-orange-500 w-6 h-6 mr-2" />, // Replace with suitable icon
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank wire transfers, credit/debit cards (Visa, Mastercard), e-wallets (Skrill, Neteller, PayPal), and cryptocurrency payments. All major payment methods are supported with instant processing.",
      },
      {
        question: "How long do withdrawals take?",
        answer:
          "E-wallet withdrawals are processed within 24 hours, credit card withdrawals take 3-5 business days, and bank transfers take 3-7 business days. Processing times may vary depending on your payment provider.",
      },
      {
        question: "Are there any withdrawal fees?",
        answer:
          "We don't charge withdrawal fees from our side. However, your payment provider or bank may charge their own fees. The first withdrawal each month is always free for e-wallets.",
      },
    ],
  },
  {
    sectionTitle: "Security",
    icon: <MdPersonOutline className="text-orange-500 w-6 h-6 mr-2" />, // Replace with suitable icon
    items: [
      {
        question: "How are my funds protected?",
        answer:
          "Client funds are segregated from company funds and held in top-tier banks. We maintain full transparency and regulatory compliance to ensure maximum protection of your investments.",
      },
      {
        question: "Is Qorva Markets regulated?",
        answer:
          "Yes, Qorva Markets is fully licensed and regulated by top-tier financial authorities. We operate under strict compliance standards and undergo regular audits to ensure client protection.",
      },
      {
        question: "What security measures do you implement?",
        answer:
          "We use 256-bit SSL encryption, two-factor authentication, advanced firewall protection, and regular security audits. All personal and financial data is encrypted and stored securely.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggle = (sectionIdx, itemIdx) => {
    setOpenIndexes((prev) => {
      const key = `${sectionIdx}-${itemIdx}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">
        <MdPersonOutline className="inline mr-2 text-orange-500 w-8 h-8" />
        Account Related
      </h1>

      {faqData.map((section, sectionIdx) => (
        <section key={section.sectionTitle} className="mb-12">
          <h2 className="flex items-center font-semibold text-xl mb-4">
            {section.icon}
            {section.sectionTitle}
          </h2>

          <div className="space-y-4">
            {section.items.map((item, itemIdx) => {
              const key = `${sectionIdx}-${itemIdx}`;
              const isOpen = openIndexes[key] || false;
              return (
                <div
                  key={key}
                  className="border rounded-md bg-gray-50 p-4 cursor-pointer"
                >
                  <div
                    onClick={() => toggle(sectionIdx, itemIdx)}
                    className="flex justify-between items-center"
                  >
                    <h3 className="font-semibold">{item.question}</h3>
                    {isOpen ? (
                      <MdExpandLess className="w-6 h-6" />
                    ) : (
                      <MdExpandMore className="w-6 h-6" />
                    )}
                  </div>
                  {isOpen && (
                    <p className="mt-2 text-gray-700">{item.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
