"use client";
import React, { useState } from 'react';
import { MatchCard } from '@/components/MatchCard';

export default function FixturesPage() {
  const [filter, setFilter] = useState<'all' | 'W' | 'D' | 'L'>('all');

  const upcoming = [
    { homeTeam: "Blacks Power FC", awayTeam: "KCCA FC", date: "Aug 12, 2026", time: "16:00", stadium: "Akiibua Stadium", competition: "Uganda Premier League" },
    { homeTeam: "Vipers SC", awayTeam: "Blacks Power FC", date: "Aug 19, 2026", time: "16:00", stadium: "St. Mary's Stadium", competition: "Uganda Premier League" },
    { homeTeam: "Blacks Power FC", awayTeam: "SC Villa", date: "Aug 26, 2026", time: "16:00", stadium: "Akiibua Stadium", competition: "Uganda Premier League" },
  ];

  // Full 2025/26 FUFA Big League season — all 30 match days
  const allResults = [
    // MD 30
    { homeTeam: "Onduparaka FC", awayTeam: "Blacks Power FC", date: "Jun 06, 2026", competition: "FUFA Big League", homeScore: 0, awayScore: 0, isResult: true },
    // MD 29
    { homeTeam: "Blacks Power FC", awayTeam: "Mbale Heroes", date: "May 24, 2026", competition: "FUFA Big League", homeScore: 4, awayScore: 0, isResult: true },
    // MD 28
    { homeTeam: "Kigezi HomeBoyz", awayTeam: "Blacks Power FC", date: "May 17, 2026", competition: "FUFA Big League", homeScore: 2, awayScore: 0, isResult: true },
    // MD 27
    { homeTeam: "Blacks Power FC", awayTeam: "Nebbi Central", date: "May 10, 2026", competition: "FUFA Big League", homeScore: 2, awayScore: 1, isResult: true },
    // MD 26
    { homeTeam: "Soltilo Bright Stars", awayTeam: "Blacks Power FC", date: "May 03, 2026", competition: "FUFA Big League", homeScore: 0, awayScore: 1, isResult: true },
    // MD 25
    { homeTeam: "Blacks Power FC", awayTeam: "Bunyaruguru United", date: "Apr 26, 2026", competition: "FUFA Big League", homeScore: 3, awayScore: 0, isResult: true },
    // MD 24
    { homeTeam: "Kiyinda Boys FC", awayTeam: "Blacks Power FC", date: "Apr 19, 2026", competition: "FUFA Big League", homeScore: 1, awayScore: 0, isResult: true },
    // MD 23
    { homeTeam: "Blacks Power FC", awayTeam: "Wakiso Giants FC", date: "Apr 12, 2026", competition: "FUFA Big League", homeScore: 2, awayScore: 1, isResult: true },
    // MD 22
    { homeTeam: "Ntugasaze FC", awayTeam: "Blacks Power FC", date: "Apr 05, 2026", competition: "FUFA Big League", homeScore: 1, awayScore: 0, isResult: true },
    // MD 21
    { homeTeam: "Blacks Power FC", awayTeam: "Kataka FC", date: "Apr 01, 2026", competition: "FUFA Big League", homeScore: 1, awayScore: 0, isResult: true },
    // MD 20
    { homeTeam: "Blacks Power FC", awayTeam: "Kaaro Karungi FC", date: "Mar 25, 2026", competition: "FUFA Big League", homeScore: 2, awayScore: 1, isResult: true },
    // MD 19
    { homeTeam: "Blacks Power FC", awayTeam: "CATDA FC", date: "Mar 15, 2026", competition: "FUFA Big League", homeScore: 2, awayScore: 1, isResult: true },
    // MD 18
    { homeTeam: "Iganga United", awayTeam: "Blacks Power FC", date: "Mar 08, 2026", competition: "FUFA Big League", homeScore: 0, awayScore: 0, isResult: true },
    // MD 17
    { homeTeam: "Paidha Black Angels", awayTeam: "Blacks Power FC", date: "Mar 01, 2026", competition: "FUFA Big League", homeScore: 2, awayScore: 0, isResult: true },
    // MD 16
    { homeTeam: "Young Elephants FC", awayTeam: "Blacks Power FC", date: "Feb 22, 2026", competition: "FUFA Big League", homeScore: 1, awayScore: 0, isResult: true },
    // MD 15
    { homeTeam: "Blacks Power FC", awayTeam: "Mbale Heroes", date: "Jan 08, 2026", competition: "FUFA Big League", homeScore: 0, awayScore: 0, isResult: true },
    // MD 14
    { homeTeam: "Blacks Power FC", awayTeam: "Kigezi HomeBoyz", date: "Jan 01, 2026", competition: "FUFA Big League", homeScore: 1, awayScore: 0, isResult: true },
    // MD 13
    { homeTeam: "Blacks Power FC", awayTeam: "Soltilo Bright Stars", date: "Dec 14, 2025", competition: "FUFA Big League", homeScore: 3, awayScore: 1, isResult: true },
    // MD 12
    { homeTeam: "Bunyaruguru United", awayTeam: "Blacks Power FC", date: "Dec 07, 2025", competition: "FUFA Big League", homeScore: 1, awayScore: 0, isResult: true },
    // MD 11
    { homeTeam: "Blacks Power FC", awayTeam: "Kiyinda Boys FC", date: "Nov 30, 2025", competition: "FUFA Big League", homeScore: 3, awayScore: 1, isResult: true },
    // MD 10
    { homeTeam: "Blacks Power FC", awayTeam: "Wakiso Giants FC", date: "Nov 23, 2025", competition: "FUFA Big League", homeScore: 0, awayScore: 0, isResult: true },
    // MD 9
    { homeTeam: "Blacks Power FC", awayTeam: "Ntugasaze FC", date: "Nov 16, 2025", competition: "FUFA Big League", homeScore: 2, awayScore: 1, isResult: true },
    // MD 8
    { homeTeam: "Blacks Power FC", awayTeam: "Kataka FC", date: "Nov 09, 2025", competition: "FUFA Big League", homeScore: 1, awayScore: 1, isResult: true },
    // MD 7
    { homeTeam: "Blacks Power FC", awayTeam: "Young Elephants FC", date: "Nov 03, 2025", competition: "FUFA Big League", homeScore: 3, awayScore: 1, isResult: true },
    // MD 6
    { homeTeam: "CATDA FC", awayTeam: "Blacks Power FC", date: "Oct 26, 2025", competition: "FUFA Big League", homeScore: 0, awayScore: 0, isResult: true },
    // MD 5
    { homeTeam: "Blacks Power FC", awayTeam: "Iganga United", date: "Oct 19, 2025", competition: "FUFA Big League", homeScore: 1, awayScore: 0, isResult: true },
    // MD 4
    { homeTeam: "Blacks Power FC", awayTeam: "Kaaro Karungi FC", date: "Oct 16, 2025", competition: "FUFA Big League", homeScore: 2, awayScore: 0, isResult: true },
    // MD 3
    { homeTeam: "Paidha Black Angels", awayTeam: "Blacks Power FC", date: "Oct 11, 2025", competition: "FUFA Big League", homeScore: 1, awayScore: 0, isResult: true },
    // MD 2
    { homeTeam: "Blacks Power FC", awayTeam: "Nebbi Central", date: "Oct 09, 2025", competition: "FUFA Big League", homeScore: 0, awayScore: 0, isResult: true },
    // MD 1
    { homeTeam: "Blacks Power FC", awayTeam: "Onduparaka FC", date: "Sep 28, 2025", competition: "FUFA Big League", homeScore: 2, awayScore: 0, isResult: true },
  ];

  // Determine outcome from Blacks Power FC's perspective
  const getOutcome = (match: typeof allResults[0]) => {
    const bpHome = match.homeTeam === "Blacks Power FC";
    const bpScore = bpHome ? match.homeScore : match.awayScore;
    const oppScore = bpHome ? match.awayScore : match.homeScore;
    if (bpScore > oppScore) return 'W';
    if (bpScore === oppScore) return 'D';
    return 'L';
  };

  const filtered = filter === 'all' ? allResults : allResults.filter(m => getOutcome(m) === filter);

  // Season stats
  const wins = allResults.filter(m => getOutcome(m) === 'W').length;
  const draws = allResults.filter(m => getOutcome(m) === 'D').length;
  const losses = allResults.filter(m => getOutcome(m) === 'L').length;
  const goalsFor = allResults.reduce((sum, m) => sum + (m.homeTeam === "Blacks Power FC" ? m.homeScore : m.awayScore), 0);
  const goalsAgainst = allResults.reduce((sum, m) => sum + (m.homeTeam === "Blacks Power FC" ? m.awayScore : m.homeScore), 0);

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Header */}
      <div className="relative bg-brand-gray border-b border-brand-red pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">
            Fixtures & <span className="text-brand-red">Results</span>
          </h1>
          <p className="text-gray-400 mt-4">2025/26 FUFA Big League — Full Season</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Season Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-14 p-6 bg-brand-gray rounded-xl border border-gray-800">
          {[
            { label: "Points", value: "55", color: "text-accent-gold" },
            { label: "Wins", value: wins, color: "text-green-400" },
            { label: "Draws", value: draws, color: "text-yellow-400" },
            { label: "Losses", value: losses, color: "text-brand-red" },
            { label: "Goals", value: `${goalsFor} / ${goalsAgainst}`, color: "text-white" },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className={`text-3xl font-heading font-black ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Upcoming */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-heading font-bold uppercase mb-8 border-b border-gray-800 pb-4">
              Upcoming <span className="text-brand-red">Matches</span>
            </h2>
            <div className="space-y-4">
              {upcoming.map((match, idx) => (
                <MatchCard key={idx} {...match} />
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-gray-800 pb-4">
              <h2 className="text-3xl font-heading font-bold uppercase">
                2025/26 <span className="text-gray-500">Season</span>
              </h2>
              <div className="flex gap-2">
                {(['all', 'W', 'D', 'L'] as const).map(f => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-1.5 text-xs font-heading font-bold uppercase tracking-wider rounded-sm transition-colors ${
                      filter === f
                        ? f === 'W' ? 'bg-green-500 text-white'
                          : f === 'D' ? 'bg-yellow-500 text-black'
                          : f === 'L' ? 'bg-brand-red text-white'
                          : 'bg-brand-red text-white'
                        : 'bg-brand-gray text-gray-400 hover:text-white'
                    }`}
                  >
                    {f === 'all' ? 'All' : f === 'W' ? 'Wins' : f === 'D' ? 'Draws' : 'Losses'}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {filtered.map((match, idx) => (
                <MatchCard key={idx} {...match} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-gray-500 text-center py-12 font-heading">No matches found.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
