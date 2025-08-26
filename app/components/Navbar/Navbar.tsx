"use client";

import Link from "next/link";
import Image from "next/image";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__left">
          <Link href="/" className="navbar__logo" aria-label="Home">
            <span className="navbar__logo-svg" aria-hidden="true">
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
          <nav className="navbar__links" aria-label="Primary">
            <div className="navbar__item navbar__item--has-dropdown">
              <Link
                href="/explore"
                className="navbar__link"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Explore
              </Link>
              <div className="navbar__dropdown" role="menu">
                <Link
                  href="/explore/trending"
                  className="navbar__dropdown-link"
                  role="menuitem"
                >
                  Trending
                </Link>
                <Link
                  href="/explore/new"
                  className="navbar__dropdown-link"
                  role="menuitem"
                >
                  New
                </Link>
                <Link
                  href="/explore/top"
                  className="navbar__dropdown-link"
                  role="menuitem"
                >
                  Top Rated
                </Link>
              </div>
            </div>

            <div className="navbar__item navbar__item--has-dropdown">
              <Link
                href="/sets"
                className="navbar__link"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sets
              </Link>
              <div className="navbar__dropdown" role="menu">
                <Link
                  href="/sets/standard"
                  className="navbar__dropdown-link"
                  role="menuitem"
                >
                  Standard
                </Link>
                <Link
                  href="/sets/modern"
                  className="navbar__dropdown-link"
                  role="menuitem"
                >
                  Modern
                </Link>
                <Link
                  href="/sets/commander"
                  className="navbar__dropdown-link"
                  role="menuitem"
                >
                  Commander
                </Link>
              </div>
            </div>

            <div className="navbar__item">
              <Link href="/cards" className="navbar__link">
                Cards
              </Link>
            </div>
            <div className="navbar__item">
              <Link href="/about" className="navbar__link">
                About
              </Link>
            </div>
          </nav>
        </div>

        <div className="navbar__right">
          <div className="navbar__auth">
            <Link href="/signup" className="btn btn--primary">
              Sign up
            </Link>
            <Link href="/login" className="btn btn--ghost">
              Log in
            </Link>
          </div>

          <div className="navbar__icons">
            <button className="icon-btn" aria-label="Search">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                aria-hidden="true"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </button>
            <button className="icon-btn" aria-label="Notifications">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                aria-hidden="true"
              >
                <path d="M12 22a2 2 0 002-2H10a2 2 0 002 2zm6-6V11a6 6 0 10-12 0v5l-2 2v1h16v-1l-2-2z"></path>
              </svg>
            </button>
            <button className="icon-btn" aria-label="Upload">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                aria-hidden="true"
              >
                <path d="M5 20h14v-2H5v2zm7-14l5 5h-3v6h-4v-6H7l5-5z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
