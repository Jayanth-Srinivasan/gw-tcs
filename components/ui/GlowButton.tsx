import React from "react";

interface GlowButtonProps {
  label: string;
}

const GlowButton: React.FC<GlowButtonProps> = ({ label }) => {
  return (
    <button className="bg-gray-900 no-underline group cursor-pointer relative shadow-2xl shadow-black/40 rounded-full p-px text-base font-semibold leading-6 text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.5)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-gray-950 py-3 px-7 ring-1 ring-white/10">
        <span className="text-lg">{label}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.75rem] h-px w-[calc(100%-3.5rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-50"></span>
    </button>
  );
};

export default GlowButton;
