import React from 'react';
import { NewsCard } from '@/components/NewsCard';
import { imgPath } from '@/lib/imgPath';

const allNews = [
  {
    title: "Warriors Secure Promotion to Uganda Premier League",
    excerpt: "It's official! Blacks Power FC will play in the top tier next season after a hard-fought victory secured their place in the Uganda Premier League. The Lira-based club capped off a remarkable campaign to join the elite.",
    category: "Match Report",
    imageUrl: imgPath("/images/celebration.jpg"),
    date: "Jun 06, 2026",
  },
  {
    title: "Lukyamuzi Skills Extends Contract",
    excerpt: "Head Coach Michael Lukyamuzi Skills has committed his future to Blacks Power FC, signing a new deal that will keep him at the club for the upcoming Uganda Premier League campaign. The tactician masterminded the club's FUFA Big League title run.",
    category: "Club News",
    imageUrl: imgPath("/images/presentation.jpg"),
    date: "May 20, 2026",
  },
  {
    title: "Blacks Power FC Crowned FUFA Big League 2025/26 Champions",
    excerpt: "Blacks Power FC are champions! The Black Warriors finished the 2025/26 FUFA Big League season on top with 55 points, clinching the title on the final day with a 0-0 draw against Onduparaka FC at the Onduparaka Grounds.",
    category: "Club News",
    imageUrl: imgPath("/images/celebration.jpg"),
    date: "Jun 06, 2026",
  },
  {
    title: "4-0 Demolition of Mbale Heroes Sends Title Message",
    excerpt: "Blacks Power FC recorded their biggest win of the season with a commanding 4-0 thrashing of Mbale Heroes in Match Day 29. The result all but confirmed the title as the Warriors showed their dominance heading into the final game.",
    category: "Match Report",
    imageUrl: imgPath("/images/lineup.jpg"),
    date: "May 24, 2026",
  },
  {
    title: "Akiibua Stadium Renovations Underway",
    excerpt: "As part of the AFCON 2027 preparations, Blacks Power FC's home ground — Akiibua Stadium in Lira — is receiving a major facelift. The renovations are expected to be completed before the start of the Uganda Premier League season.",
    category: "Stadium",
    imageUrl: imgPath("https://placehold.co/600x400/D21022/FFFFFF?text=Stadium+Upgrade"),
    date: "May 25, 2026",
  },
  {
    title: "Season Review: The Road to the FUFA Big League Title",
    excerpt: "From a hard-fought opening day 2-0 win over Onduparaka FC to the title-clinching draw on the final day, we look back at Blacks Power FC's incredible 30-match journey to the 2025/26 FUFA Big League championship.",
    category: "Feature",
    imageUrl: "/images/lineup.jpg",
    date: "Jun 10, 2026",
  },
];

export default function NewsPage() {
  const [featured, ...rest] = allNews;

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Header */}
      <div className="relative bg-brand-gray border-b border-brand-red pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">
            Latest <span className="text-brand-red">News</span>
          </h1>
          <p className="text-gray-400 mt-4">Stay up to date with everything Blacks Power FC.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Featured Article */}
        <div className="mb-14 group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-red/50 transition-colors cursor-pointer">
          <div className="relative h-80 md:h-[420px] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.imageUrl}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="bg-brand-red text-white text-xs font-bold font-heading tracking-wider uppercase px-3 py-1 rounded-sm mb-4 inline-block">
              {featured.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase leading-tight mb-3 group-hover:text-brand-red transition-colors">
              {featured.title}
            </h2>
            <p className="text-gray-300 text-sm max-w-2xl line-clamp-2">{featured.excerpt}</p>
            <p className="text-gray-500 text-xs mt-3">{featured.date}</p>
          </div>
        </div>

        {/* Rest of articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article, idx) => (
            <NewsCard key={idx} {...article} />
          ))}
        </div>

      </div>
    </div>
  );
}
