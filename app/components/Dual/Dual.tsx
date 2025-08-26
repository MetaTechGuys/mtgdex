"use client";

import { useState } from "react";
import Link from "next/link";
import "./Dual.scss";

export default function Dual() {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <section className="dual">
      <div className="dual__tabs">
        <button
          className={`dual__tab ${
            activeTab === "first" ? "dual__tab--active" : ""
          }`}
          onClick={() => setActiveTab("first")}
        >
          First Option
        </button>
        <button
          className={`dual__tab ${
            activeTab === "second" ? "dual__tab--active" : ""
          }`}
          onClick={() => setActiveTab("second")}
        >
          Second Option
        </button>
      </div>

      <div className="dual__content">
        {activeTab === "first" ? (
          <div className="dual__layout">
            <div className="dual__image">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="dual__main-video"
              >
                <source
                  src="/videos/Ex-EN-1734602916000.webm"
                  type="video/webm"
                />
              </video>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="dual__overlay-video"
              >
                <source
                  src="/videos/Pannel-Ex-1732092714-en.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div className="dual__text">
              <h2 className="dual__title">First Option Title</h2>
              <h3 className="dual__subtitle">Subtitle for first option</h3>
              <p className="dual__description">
                This is the description for the first option. It explains what
                this option offers and why it might be beneficial for users.
              </p>
              <Link href="/first-option" className="btn btn--primary dual__cta">
                Learn More
              </Link>
            </div>
          </div>
        ) : (
          <div className="dual__layout">
            <div className="dual__image">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="dual__main-video"
              >
                <source
                  src="/videos/Ex-EN-1734602916000.webm"
                  type="video/webm"
                />
              </video>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="dual__overlay-video"
              >
                <source
                  src="/videos/Pannel-Ex-1732092714-en.webm"
                  type="video/webm"
                />
              </video>
            </div>
            <div className="dual__text">
              <h2 className="dual__title">Second Option Title</h2>
              <h3 className="dual__subtitle">Subtitle for second option</h3>
              <p className="dual__description">
                This is the description for the second option. It explains what
                this option offers and why it might be beneficial for users.
              </p>
              <Link
                href="/second-option"
                className="btn btn--primary dual__cta"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
