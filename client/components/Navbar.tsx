"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="bg-beige relative z-50 w-full">
      <div className="flex items-center justify-between px-2.5 py-2.5 sm:px-6 sm:py-4 md:px-8 lg:px-14 lg:py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a8b59e56906e085d44896e9e9791b123bbf3c599?width=228"
            alt="Play Atrium Logo"
            className="h-auto w-[114px] sm:w-24 md:w-28 lg:w-32 xl:w-40"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center ml-auto">
          <div className="flex items-center gap-2">
            <NavLink href="/parties-events" isActive={pathname === "/parties-events"}>Parties & Events</NavLink>
            <NavLink href="/aboutus" isActive={pathname === "/aboutus"}>About Us</NavLink>
            <NavLink href="/custom-decorations" isActive={pathname === "/custom-decorations"}>Custom Decoration</NavLink>
            <NavLink href="/contactus" isActive={pathname === "/contactus"}>Contact Us</NavLink>
            <NavLink href="/gallery" isActive={pathname === "/gallery"}>Gallery</NavLink>
          </div>
          <div className="w-px h-16 bg-olive/20 mx-3"></div>
          <button className="bg-[#54643D] text-beige px-6 py-2.5 rounded-full font-quicksand font-semibold text-sm tracking-[0.9px] hover:opacity-90 transition-opacity whitespace-nowrap">
            BOOK NOW
          </button>
        </nav>

        {/* Mobile Menu Button & Book Now */}
        <div className="flex lg:hidden items-center gap-2">
          <button className="bg-[#54643D] text-beige px-[19px] py-2.5 rounded-full font-quicksand font-semibold text-[10px] tracking-[0.9px] hover:opacity-90 transition-opacity whitespace-nowrap">
            BOOK NOW
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-transparent text-black transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="34"
              height="21"
              viewBox="0 0 34 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 20H33M1 1H33M1 10.2564H33"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-beige border-t-2 border-olive/10 py-4 px-4">
          <nav className="flex flex-col gap-4">
            <Link
              to="/parties-events"
              onClick={() => setMobileMenuOpen(false)}
              className="font-fredoka font-bold text-xl text-beige text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
              style={{ WebkitTextStroke: "1px #56623C" }}
            >
              Parties & Events
            </Link>
            <Link
              to="/aboutus"
              onClick={() => setMobileMenuOpen(false)}
              className="font-fredoka font-bold text-xl text-beige text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
              style={{ WebkitTextStroke: "1px #56623C" }}
            >
              About Us
            </Link>
            <Link
              to="/custom-decorations"
              onClick={() => setMobileMenuOpen(false)}
              className="font-fredoka font-bold text-xl text-beige text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
              style={{ WebkitTextStroke: "1px #56623C" }}
            >
              Custom Decoration
            </Link>
            <Link
              to="/contactus"
              onClick={() => setMobileMenuOpen(false)}
              className="font-fredoka font-bold text-xl text-beige text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
              style={{ WebkitTextStroke: "1px #56623C" }}
            >
              Contact Us
            </Link>
            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="font-fredoka font-bold text-xl text-beige text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
              style={{ WebkitTextStroke: "1px #56623C" }}
            >
              Gallery
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string
  children: React.ReactNode
  isActive?: boolean
}) {
  return (
    <Link
      to={href}
      className={"font-fredoka font-extrabold text-xl text-center px-3.5 hover:opacity-80 transition-opacity whitespace-nowrap border-b-2" + (isActive ? " text-[#FFBC56] border-olive" : " text-beige border-beige")}
      style={{
        WebkitTextStroke: "1px #56623C",
      }}
    >
      {children}
    </Link>
  )
}
