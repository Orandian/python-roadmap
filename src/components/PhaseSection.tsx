"use client";

import { useState } from "react";
import { Phase } from "@/types";
import MilestoneCard from "@/components/MilestoneCard";

const PHASE_COLORS = [
  { ring: "ring-blue-500/40", badge: "bg-blue-600", label: "text-blue-300", bar: "bg-blue-500" },
  { ring: "ring-purple-500/40", badge: "bg-purple-600", label: "text-purple-300", bar: "bg-purple-500" },
  { ring: "ring-yellow-500/40", badge: "bg-yellow-600", label: "text-yellow-300", bar: "bg-yellow-500" },
  { ring: "ring-orange-500/40", badge: "bg-orange-600", label: "text-orange-300", bar: "bg-orange-500" },
  { ring: "ring-emerald-500/40", badge: "bg-emerald-600", label: "text-emerald-300", bar: "bg-emerald-500" },
];

interface PhaseSectionProps {
  phase: Phase;
  completedIds: Set<string>;
  isLoggedIn: boolean;
  onToggle: (id: string, completed: boolean) => void;
}

export default function PhaseSection({
  phase,
  completedIds,
  isLoggedIn,
  onToggle,
}: PhaseSectionProps) {
  const [open, setOpen] = useState(phase.phase === 1);

  const colors = PHASE_COLORS[(phase.phase - 1) % PHASE_COLORS.length];
  const completedCount = phase.milestones.filter((m) => completedIds.has(m.id)).length;
  const total = phase.milestones.length;
  const phaseComplete = completedCount === total;

  return (
    <div
      className={`rounded-2xl border bg-gray-900/40 ring-1 ${colors.ring} overflow-hidden transition-all`}
    >
      {/* Phase header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-800/40 transition cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white ${colors.badge}`}
          >
            {phase.phase}
          </span>
          <div className="text-left">
            <h2 className={`font-semibold text-base ${colors.label}`}>{phase.title}</h2>
            <p className="text-gray-500 text-xs mt-0.5">
              {completedCount}/{total} completed{phaseComplete ? " ✓" : ""}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Mini progress bar */}
          <div className="hidden sm:block w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${colors.bar}`}
              style={{ width: `${(completedCount / total) * 100}%` }}
            />
          </div>
          <svg
            className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Milestones */}
      {open && (
        <div className="px-4 pb-4 space-y-2 border-t border-gray-800">
          <div className="pt-3 space-y-2">
            {phase.milestones.map((milestone) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                isCompleted={completedIds.has(milestone.id)}
                isLoggedIn={isLoggedIn}
                onToggle={onToggle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
