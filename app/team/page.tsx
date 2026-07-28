"use client";
import React, { useState } from 'react';
import { PlayerCard } from '@/components/PlayerCard';

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('first-team');

  const players = [
    { number: 1, name: "Acire", position: "Player" },
    { number: 2, name: "Andrea", position: "Player" },
    { number: 3, name: "Buyala", position: "Player" },
    { number: 4, name: "Fazil", position: "Player" },
    { number: 5, name: "Kirya", position: "Player" },
    { number: 6, name: "Maduka", position: "Player" },
    { number: 7, name: "Odongkara", position: "Player" },
    { number: 8, name: "Okech", position: "Player" },
    { number: 9, name: "Okello", position: "Player" },
    { number: 10, name: "Okiria", position: "Player" },
    { number: 11, name: "Olello", position: "Player" },
    { number: 12, name: "Oloro", position: "Player" },
    { number: 13, name: "Omara", position: "Player" },
    { number: 14, name: "Oonyu", position: "Player" },
    { number: 15, name: "Opio", position: "Player" },
    { number: 16, name: "Oscar", position: "Player" },
    { number: 17, name: "Owiny", position: "Player" },
    { number: 18, name: "Pascal", position: "Player" },
    { number: 19, name: "Ssenkooto", position: "Player" },
    { number: 20, name: "Wabulo", position: "Player" },
    { number: 21, name: "Yakin", position: "Player" },
    { number: 22, name: "Ogwal", position: "Player" },
  ];

  const coaches = [
    { number: 0, name: "Michael Lukyamuzi Skills", position: "Head Coach" },
  ];

  const displayList = activeTab === 'first-team' ? players : activeTab === 'coaching-staff' ? coaches : [];

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Header */}
      <div className="relative bg-brand-gray border-b border-brand-red pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">
            Our <span className="text-brand-red">Squad</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Meet the 2025/2026 FUFA Big League Champions. The warriors ready to take on the Uganda Premier League.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          <button 
            onClick={() => setActiveTab('first-team')}
            className={`px-6 py-2 font-heading uppercase tracking-wider text-sm font-bold rounded-sm whitespace-nowrap transition-colors ${activeTab === 'first-team' ? 'bg-brand-red text-white' : 'bg-brand-gray text-gray-400 hover:text-white'}`}
          >
            First Team
          </button>
          <button 
            onClick={() => setActiveTab('coaching-staff')}
            className={`px-6 py-2 font-heading uppercase tracking-wider text-sm font-bold rounded-sm whitespace-nowrap transition-colors ${activeTab === 'coaching-staff' ? 'bg-brand-red text-white' : 'bg-brand-gray text-gray-400 hover:text-white'}`}
          >
            Coaching Staff
          </button>
          <button 
            onClick={() => setActiveTab('academy')}
            className={`px-6 py-2 font-heading uppercase tracking-wider text-sm font-bold rounded-sm whitespace-nowrap transition-colors ${activeTab === 'academy' ? 'bg-brand-red text-white' : 'bg-brand-gray text-gray-400 hover:text-white'}`}
          >
            Academy
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayList.map((person) => (
            <PlayerCard key={person.number} {...person} />
          ))}
        </div>
      </div>
    </div>
  );
}
