"use client";

import Link from "next/link";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        style={{ filter: "invert(1) hue-rotate(270deg)" }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/herobanner-1732092714_2.webm" type="video/webm" />
      </video>

      <div className="hero__overlay">
        <div className="hero__left">
          <h1 className="hero__title">
            Discover, track, and master your MTG economy
          </h1>
          <p className="hero__desc">
            Real-time prices, trends, and analytics across sets and formats.
          </p>

          <div className="hero__inputRow">
            <input
              className="hero__input"
              placeholder="Search cards, sets, formats..."
            />
            <button className="btn btn--primary hero__cta">Search</button>
          </div>

          <div className="hero__authBlock">
            <div className="hero__authGrid">
              <div className="hero__authCol">
                <div className="hero__authText">Continue with</div>
                <div className="hero__authLogos">
                  <button className="icon-btn" aria-label="Gmail">
                    <svg
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      aria-hidden="true"
                    >
                      <path d="M12 12.713l11.985-8.713H.015L12 12.713zM12 14.9L.015 6.187V20h23.97V6.187L12 14.9z"></path>
                    </svg>
                  </button>
                  <button className="icon-btn" aria-label="Apple">
                    <svg
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      aria-hidden="true"
                    >
                      <path d="M16.365 1.43c0 1.14-.46 2.2-1.21 2.98-.77.8-2.03 1.42-3.08 1.33-.1-1.1.5-2.26 1.24-3.02.8-.8 2.18-1.37 3.05-1.29.02.02.02.02.02.02zM20.5 17.44c-.54 1.2-.8 1.74-1.5 2.8-.97 1.42-2.34 3.2-4.03 3.2-1.18 0-1.98-.77-3.3-.77-1.36 0-2.2.75-3.35.79-1.7.04-3.02-1.54-4-2.96-2.2-3.22-2.43-7.01-1.07-9.02.98-1.42 2.53-2.3 4.28-2.3 1.34 0 2.6.84 3.3.84.68 0 2.03-.86 3.54-.86 1.35 0 2.77.68 3.66 1.83-3.22 1.8-2.7 6.52.51 7.41z"></path>
                    </svg>
                  </button>
                  <button className="icon-btn" aria-label="Telegram">
                    <svg
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      aria-hidden="true"
                    >
                      <path d="M9.04 15.47l-.37 5.2c.53 0 .77-.23 1.05-.5l2.53-2.42 5.24 3.84c.96.53 1.65.25 1.9-.89l3.45-16.15h.01c.31-1.46-.53-2.03-1.48-1.68L1.13 9.6c-1.43.55-1.41 1.35-.25 1.71l4.86 1.52L18.86 6.4c.6-.4 1.16-.18.71.21"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hero__authCol">
                <div className="hero__authText">Get the app</div>
                <button
                  className="hero__download icon-btn"
                  aria-label="Download"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    aria-hidden="true"
                  >
                    <path d="M5 20h14v-2H5v2z M12 4l5 5h-3v6h-4V9H7l5-5z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__grid">
            <div className="hero__card hero__card--tilt-bottom">
              <h3 className="hero__cardTitle">Market Overview</h3>
              <p className="hero__cardDesc">
                Daily price changes and volume across formats.
              </p>
              <Link href="/explore" className="hero__cardLink">
                View markets →
              </Link>
              <div className="hero__edge hero__edge--bottom" />
            </div>
            <div className="hero__card hero__card--tall">
              <h3 className="hero__cardTitle">Top Movers</h3>
              <p className="hero__cardDesc">Biggest 24h winners and losers.</p>
              <div className="hero__table">
                <div className="hero__row">
                  <div className="hero__cell hero__cell--asset">
                    <span
                      className="hero__logo hero__logo--btc"
                      aria-hidden="true"
                    />{" "}
                    BTC
                  </div>
                  <div className="hero__cell hero__cell--price">$64,210</div>
                </div>
                <div className="hero__row">
                  <div className="hero__cell hero__cell--asset">
                    <span
                      className="hero__logo hero__logo--eth"
                      aria-hidden="true"
                    />{" "}
                    ETH
                  </div>
                  <div className="hero__cell hero__cell--price">$3,120</div>
                </div>
                <div className="hero__row">
                  <div className="hero__cell hero__cell--asset">
                    <span
                      className="hero__logo hero__logo--sol"
                      aria-hidden="true"
                    />{" "}
                    SOL
                  </div>
                  <div className="hero__cell hero__cell--price">$148.20</div>
                </div>
                <div className="hero__row">
                  <div className="hero__cell hero__cell--asset">
                    <span
                      className="hero__logo hero__logo--bnb"
                      aria-hidden="true"
                    />{" "}
                    BNB
                  </div>
                  <div className="hero__cell hero__cell--price">$579.10</div>
                </div>
                <div className="hero__row">
                  <div className="hero__cell hero__cell--asset">
                    <span
                      className="hero__logo hero__logo--xrp"
                      aria-hidden="true"
                    />{" "}
                    XRP
                  </div>
                  <div className="hero__cell hero__cell--price">$0.61</div>
                </div>
                <div className="hero__row">
                  <div className="hero__cell hero__cell--asset">
                    <span
                      className="hero__logo hero__logo--ada"
                      aria-hidden="true"
                    />{" "}
                    ADA
                  </div>
                  <div className="hero__cell hero__cell--price">$0.72</div>
                </div>
                <div className="hero__row">
                  <div className="hero__cell hero__cell--asset">
                    <span
                      className="hero__logo hero__logo--doge"
                      aria-hidden="true"
                    />{" "}
                    DOGE
                  </div>
                  <div className="hero__cell hero__cell--price">$0.18</div>
                </div>
                <div className="hero__row">
                  <div className="hero__cell hero__cell--asset">
                    <span
                      className="hero__logo hero__logo--ton"
                      aria-hidden="true"
                    />{" "}
                    TON
                  </div>
                  <div className="hero__cell hero__cell--price">$6.30</div>
                </div>
              </div>
              <Link href="/explore/top" className="hero__cardLink">
                See all movers →
              </Link>
            </div>
            <div className="hero__card hero__card--tilt-top">
              <h3 className="hero__cardTitle">Deck Insights</h3>
              <p className="hero__cardDesc">
                Meta snapshots, archetype trends, and staples.
              </p>
              <Link href="/sets" className="hero__cardLink">
                Browse decks →
              </Link>
              <div className="hero__edge hero__edge--top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
