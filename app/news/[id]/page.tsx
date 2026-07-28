import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { newsData } from '@/lib/newsData';
import { NewsCard } from '@/components/NewsCard';
import { imgPath } from '@/lib/imgPath';

interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;

  // Find article by id or matching slug
  const article = newsData.find(item => 
    item.id === id || 
    item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === id
  );

  if (!article) {
    notFound();
  }

  // Get other articles for "Related News"
  const otherNews = newsData.filter(item => item.id !== article.id).slice(0, 3);

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-brand-gray border-b border-brand-red pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-sm font-heading uppercase tracking-wider text-brand-red hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to News
          </Link>

          {/* Category */}
          <div>
            <span className="bg-brand-red text-white text-xs font-bold font-heading tracking-wider uppercase px-3 py-1 rounded-sm shadow-md inline-block mb-4">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-heading font-black uppercase text-white tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 border-t border-gray-800 pt-4">
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-brand-red" />
              {article.author || "Club Reporter"}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-brand-red" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-red" />
              {article.readTime || "4 min read"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Cover Image */}
        <div className="relative h-80 md:h-[480px] w-full rounded-2xl overflow-hidden border border-gray-800 mb-12 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgPath(article.imageUrl)}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lead Excerpt */}
        <div className="text-lg md:text-xl font-heading text-gray-200 leading-relaxed mb-8 border-l-4 border-brand-red pl-6 py-1 bg-brand-gray/50 rounded-r-lg">
          {article.excerpt}
        </div>

        {/* Body Paragraphs */}
        <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-body">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Optional Quote */}
        {article.quote && (
          <blockquote className="my-10 p-8 bg-brand-gray border border-brand-red/40 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 text-brand-red/10 font-heading text-9xl font-black select-none pointer-events-none -mr-4 -mt-6">
              “
            </div>
            <p className="font-heading italic text-xl md:text-2xl text-white mb-4 relative z-10">
              "{article.quote.text}"
            </p>
            <footer className="text-brand-red font-heading uppercase tracking-wider text-sm font-bold relative z-10">
              — {article.quote.author}
            </footer>
          </blockquote>
        )}

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-heading uppercase text-gray-400">
            <Share2 size={16} className="text-brand-red" />
            Share article:
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-brand-gray hover:bg-brand-red text-white text-xs font-heading uppercase tracking-wider rounded border border-gray-800 transition-colors">
              X / Twitter
            </button>
            <button className="px-4 py-2 bg-brand-gray hover:bg-brand-red text-white text-xs font-heading uppercase tracking-wider rounded border border-gray-800 transition-colors">
              Facebook
            </button>
            <button className="px-4 py-2 bg-brand-gray hover:bg-brand-red text-white text-xs font-heading uppercase tracking-wider rounded border border-gray-800 transition-colors">
              WhatsApp
            </button>
          </div>
        </div>

        {/* Related News */}
        {otherNews.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-800">
            <h3 className="text-3xl font-heading font-black uppercase text-white tracking-tight mb-8">
              More <span className="text-brand-red">News</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherNews.map(item => (
                <NewsCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
