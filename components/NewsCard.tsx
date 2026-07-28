import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { imgPath } from '@/lib/imgPath';

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  date: string;
}

export function NewsCard({ title, excerpt, category, imageUrl, date }: NewsCardProps) {
  return (
    <Link href="#" className="group block bg-brand-gray rounded-xl overflow-hidden border border-gray-800 hover:border-brand-red/50 transition-all">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={imgPath(imageUrl)} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-red text-white text-xs font-bold font-heading tracking-wider uppercase px-3 py-1 rounded-sm shadow-md">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-xs mb-3 flex items-center gap-2">
          {date}
        </p>
        <h3 className="text-xl font-heading font-bold text-brand-light mb-3 line-clamp-2 group-hover:text-brand-red transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3">
          {excerpt}
        </p>
        <span className="inline-block mt-4 text-brand-red text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
          Read More &rarr;
        </span>
      </div>
    </Link>
  );
}
