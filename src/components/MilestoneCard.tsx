"use client";

import { Milestone } from "@/types";

interface MilestoneCardProps {
  milestone: Milestone;
  isCompleted: boolean;
  isLoggedIn: boolean;
  onToggle: (id: string, completed: boolean) => void;
}

export default function MilestoneCard({
  milestone,
  isCompleted,
  isLoggedIn,
  onToggle,
}: MilestoneCardProps) {
  return (
    <div
      className={`group relative flex gap-4 p-5 rounded-xl border transition-all duration-200 ${
        isCompleted
          ? "bg-green-950/30 border-green-800/50"
          : "bg-gray-900/60 border-gray-800 hover:border-gray-700"
      }`}
    >
      {/* Completion toggle */}
      <div className="flex-shrink-0 pt-0.5">
        {isLoggedIn ? (
          <button
            onClick={() => onToggle(milestone.id, !isCompleted)}
            title={isCompleted ? "Mark incomplete" : "Mark complete"}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${
              isCompleted
                ? "bg-green-500 border-green-500 text-white"
                : "border-gray-600 hover:border-blue-400 bg-transparent"
            }`}
          >
            {isCompleted && (
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </button>
        ) : (
          <div className="w-6 h-6 rounded-full border-2 border-gray-700 bg-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          className={`font-medium text-sm leading-snug ${
            isCompleted ? "text-green-300 line-through decoration-green-600" : "text-gray-100"
          }`}
        >
          {milestone.title}
        </p>

        {/* Source links */}
        {milestone.sources.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2.5">
            {milestone.sources.map((src) => (
              <a
                key={src.url}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-gray-800 hover:bg-blue-900/40 text-gray-400 hover:text-blue-300 border border-gray-700 hover:border-blue-700 transition-all duration-150"
              >
                <svg
                  className="w-3 h-3 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {src.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
