"use client";

import "./Triple.scss";

export default function Triple() {
  return (
    <section className="triple">
      <div className="triple__header">
        <h2 className="triple__title">Do more with MTG Dex</h2>
        <p className="triple__desc">
          Powerful tools to explore markets, track cards, and build better
          decks.
        </p>
      </div>

      <div className="triple__media">
        <video className="triple__video" style={{ filter: "invert(1) hue-rotate(270deg)" }} autoPlay muted loop playsInline>
          <source src="/videos/Safe-5s-1732170834-2x.webm" type="video/webm" />
        </video>
      </div>

      <div className="triple__grid">
        <div className="triple__card">
          <h3 className="triple__cardTitle">Real-time Prices</h3>
          <p className="triple__cardText">
            Live market data across sets and formats with trend insights.
          </p>
          <button className="triple__arrowBtn" aria-label="Learn more">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="#5f3269">
              <path d="M10 17l5-5-5-5v10z"></path>
            </svg>
          </button>
        </div>

        <div className="triple__card">
          <h3 className="triple__cardTitle">Deck Analytics</h3>
          <p className="triple__cardText">
            Meta snapshots, archetype performance, and staple tracking.
          </p>
          <button className="triple__arrowBtn" aria-label="Learn more">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="#5f3269">
              <path d="M10 17l5-5-5-5v10z"></path>
            </svg>
          </button>
        </div>

        <div className="triple__card">
          <h3 className="triple__cardTitle">Collection Tools</h3>
          <p className="triple__cardText">
            Track value, wishlist, and alerts for price changes.
          </p>
          <button className="triple__arrowBtn" aria-label="Learn more">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="#5f3269">
              <path d="M10 17l5-5-5-5v10z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
