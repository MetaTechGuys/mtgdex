"use client";

import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__brand">
          <Link href="/" className="footer__logo" aria-label="Home">
            <span className="footer__logo-svg" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 103 32"
                fill="#5f3269"
                stroke="#5f3269"
                strokeWidth="1.8"
              >
                <text
                  x="0"
                  y="50%"
                  dominantBaseline="middle"
                  fill="currentColor"
                  fontSize="22"
                  fontFamily="inherit"
                  letterSpacing="0.8"
                >
                  MTG Dex
                </text>
              </svg>
            </span>
          </Link>
          <p className="footer__motto">
            Your ultimate Magic: The Gathering companion.
          </p>
          <div className="footer__socials">
            <a href="#" className="icon-btn" aria-label="Twitter">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.24 4.24 0 001.86-2.34 8.49 8.49 0 01-2.69 1.03 4.23 4.23 0 00-7.21 3.86A12 12 0 013 4.8a4.22 4.22 0 001.31 5.63 4.2 4.2 0 01-1.91-.53v.05a4.23 4.23 0 003.39 4.14c-.46.13-.95.2-1.45.08a4.23 4.23 0 003.95 2.94A8.49 8.49 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z"></path>
              </svg>
            </a>
            <a href="#" className="icon-btn" aria-label="GitHub">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.2-3.37-1.2-.45-1.14-1.1-1.45-1.1-1.45-.9-.63.07-.62.07-.62 1 .07 1.53 1.02 1.53 1.02.9 1.53 2.36 1.09 2.94.83.09-.66.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.67 0 0 .85-.27 2.78 1.02a9.7 9.7 0 015.06 0c1.93-1.29 2.78-1.02 2.78-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.67-4.57 4.92.36.31.69.92.69 1.86v2.76c0 .27.18.58.69.48A10 10 0 0012 2z"></path>
              </svg>
            </a>
            <a href="#" className="icon-btn" aria-label="Discord">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M20.317 4.369A19.791 19.791 0 0016.558 3c-.19.335-.41.786-.563 1.137a17.24 17.24 0 00-4.01 0A12.3 12.3 0 0011.422 3a19.791 19.791 0 00-3.757 1.369C4.157 7.275 3.54 10.07 3.783 12.825c1.58 1.19 3.115 1.92 4.622 2.397.372-.51.705-1.054.993-1.63-.55-.21-1.075-.476-1.57-.79.131-.097.26-.198.385-.3 3.043 1.376 6.33 1.376 9.35 0 .127.103.256.203.385.3-.496.314-1.022.58-1.572.79.29.576.622 1.12.994 1.63 1.507-.478 3.042-1.208 4.622-2.397.38-4.068-.651-6.826-2.865-8.456zM9.25 12.348c-.91 0-1.652-.83-1.652-1.85 0-1.02.73-1.852 1.652-1.852.93 0 1.675.84 1.652 1.852 0 1.02-.73 1.85-1.652 1.85zm5.5 0c-.91 0-1.652-.83-1.652-1.85 0-1.02.73-1.852 1.652-1.852.93 0 1.675.84 1.652 1.852 0 1.02-.73 1.85-1.652 1.85z"></path>
              </svg>
            </a>
            <a href="#" className="icon-btn" aria-label="YouTube">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"></path>
              </svg>
            </a>
            <a href="#" className="icon-btn" aria-label="Facebook">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.3-3.6 3.3-3.6.96 0 1.96.17 1.96.17v2.1h-1.1c-1.1 0-1.5.69-1.5 1.4V12h2.56l-.41 2.9h-2.15v7A10 10 0 0022 12z"></path>
              </svg>
            </a>
            <a href="#" className="icon-btn" aria-label="Instagram">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1017.5 13 5.5 5.5 0 0012 7.5zm0 2A3.5 3.5 0 1115.5 13 3.5 3.5 0 0112 9.5zM18 6.2a1 1 0 11-2 0 1 1 0 012 0z"></path>
              </svg>
            </a>
            <a href="#" className="icon-btn" aria-label="Reddit">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M14.5 15.3c-.6.6-1.8.6-2.5 0-.1-.1-.3-.1-.4 0-.1.1-.1.3 0 .4.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.6.1-.1.1-.3 0-.4-.1-.1-.3-.1-.3 0zM9 13.5c0-.8.7-1.5 1.5-1.5S12 12.7 12 13.5 11.3 15 10.5 15 9 14.3 9 13.5zm5 0c0-.8.7-1.5 1.5-1.5S17 12.7 17 13.5 16.3 15 15.5 15 14 14.3 14 13.5z"></path>
                <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12s4.5 10 10 10 10-4.5 10-10zm-4.5 4.2c-.9.9-2.4 1.4-3.9 1.6l.8 3.5-1.3.3-.8-3.5c-1.6 0-3.1-.3-4.2-1.1-1.5-1-2.4-2.5-2.3-4.2 0-2.7 2.8-4.9 6.3-5.2l.8-3.6 1.3.3-.8 3.5c2.1.1 4 .8 5.2 1.9 1.5 1.2 1.9 3.1.9 4.5z"></path>
              </svg>
            </a>
            <a href="#" className="icon-btn" aria-label="LinkedIn">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.52c0-1.32-.02-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.92v5.62H9.36V9h3.42v1.56h.05c.48-.9 1.66-1.84 3.42-1.84 3.66 0 4.34 2.41 4.34 5.55v6.18zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.13 20.45H3.55V9h3.58v11.45z"></path>
              </svg>
            </a>
          </div>
          <div>
            <button className="btn btn--primary">Download</button>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Product</h4>
          <ul className="footer__links">
            <li>
              <Link href="/explore">Explore</Link>
            </li>
            <li>
              <Link href="/sets">Sets</Link>
            </li>
            <li>
              <Link href="/cards">Cards</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/roadmap">Roadmap</Link>
            </li>
            <li>
              <Link href="/changelog">Changelog</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__links">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/press">Press</Link>
            </li>
            <li>
              <Link href="/partners">Partners</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Resources</h4>
          <ul className="footer__links">
            <li>
              <Link href="/docs">Docs</Link>
            </li>
            <li>
              <Link href="/guides">Guides</Link>
            </li>
            <li>
              <Link href="/api">API</Link>
            </li>
            <li>
              <Link href="/status">Status</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Legal</h4>
          <ul className="footer__links">
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/cookies">Cookies</Link>
            </li>
            <li>
              <Link href="/licenses">Licenses</Link>
            </li>
            <li>
              <Link href="/gdpr">GDPR</Link>
            </li>
            <li>
              <Link href="/security">Security</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Community</h4>
          <ul className="footer__links">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Reddit</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} MTG Dex. All rights reserved.</p>
      </div>
    </footer>
  );
}
