"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Ticket, CheckCircle, ChevronRight, Users, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const matches = [
  {
    id: 1,
    homeTeam: "Blacks Power FC",
    awayTeam: "KCCA FC",
    date: "Aug 12, 2026",
    time: "16:00",
    stadium: "Akiibua Stadium, Lira",
    competition: "Uganda Premier League — Matchday 1",
    isHome: true,
    featured: true,
  },
  {
    id: 2,
    homeTeam: "Blacks Power FC",
    awayTeam: "SC Villa",
    date: "Aug 26, 2026",
    time: "16:00",
    stadium: "Akiibua Stadium, Lira",
    competition: "Uganda Premier League — Matchday 3",
    isHome: true,
    featured: false,
  },
  {
    id: 3,
    homeTeam: "Blacks Power FC",
    awayTeam: "Express FC",
    date: "Sep 9, 2026",
    time: "14:00",
    stadium: "Akiibua Stadium, Lira",
    competition: "Uganda Premier League — Matchday 5",
    isHome: true,
    featured: false,
  },
];

const ticketTiers = [
  {
    id: "vip",
    name: "VIP Lounge",
    price: 50000,
    color: "from-yellow-500/20 to-yellow-600/5",
    border: "border-yellow-500/40",
    badge: "bg-yellow-500 text-black",
    badgeText: "Premium",
    icon: <Star size={18} className="text-yellow-400" />,
    perks: ["Cushioned seating", "Complimentary refreshments", "Private lounge access", "Meet & greet opportunity"],
    available: 40,
  },
  {
    id: "covered",
    name: "Covered Stand",
    price: 20000,
    color: "from-brand-red/20 to-brand-red/5",
    border: "border-brand-red/40",
    badge: "bg-brand-red text-white",
    badgeText: "Most Popular",
    icon: <Shield size={18} className="text-brand-red" />,
    perks: ["Sheltered from sun & rain", "Excellent pitch view", "Numbered seats", "Food stalls nearby"],
    available: 180,
  },
  {
    id: "terrace",
    name: "Terrace",
    price: 5000,
    color: "from-gray-700/30 to-gray-800/10",
    border: "border-gray-600/40",
    badge: "bg-gray-600 text-white",
    badgeText: "Best Value",
    icon: <Users size={18} className="text-gray-400" />,
    perks: ["General admission", "Supporter section", "High atmosphere", "Standing area"],
    available: 500,
  },
];

interface TicketSelection {
  matchId: number;
  tierId: string;
  quantity: number;
}

