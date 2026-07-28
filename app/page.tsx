"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { NewsCard } from '@/components/NewsCard';

export default function Home() {
  const news = [
    {
      title: "Warriors Secure Promotion to Uganda Premier League",
      excerpt: "It's official! Blacks Power FC will play in the top tier next season after a hard-fought victory...",
      category: "Match Report",
      imageUrl: "/images/celebration.jpg",
      date: "May 15, 2026"
    },
    {
      title: "Lukyamuzi Skills Extends Contract",
      excerpt: "The master tactician who led us to Big League glory has committed his future to the club...",
      category: "Club News",
      imageUrl: "/images/presentation.jpg",
      date: "May 20, 2026"
    },
    {
      title: "Akiibua Stadium Renovations Underway",
      excerpt: "As part of the AFCON 2027 preparations, our home ground is receiving a major facelift...",
      category: "Stadium",
      imageUrl: "https://placehold.co/600x400/D21022/FFFFFF?text=Stadium+Upgrade",
      date: "May 25, 2026"
    }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-brand-dark">
          <Image 
            src="/images/celebration.jpg" 
            alt="Hero Background" 
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full pt-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h2 className="text-accent-gold font-heading tracking-widest uppercase mb-4 text-xl md:text-2xl drop-shadow-md">
              2025/2026 FUFA BIG LEAGUE CHAMPIONS
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-[0.9] uppercase tracking-tighter mb-8 drop-shadow-lg">
              THE BLACK <br/><span className="text-brand-red">WARRIORS</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="solidRed" size="lg" className="uppercase w-full sm:w-auto">
                Join the Warriors
              </Button>
              <Button variant="outline" size="lg" className="uppercase w-full sm:w-auto">
                View Fixtures
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Diagonal Cut Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-brand-dark transform origin-bottom-right -skew-y-2 z-30" />
      </section>

      {/* Next Match Section */}
      <section className="relative z-40 -mt-20 max-w-7xl mx-auto px-4 w-full mb-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-brand-gray p-1 rounded-xl shadow-2xl shadow-black/50 border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-black rounded-lg gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-xl text-brand-red uppercase tracking-wider mb-2">Next Match</h3>
              <p className="text-gray-400 text-sm">Uganda Premier League - Matchday 1</p>
            </div>
            
            <div className="flex-2 flex items-center justify-center gap-8 w-full md:w-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gray rounded-full flex items-center justify-center font-heading font-bold text-xl border border-gray-800 mb-2">
                  BP
                </div>
                <span className="font-heading uppercase tracking-wide">Blacks Power</span>
              </div>
              
              <div className="text-center">
                <div className="text-gray-500 font-heading text-2xl mb-1">VS</div>
                <div className="text-xs bg-brand-red px-2 py-1 rounded text-white font-bold tracking-wider">Aug 12, 16:00</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-brand-gray rounded-full flex items-center justify-center font-heading font-bold text-xl border border-gray-800 mb-2">
                  KCCA
                </div>
                <span className="font-heading uppercase tracking-wide">KCCA FC</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-right">
              <Button variant="solidRed" className="uppercase tracking-wider w-full md:w-auto">Buy Tickets</Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-brand-dark max-w-7xl mx-auto px-4 w-full overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex justify-between items-end mb-10"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight">
              Latest <span className="text-brand-red">News</span>
            </h2>
            <div className="w-24 h-1 bg-brand-red mt-2" />
          </div>
          <Link href="/news" className="hidden sm:block text-brand-red hover:text-white uppercase font-bold tracking-wider text-sm transition-colors">
            View All News &rarr;
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } }
              }}
            >
              <NewsCard {...item} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sponsors Ticker */}
      <section className="py-12 border-t border-b border-gray-800 bg-[#050505] overflow-hidden mt-12 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-500 font-heading tracking-widest uppercase text-sm mb-8">Official Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
            <span className="font-heading text-2xl font-bold uppercase">Mount Meru Millers</span>
            <span className="font-heading text-2xl font-bold uppercase">Lira City Council</span>
            <span className="font-heading text-2xl font-bold uppercase">FUFA</span>
            <span className="font-heading text-2xl font-bold uppercase">StarTimes</span>
          </div>
        </div>
      </section>

    </div>
  );
}
