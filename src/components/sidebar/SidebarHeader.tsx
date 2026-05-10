"use client";
import React from "react";
import Image from "next/image";

interface SidebarHeaderProps {
  isExpanded: boolean;
  isMobile: boolean;
  subtitle: string;
  onToggle: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  isExpanded,
  isMobile,
  subtitle,
  onToggle,
}) => {
  return (
    <div className="px-5 pt-6 pb-4 border-b border-gray-200 border-dashed dark:border-[#2C2F3F]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Icon - Show when sidebar is closed (desktop only) */}
          {!isExpanded && !isMobile && (
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-[#2C2F3F]">
              <div className="w-6 h-6 rounded-full bg-[#9E66FF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
            </div>
          )}
          {/* Logo Image - Show when sidebar is open or on mobile */}
          {(isExpanded || isMobile) && (
            <div className="flex flex-col items-center justify-start">
              <Image src="/logo.svg" alt="Logo" width={162} height={162} />
              <p className="text-gray-600 dark:text-[#909296] text-start pt-2 text-xs">{subtitle}</p>
            </div>
          )}
        </div>
        <button
          onClick={onToggle}
          className="text-gray-600 dark:text-[#98A2B3] hover:text-gray-900 dark:hover:text-white transition-colors shrink-0"
          aria-label="Toggle Sidebar"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-300 ${!isExpanded ? "rotate-180" : ""}`}
          >
            <path
              d="M20 17.44V6.56C20 5.14615 18.8539 4 17.44 4H6.56C5.14615 4 4 5.14615 4 6.56V17.44C4 18.8539 5.14615 20 6.56 20H17.44C18.8539 20 20 18.8539 20 17.44Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 8L8 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 9L12 12L15 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
