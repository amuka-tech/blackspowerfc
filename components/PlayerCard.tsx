import React from 'react';
import Image from 'next/image';
import { imgPath } from '@/lib/imgPath';

interface PlayerCardProps {
  number: number;
  name: string;
  position: string;
  imageUrl?: string;
  apps?: number;
  goals?: number;
}

export function PlayerCard({ number, name, position, imageUrl, apps = 0, goals = 0 }: PlayerCardProps) {
  const defaultImage = `https://placehold.co/400x500/1A1A1A/FFFFFF?text=${encodeURIComponent(name.split(' ').join('+'))}`;
  
  return (
    <div className="group relative overflow-hidden bg-brand-gray rounded-xl border border-gray-800 cursor-pointer">
      {/* Player Image area with slant */}
      <div className="relative h-[300px] w-full overflow-hidden bg-black">
        <Image 
          src={imgPath(imageUrl || defaultImage)} 
          alt={name} 
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gray via-transparent to-transparent" />
      </div>

      {/* Number */}
      <div className="absolute top-4 right-4 text-5xl font-heading font-black text-brand-red/90 drop-shadow-md z-10 transition-transform duration-300 group-hover:-translate-y-2">
        {number}
      </div>

      {/* Info */}
      <div className="relative z-20 p-6 -mt-12 bg-brand-gray transition-transform duration-300 transform group-hover:-translate-y-4">
        {/* Diagonal cut decoration */}
        <div className="absolute -top-4 left-0 w-8 h-8 bg-brand-red transform origin-bottom-left -rotate-45 hidden" />
        
        <p className="text-brand-red font-heading tracking-widest text-sm uppercase mb-1">{position}</p>
        <h3 className="text-2xl font-heading font-bold text-brand-light uppercase">{name}</h3>
        
        {/* Quick Stats on Hover */}
        <div className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-2 gap-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300">
          <div>
            <p className="text-xs text-gray-400 uppercase">Appearances</p>
            <p className="text-lg font-heading font-bold">{apps}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase">Goals</p>
            <p className="text-lg font-heading font-bold">{goals}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
