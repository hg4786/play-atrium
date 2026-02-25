"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { siteConfig } from "@/lib/site-config"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="bg-beige relative z-50 w-full">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-14 lg:py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={siteConfig.logoColor}
            alt={`${siteConfig.name} Logo`}
            className="h-auto w-[140px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center ml-auto">
          <div className="flex items-center gap-2">
            {siteConfig.navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} isActive={pathname === link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <button className="bg-brown text-[#F4E9CD] px-6 py-2.5 rounded-full text-sm tracking-[0.9px] hover:opacity-90 transition-opacity whitespace-nowrap">
            <a href={siteConfig.becomeMemberLink}>Become a Member</a>
          </button>
        </nav>

        {/* Mobile Menu Button & become a member */}
        <div className="flex lg:hidden items-center gap-2">
          <button className="bg-brown text-[#F4E9CD] px-5 py-2.5 rounded-full text-xs tracking-[0.9px] hover:opacity-90 transition-opacity whitespace-nowrap">
            <a href={siteConfig.becomeMemberLink}>Become a Member</a>
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
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-fredoka font-bold text-xl text-transparent text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
                style={{ WebkitTextStroke: "1px #5E2E1C" }}
              >
                {link.label}
              </Link>
            ))}
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
      className={`font-fredoka font-bold text-xl text-center px-3.5 hover:opacity-80 transition-opacity whitespace-nowrap ${
        isActive ? "text-golden underline underline-offset-8 decoration-2" : "text-transparent"
      }`}
      style={{
        WebkitTextStroke: "1px #5E2E1C",
      }}
    >
      {children}
    </Link>
  )
}
