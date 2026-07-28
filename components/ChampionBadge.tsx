import React from 'react';
import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ChampionBadge({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-3 py-1 bg-brand-gray rounded-full border border-accent-gold/30 text-accent-gold text-sm font-heading tracking-wide shadow-md", className)}>
      <Trophy className="w-4 h-4" />
      <span>25/26 CHAMPIONS</span>
    </div>
  );
}
