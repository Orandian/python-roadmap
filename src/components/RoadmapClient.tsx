"use client";

import { useState, useCallback } from "react";
import { User } from "@supabase/supabase-js";
import { ROADMAP, ALL_MILESTONE_IDS } from "@/lib/roadmap";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import PhaseSection from "@/components/PhaseSection";
import Link from "next/link";

interface RoadmapClientProps {
  user: User | null;
  initialCompleted: string[];
}

export default function RoadmapClient({ user, initialCompleted }: RoadmapClientProps) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(
    new Set(initialCompleted)
  );

  const handleToggle = useCallback(
    async (milestoneId: string, completed: boolean) => {
      if (!user) return;

      // Optimistic update
      setCompletedIds((prev) => {
        const next = new Set(prev);
        if (completed) {
          next.add(milestoneId);
        } else {
          next.delete(milestoneId);
        }
        return next;
      });

      try {
        const res = await fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ milestoneId, completed }),
        });

        if (!res.ok) {
          // Revert on failure
          setCompletedIds((prev) => {
            const next = new Set(prev);
            if (completed) {
              next.delete(milestoneId);
            } else {
              next.add(milestoneId);
            }
            return next;
          });
        }
      } catch {
        // Revert on network error
        setCompletedIds((prev) => {
          const next = new Set(prev);
          if (completed) {
            next.delete(milestoneId);
          } else {
            next.add(milestoneId);
          }
          return next;
        });
      }
    },
    [user]
  );

  const totalMilestones = ALL_MILESTONE_IDS.length;
  const completedCount = completedIds.size;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header user={user} />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Python Learning Roadmap
          </h1>
          <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-xl">
            A structured path from absolute beginner to Python specialist — 5 phases, {totalMilestones} milestones, curated resources.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-6 bg-gray-900/60 border border-gray-800 rounded-2xl p-5">
          <ProgressBar completed={completedCount} total={totalMilestones} />
        </div>

        {/* Auth nudge for logged-out users */}
        {!user && (
          <div className="mb-6 flex items-center justify-between gap-4 bg-blue-950/40 border border-blue-800/50 rounded-xl px-4 py-3">
            <p className="text-blue-300 text-sm">
              🔒 Sign in to track your progress across devices
            </p>
            <div className="flex gap-2 shrink-0">
              <Link
                href="/auth/login"
                className="text-xs px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 transition"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="text-xs px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}

        {/* Phases */}
        <div className="space-y-4">
          {ROADMAP.map((phase) => (
            <PhaseSection
              key={phase.phase}
              phase={phase}
              completedIds={completedIds}
              isLoggedIn={!!user}
              onToggle={handleToggle}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
          Built with Next.js &amp; Supabase · {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
