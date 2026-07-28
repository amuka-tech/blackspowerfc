"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartDrawer } from '@/components/CartDrawer';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Team', href: '/team' },
    { name: 'Fixtures', href: '/fixtures' },
    { name: 'News', href: '/news' },
    { name: 'Shop', href: '/shop' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-colors duration-300',
        isScrolled || isMobileMenuOpen || pathname !== '/' ? 'bg-brand-dark/95 backdrop-blur-sm border-b border-brand-gray' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Blacks Power FC Logo" width={48} height={48} className="object-contain" />
          <span className="font-heading text-2xl font-bold tracking-wider text-brand-light hidden sm:block">
            BLACKS POWER FC
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-heading tracking-wide uppercase transition-colors",
                pathname === link.href ? "text-brand-red" : "text-brand-light hover:text-brand-red"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <CartDrawer />
          <Button variant="solidRed" className="uppercase">Buy Tickets</Button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <CartDrawer />
          <button
            className="text-brand-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-brand-gray absolute top-20 left-0 w-full">
          <nav className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xl font-heading tracking-wide uppercase transition-colors",
                  pathname === link.href ? "text-brand-red" : "text-brand-light hover:text-brand-red"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="solidRed" className="uppercase mt-4 w-3/4">Buy Tickets</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
