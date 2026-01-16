'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SERVICES } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BioDatawala
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 transition flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      {service.icon} {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/templates" className="text-gray-700 hover:text-blue-600 transition">
              Templates
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
              Blog
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            
            <Link
              href="/create"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Create Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link href="/" className="block py-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <div className="py-2">
              <button 
                className="flex items-center justify-between w-full text-gray-700"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {SERVICES.slice(0, 6).map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                    >
                      {service.icon} {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/templates" className="block py-2 text-gray-700 hover:text-blue-600">
              Templates
            </Link>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/pricing" className="block py-2 text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link
              href="/create"
              className="block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700"
            >
              Create Free
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
