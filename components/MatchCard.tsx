import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time?: string;
  stadium?: string;
  competition: string;
  homeScore?: number;
  awayScore?: number;
  isResult?: boolean;
}

export function MatchCard({
  homeTeam,
  awayTeam,
  date,
  time,
  stadium,
  competition,
  homeScore,
  awayScore,
  isResult = false
}: MatchCardProps) {
  const isHome = homeTeam === "Blacks Power FC";
  const outcome = homeScore !== undefined && awayScore !== undefined
    ? (isHome ? (homeScore > awayScore ? 'W' : homeScore < awayScore ? 'L' : 'D') : (awayScore > homeScore ? 'W' : awayScore < homeScore ? 'L' : 'D'))
    : null;

  const outcomeBg = outcome === 'W' ? 'bg-green-500' : outcome === 'L' ? 'bg-brand-red' : 'bg-gray-600';

  // Compact row layout for results
  if (isResult) {
    return (
      <div className="relative flex items-center gap-3 bg-brand-gray border border-gray-800 rounded-lg px-4 py-2.5 hover:border-gray-600 transition-colors overflow-hidden">
        {/* outcome strip */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 ${outcomeBg}`} />

        {/* Outcome badge */}
        <span className={`ml-1 text-xs font-heading font-black w-5 text-center ${outcome === 'W' ? 'text-green-400' : outcome === 'L' ? 'text-brand-red' : 'text-gray-400'}`}>
          {outcome}
        </span>

        {/* Home team */}
        <span className={`font-heading font-bold text-sm uppercase flex-1 text-right truncate ${homeTeam === 'Blacks Power FC' ? 'text-white' : 'text-gray-300'}`}>
          {homeTeam}
        </span>

        {/* Score */}
        <span className="font-heading font-black text-base text-white bg-black px-3 py-1 rounded border border-gray-700 shrink-0 tabular-nums">
          {homeScore} – {awayScore}
        </span>

        {/* Away team */}
        <span className={`font-heading font-bold text-sm uppercase flex-1 truncate ${awayTeam === 'Blacks Power FC' ? 'text-white' : 'text-gray-300'}`}>
          {awayTeam}
        </span>

        {/* Date */}
        <span className="text-xs text-gray-500 shrink-0 hidden sm:block">{date}</span>
      </div>
    );
  }

  // Full card layout for upcoming fixtures
  return (
    <div className="bg-brand-gray rounded-xl border border-gray-800 p-6 hover:border-brand-red/50 transition-colors flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-bold tracking-wider text-brand-red uppercase">{competition}</span>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1"><Calendar size={14} /> {date}</span>
          {time && <span className="flex items-center gap-1"><Clock size={14} /> {time}</span>}
        </div>
      </div>

      <div className="flex items-center justify-between flex-grow">
        <div className="text-center w-2/5">
          <div className="w-14 h-14 mx-auto bg-black rounded-full mb-2 flex items-center justify-center border border-gray-800 text-sm font-heading font-bold">
            {homeTeam.substring(0, 3).toUpperCase()}
          </div>
          <h4 className="font-heading font-bold text-base uppercase leading-tight">{homeTeam}</h4>
        </div>

        <div className="w-1/5 flex flex-col items-center justify-center">
          <div className="bg-black px-3 py-1.5 rounded text-gray-500 font-heading text-xl border border-gray-800">
            VS
          </div>
        </div>

        <div className="text-center w-2/5">
          <div className="w-14 h-14 mx-auto bg-black rounded-full mb-2 flex items-center justify-center border border-gray-800 text-sm font-heading font-bold">
            {awayTeam.substring(0, 3).toUpperCase()}
          </div>
          <h4 className="font-heading font-bold text-base uppercase leading-tight">{awayTeam}</h4>
        </div>
      </div>

      {stadium && (
        <div className="mt-5 pt-4 border-t border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin size={14} className="text-brand-red" />
            <span>{stadium}</span>
          </div>
          <Button variant="outline" size="sm" className="font-heading uppercase tracking-wider text-xs">
            Match Center
          </Button>
        </div>
      )}
    </div>
  );
}
