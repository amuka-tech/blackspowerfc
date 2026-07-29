import React from 'react';
import Link from 'next/link';
import { NewsCard } from '@/components/NewsCard';

import { newsData } from '@/lib/newsData';

export default function NewsPage() {
  const [featured, ...rest] = newsData;

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
        <Link href={`/news/${featured.id}`} className="block mb-14 group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-red/50 transition-colors">
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
            <p className="text-gray-500 text-xs mt-3">{featured.date} • {featured.readTime || "4 min read"}</p>
          </div>
        </Link>

        {/* Rest of articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((article) => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>

      </div>
    </div>
  );
}
