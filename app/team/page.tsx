"use client";
import React, { useState } from 'react';
import { PlayerCard } from '@/components/PlayerCard';

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('first-team');

  const goalkeepers = [
    { number: 1, name: "Micheal Okiria", position: "Goalkeeper" },
    { number: 19, name: "Martin Ssenkoto Kalanda", position: "Goalkeeper" },
    { number: 22, name: "Emmanuel Odongkara", position: "Goalkeeper" },
  ];

  const defenders = [
    { number: 2, name: "Henry Orom", position: "Defender" },
    { number: 3, name: "Daniel Otim", position: "Defender" },
    { number: 4, name: "Ivan Okello", position: "Defender" },
    { number: 5, name: "Brian Ogwal", position: "Defender" },
    { number: 6, name: "Ronald Owiny Ogenga", position: "Defender" },
    { number: 15, name: "Pascal Irana", position: "Defender" },
    { number: 18, name: "John Paul Acire", position: "Defender" },
    { number: 24, name: "Isaac Okello", position: "Defender" },
    { number: 25, name: "Rajab Fazil", position: "Defender" },
  ];

  const midfielders = [
    { number: 8, name: "Rashid Yakin", position: "Midfielder" },
    { number: 13, name: "Simon Misaki Opio", position: "Midfielder" },
    { number: 17, name: "Micheal Siwu", position: "Midfielder" },
    { number: 25, name: "Kakomo Amir", position: "Midfielder" },
    { number: 27, name: "Collins Alinaitwe", position: "Midfielder" },
    { number: 31, name: "Joshua Omara", position: "Midfielder" },
    { number: 32, name: "Andrea Ogwal", position: "Midfielder" },
    { number: 33, name: "Gerald Ronald Kirya", position: "Midfielder" },
  ];

  const forwards = [
    { number: 7, name: "Emmanuel Wabulo", position: "Forward" },
    { number: 10, name: "Innocent Maduka", position: "Forward" },
    { number: 12, name: "Baker Buyala", position: "Forward" },
    { number: 14, name: "Nathan Oloro", position: "Forward" },
    { number: 16, name: "Steven Kabuye", position: "Forward" },
    { number: 20, name: "Paul Elias Oonyu", position: "Forward" },
    { number: 21, name: "Emmanuel Janan Okech", position: "Forward" },
    { number: 23, name: "Oscar Richard Otim", position: "Forward" },
    { number: 28, name: "Amutuhaire Isaac", position: "Forward" },
  ];

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
            onClick={() => setActiveTab('womens-team')}
            className={`px-6 py-2 font-heading uppercase tracking-wider text-sm font-bold rounded-sm whitespace-nowrap transition-colors ${activeTab === 'womens-team' ? 'bg-brand-red text-white' : 'bg-brand-gray text-gray-400 hover:text-white'}`}
          >
            Women's Team
          </button>
          <button 
            onClick={() => setActiveTab('junior-team')}
            className={`px-6 py-2 font-heading uppercase tracking-wider text-sm font-bold rounded-sm whitespace-nowrap transition-colors ${activeTab === 'junior-team' ? 'bg-brand-red text-white' : 'bg-brand-gray text-gray-400 hover:text-white'}`}
          >
            Junior/Academy Team
          </button>
        </div>

        {activeTab === 'first-team' && (
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-white mb-6 border-b border-gray-800 pb-2">Goalkeepers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {goalkeepers.map((person) => (
                  <PlayerCard key={person.number} {...person} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-white mb-6 border-b border-gray-800 pb-2">Defenders</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {defenders.map((person) => (
                  <PlayerCard key={person.number} {...person} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-white mb-6 border-b border-gray-800 pb-2">Midfielders</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {midfielders.map((person) => (
                  <PlayerCard key={person.number} {...person} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-white mb-6 border-b border-gray-800 pb-2">Forwards</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {forwards.map((person) => (
                  <PlayerCard key={person.number} {...person} />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'coaching-staff' && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h3 className="text-2xl font-heading uppercase text-gray-400 mb-4">Coaching Staff</h3>
            <p className="text-gray-500 max-w-md">The new coaching staff will be officially unveiled soon. Stay tuned for updates.</p>
          </div>
        )}

        {activeTab === 'womens-team' && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h3 className="text-2xl font-heading uppercase text-gray-400 mb-4">Lira City Queens FC</h3>
            <p className="text-gray-500 max-w-md">Our Women's Team will be officially unveiled soon. Stay tuned for updates.</p>
          </div>
        )}

        {activeTab === 'junior-team' && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h3 className="text-2xl font-heading uppercase text-gray-400 mb-4">Junior / Academy Team</h3>
            <p className="text-gray-500 max-w-md">The Junior and Academy Team squads will be officially unveiled soon. Stay tuned for updates.</p>
          </div>
        )}
      </div>
    </div>
  );
}
