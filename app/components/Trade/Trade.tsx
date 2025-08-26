"use client";

import "./Trade.scss";
import Image from "next/image";

export default function Trade() {
  return (
    <section className="trade">
      <div className="trade__header">
        <h2 className="trade__title">Get the MTG Dex App</h2>
        <p className="trade__desc">Scan the QR or download for your device.</p>
      </div>

      <div className="trade__media">
        <video className="trade__video" autoPlay muted loop playsInline>
          <source src="/videos/Tablet-EN-1740478637.webm" type="video/webm" />
        </video>
      </div>

      <div className="trade__row">
        <div className="trade__qr" aria-label="QR code">
          <Image src="/images/download.webp" alt="QR code" className="trade__qrImage" width={200} height={200} />
        </div>

        <div className="trade__right">
          <h3 className="trade__rightTitle">Download the app</h3>
          <p className="trade__rightText">
            Available on iOS, Android, and Play Store.
          </p>
          <div className="trade__stores">
            <button className="store-btn" aria-label="Apple App Store">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M16.365 1.43c0 1.14-.46 2.2-1.21 2.98-.77.8-2.03 1.42-3.08 1.33-.1-1.1.5-2.26 1.24-3.02.8-.8 2.18-1.37 3.05-1.29.02.02.02.02.02.02zM20.5 17.44c-.54 1.2-.8 1.74-1.5 2.8-.97 1.42-2.34 3.2-4.03 3.2-1.18 0-1.98-.77-3.3-.77-1.36 0-2.2.75-3.35.79-1.7.04-3.02-1.54-4-2.96-2.2-3.22-2.43-7.01-1.07-9.02.98-1.42 2.53-2.3 4.28-2.3 1.34 0 2.6.84 3.3.84.68 0 2.03-.86 3.54-.86 1.35 0 2.77.68 3.66 1.83-3.22 1.8-2.7 6.52.51 7.41z"></path>
              </svg>
              {/* <span>Apple</span> */}
            </button>
            <button className="store-btn" aria-label="Android">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M17.6 9.48l.86-1.5a.5.5 0 10-.86-.5l-.9 1.56a8.1 8.1 0 00-8.48 0l-.9-1.56a.5.5 0 10-.87.5l.86 1.5A6.5 6.5 0 005 14.5V19a2 2 0 002 2h1v-8h2v8h4v-8h2v8h1a2 2 0 002-2v-4.5a6.5 6.5 0 00-3.4-5.02zM9 7a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z"></path>
              </svg>
              {/* <span>Android</span> */}
            </button>
            <button className="store-btn" aria-label="Google Play">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M4 3l15 9-15 9V3z"></path>
              </svg>
              {/* <span>Play</span> */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
