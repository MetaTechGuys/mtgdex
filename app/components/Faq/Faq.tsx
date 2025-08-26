"use client";

import { useState } from "react";
import "./Faq.scss";

type FaqItem = {
  question: string;
  answer: string;
};

const DEFAULT_FAQ: FaqItem[] = [
  {
    question: "What is MTG Dex?",
    answer:
      "MTG Dex is a tool to explore prices, sets, and deck insights for Magic: The Gathering.",
  },
  {
    question: "How often are prices updated?",
    answer:
      "Prices refresh regularly throughout the day to reflect current markets.",
  },
  {
    question: "Can I track my collection?",
    answer:
      "Yes. You can monitor value, set alerts, and manage wishlists for your cards.",
  },
  {
    question: "Do I need an account?",
    answer:
      "Browsing is open to everyone. Create a free account to save decks, alerts, and preferences.",
  },
  {
    question: "Which formats are supported?",
    answer:
      "We cover Standard, Modern, Pioneer, Commander/EDH, Limited, and more as data is available.",
  },
  {
    question: "Where does pricing data come from?",
    answer:
      "We aggregate from reputable marketplaces and data partners, normalizing across sources.",
  },
  {
    question: "Can I export data?",
    answer:
      "Yes. CSV exports are available for collections and watchlists in your account settings.",
  },
  {
    question: "How do alerts work?",
    answer:
      "Set price thresholds on cards or decks. We notify you when the market crosses your targets.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "A web app works great on mobile. Native apps are planned; follow updates on our roadmap.",
  },
  {
    question: "How can I report an issue or request a feature?",
    answer:
      "Use the feedback link in the footer or contact us via the support page to reach the team.",
  },
];

export default function Faq({ items = DEFAULT_FAQ }: { items?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="faq">
      <div className="faq__header">
        <h2 className="faq__title">Frequently Asked Questions</h2>
      </div>

      <ul className="faq__list" role="list">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <li className={`faq__item ${isOpen ? "is-open" : ""}`} key={idx}>
              <button
                className="faq__question"
                aria-expanded={isOpen}
                onClick={() => toggle(idx)}
              >
                <span
                  className={`faq__plus ${isOpen ? "is-open" : ""}`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" width="28" height="28">
                    <path d="M11 5h2v14h-2z" />
                    <path d="M5 11h14v2H5z" />
                  </svg>
                </span>
                <span className="faq__questionText">{item.question}</span>
              </button>
              {isOpen && (
                <div className="faq__answer" role="region">
                  {item.answer}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