export default function TicketsPage() {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState<'match' | 'tier' | 'summary' | 'confirm'>('match');
  const [selection, setSelection] = useState<TicketSelection | null>(null);

  const currentMatch = matches.find(m => m.id === selectedMatch);
  const currentTier = ticketTiers.find(t => t.id === selectedTier);
  const total = currentTier ? currentTier.price * quantity : 0;

  const handleSelectMatch = (id: number) => {
    setSelectedMatch(id);
    setSelectedTier(null);
    setQuantity(1);
    setStep('tier');
  };

  const handleSelectTier = (id: string) => {
    setSelectedTier(id);
    setStep('summary');
  };

  const handleConfirm = () => {
    setSelection({ matchId: selectedMatch!, tierId: selectedTier!, quantity });
    setStep('confirm');
  };

  const handleReset = () => {
    setSelectedMatch(null);
    setSelectedTier(null);
    setQuantity(1);
    setSelection(null);
    setStep('match');
  };

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-brand-gray border-b border-brand-red pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/logo.png')] bg-no-repeat bg-right bg-contain" />
        {/* Decorative diagonal */}
        <div className="absolute bottom-0 right-0 w-96 h-full bg-brand-red/5 -skew-x-12" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-brand-red font-heading tracking-widest uppercase text-sm mb-3 flex items-center gap-2">
            <Ticket size={14} /> Match Tickets
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">
            Get Your <span className="text-brand-red">Tickets</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-xl">
            Secure your seat at Akiibua Stadium and witness the Warriors fight in the Uganda Premier League.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      {step !== 'confirm' && (
        <div className="border-b border-gray-800 bg-brand-gray/50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm font-heading uppercase tracking-wider">
            {(['match', 'tier', 'summary'] as const).map((s, i) => (
              <React.Fragment key={s}>
                <span className={`flex items-center gap-1.5 transition-colors ${step === s || (step === 'summary' && s !== 'summary') || (step === 'tier' && s === 'match') ? 'text-white' : 'text-gray-600'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black border transition-colors ${
                    (s === 'match' && ['tier', 'summary'].includes(step)) || (s === 'tier' && step === 'summary')
                      ? 'bg-brand-red border-brand-red text-white'
                      : step === s
                      ? 'border-brand-red text-brand-red'
                      : 'border-gray-700 text-gray-600'
                  }`}>{i + 1}</span>
                  {s === 'match' ? 'Select Match' : s === 'tier' ? 'Choose Ticket' : 'Review'}
                </span>
                {i < 2 && <ChevronRight size={14} className="text-gray-700 shrink-0" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* STEP 1: Select Match */}
        <AnimatePresence mode="wait">
          {step === 'match' && (
            <motion.div
              key="match"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-heading font-bold uppercase mb-8">
                Upcoming <span className="text-brand-red">Home Matches</span>
              </h2>
              <div className="space-y-4">
                {matches.map(match => (
                  <motion.button
                    key={match.id}
                    onClick={() => handleSelectMatch(match.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full text-left group bg-brand-gray border border-gray-800 hover:border-brand-red/50 rounded-xl overflow-hidden transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row items-stretch">
                      {/* Match info */}
                      <div className="flex-1 p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs font-heading font-bold text-brand-red uppercase tracking-widest">{match.competition}</span>
                          {match.featured && (
                            <span className="bg-accent-gold text-black text-[10px] font-black font-heading px-2 py-0.5 rounded-sm uppercase tracking-wide">Featured</span>
                          )}
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          {/* Home */}
                          <div className="flex-1 text-center">
                            <div className="w-16 h-16 mx-auto bg-black rounded-full border border-gray-800 flex items-center justify-center font-heading font-black text-xl mb-2 group-hover:border-brand-red/30 transition-colors">
                              BP
                            </div>
                            <p className="font-heading font-bold text-base uppercase leading-tight">{match.homeTeam}</p>
                          </div>

                          {/* VS */}
                          <div className="flex flex-col items-center shrink-0">
                            <div className="text-gray-600 font-heading text-2xl font-black">VS</div>
                          </div>

                          {/* Away */}
                          <div className="flex-1 text-center">
                            <div className="w-16 h-16 mx-auto bg-black rounded-full border border-gray-800 flex items-center justify-center font-heading font-black text-sm mb-2 group-hover:border-gray-700 transition-colors">
                              {match.awayTeam.substring(0, 3).toUpperCase()}
                            </div>
                            <p className="font-heading font-bold text-base uppercase leading-tight">{match.awayTeam}</p>
                          </div>
                        </div>
                      </div>

                      {/* Date & CTA */}
                      <div className="md:w-64 bg-black/30 p-6 flex flex-col justify-between gap-4 border-t md:border-t-0 md:border-l border-gray-800">
                        <div className="space-y-2 text-sm text-gray-400">
                          <p className="flex items-center gap-2"><Calendar size={14} className="text-brand-red shrink-0" />{match.date}</p>
                          <p className="flex items-center gap-2"><Clock size={14} className="text-brand-red shrink-0" />{match.time} EAT</p>
                          <p className="flex items-center gap-2"><MapPin size={14} className="text-brand-red shrink-0" />{match.stadium}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-heading uppercase">From UGX 5,000</span>
                          <span className="text-brand-red font-heading font-bold text-sm uppercase group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Select <ChevronRight size={14} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: Select Ticket Tier */}
          {step === 'tier' && currentMatch && (
            <motion.div
              key="tier"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={() => setStep('match')} className="text-gray-500 hover:text-white font-heading text-sm uppercase tracking-wider mb-8 flex items-center gap-1 transition-colors">
                ← Back to matches
              </button>

              {/* Match summary pill */}
              <div className="bg-brand-gray border border-gray-800 rounded-xl p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-brand-red font-heading uppercase tracking-widest mb-1">{currentMatch.competition}</p>
                  <p className="font-heading font-bold uppercase text-lg">{currentMatch.homeTeam} vs {currentMatch.awayTeam}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Calendar size={13} />{currentMatch.date}</span>
                  <span className="flex items-center gap-1"><Clock size={13} />{currentMatch.time}</span>
                </div>
              </div>

              <h2 className="text-3xl font-heading font-bold uppercase mb-8">
                Choose Your <span className="text-brand-red">Ticket</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ticketTiers.map(tier => (
                  <motion.button
                    key={tier.id}
                    onClick={() => handleSelectTier(tier.id)}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`text-left rounded-2xl border bg-gradient-to-b ${tier.color} ${tier.border} p-6 flex flex-col gap-4 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 relative overflow-hidden`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {tier.icon}
                        <span className="font-heading font-black uppercase tracking-wide text-base">{tier.name}</span>
                      </div>
                      <span className={`text-[10px] font-black font-heading px-2 py-0.5 rounded-sm uppercase tracking-wide ${tier.badge}`}>
                        {tier.badgeText}
                      </span>
                    </div>

                    <div>
                      <span className="font-heading font-black text-3xl text-white">UGX {tier.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm"> / person</span>
                    </div>

                    <ul className="space-y-2">
                      {tier.perks.map(perk => (
                        <li key={perk} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle size={14} className="text-green-400 shrink-0 mt-0.5" />
                          {perk}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{tier.available} seats left</span>
                      <span className="text-brand-red font-heading font-bold text-sm uppercase inline-flex items-center gap-1">
                        Select <ChevronRight size={13} />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: Summary */}
          {step === 'summary' && currentMatch && currentTier && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <button onClick={() => setStep('tier')} className="text-gray-500 hover:text-white font-heading text-sm uppercase tracking-wider mb-8 flex items-center gap-1 transition-colors">
                ← Back to ticket types
              </button>

              <h2 className="text-3xl font-heading font-bold uppercase mb-8">
                Review Your <span className="text-brand-red">Order</span>
              </h2>

              <div className="bg-brand-gray border border-gray-800 rounded-2xl overflow-hidden">
                {/* Match header */}
                <div className="bg-brand-red/10 border-b border-gray-800 p-6">
                  <p className="text-xs text-brand-red font-heading uppercase tracking-widest mb-1">{currentMatch.competition}</p>
                  <p className="font-heading font-black uppercase text-2xl">{currentMatch.homeTeam} <span className="text-gray-500">vs</span> {currentMatch.awayTeam}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5"><Calendar size={13} className="text-brand-red" />{currentMatch.date} at {currentMatch.time} EAT</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} className="text-brand-red" />{currentMatch.stadium}</span>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Ticket type */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-heading mb-1">Ticket Type</p>
                      <p className="font-heading font-bold uppercase text-lg">{currentTier.name}</p>
                    </div>
                    <span className={`text-xs font-black font-heading px-2.5 py-1 rounded-sm uppercase tracking-wide ${currentTier.badge}`}>
                      {currentTier.badgeText}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-heading mb-3">Quantity</p>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                        className="w-10 h-10 rounded-full border border-gray-700 hover:border-brand-red text-xl font-bold flex items-center justify-center transition-colors"
                      >−</button>
                      <span className="font-heading font-black text-3xl w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(q => Math.min(10, q + 1))}
                        className="w-10 h-10 rounded-full border border-gray-700 hover:border-brand-red text-xl font-bold flex items-center justify-center transition-colors"
                      >+</button>
                      <span className="text-gray-500 text-sm ml-2">max 10 per order</span>
                    </div>
                  </div>

                  {/* Price breakdown */}
                  <div className="border-t border-gray-800 pt-4 space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>UGX {currentTier.price.toLocaleString()} × {quantity}</span>
                      <span>UGX {total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-heading font-black text-2xl text-white">
                      <span>Total</span>
                      <span className="text-brand-red">UGX {total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={handleConfirm}
                    variant="solidRed"
                    className="w-full uppercase tracking-widest text-base py-4 font-black"
                  >
                    <Ticket size={16} className="mr-2" />
                    Confirm & Pay
                  </Button>
                  <p className="text-center text-xs text-gray-600">Payment collected at the stadium gate. Bring this confirmation.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Confirmation */}
          {step === 'confirm' && selection && currentMatch && currentTier && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-lg mx-auto text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 mx-auto bg-green-500/10 border-2 border-green-500 rounded-full flex items-center justify-center mb-8"
              >
                <CheckCircle size={48} className="text-green-400" />
              </motion.div>

              <h2 className="text-4xl font-heading font-black uppercase mb-3">Booking <span className="text-green-400">Confirmed!</span></h2>
              <p className="text-gray-400 mb-8">Show this confirmation at the gate on matchday.</p>

              {/* Ticket card */}
              <div className="bg-brand-gray border border-gray-800 rounded-2xl overflow-hidden text-left mb-8">
                <div className="bg-brand-red p-4 flex items-center justify-between">
                  <span className="font-heading font-black uppercase tracking-widest text-white">Blacks Power FC</span>
                  <Ticket size={20} className="text-white/70" />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-heading">Match</p>
                    <p className="font-heading font-bold text-lg uppercase">{currentMatch.homeTeam} vs {currentMatch.awayTeam}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-heading">Date & Time</p>
                      <p className="font-heading font-bold">{currentMatch.date} · {currentMatch.time}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-heading">Venue</p>
                      <p className="font-heading font-bold">{currentMatch.stadium}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-heading">Ticket Type</p>
                      <p className="font-heading font-bold">{currentTier.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-heading">Quantity</p>
                      <p className="font-heading font-bold">{selection.quantity} ticket{selection.quantity > 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-800 pt-4 flex justify-between items-center">
                    <span className="text-gray-400 font-heading uppercase tracking-wider text-sm">Total Due at Gate</span>
                    <span className="font-heading font-black text-2xl text-brand-red">UGX {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button onClick={handleReset} variant="outline" className="uppercase tracking-widest w-full">
                Book Another Ticket
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
