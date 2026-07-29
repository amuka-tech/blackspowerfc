"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChampionBadge } from '@/components/ChampionBadge';


export function Footer() {
  return (
    <footer className="bg-black border-t border-brand-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logo.png" alt="Blacks Power FC Logo" width={56} height={56} className="object-contain" />
              <span className="font-heading text-2xl font-bold tracking-wider text-brand-light">
                BLACKS POWER FC
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              The Black Warriors. Reigning FUFA Big League Champions based in Lira, Northern Uganda. Community-rooted, bold, and triumphant.
            </p>
            <ChampionBadge />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-brand-light mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-brand-red transition-colors">First Team</Link></li>
              <li><Link href="/fixtures" className="text-gray-400 hover:text-brand-red transition-colors">Fixtures & Results</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-red transition-colors">Club News</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-brand-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading text-xl text-brand-light mb-6 uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/blackspowerfc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://x.com/BlacksPowerFC" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://www.instagram.com/blacks_power_fc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@blacks.power.fc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-gray-400 hover:bg-brand-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-8-8H7v12Z"/></svg>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-xl text-brand-light mb-6 uppercase tracking-wider">Join The Warriors</h4>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for the latest news, ticket updates, and exclusive offers.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-brand-gray border border-gray-800 rounded-md px-4 py-2 text-brand-light focus:outline-none focus:border-brand-red"
              />
              <Button variant="solidRed" className="w-full">Subscribe</Button>
            </form>
          </div>

        </div>

        <div className="border-t border-brand-gray pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Blacks Power FC. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-brand-light transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
