import React from "react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  return (
    <div className="relative inline-block w-full">
      <span className="group cursor-pointer w-full">
        {children}
        <div className=" absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-full p-3 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          {content}
        </div>
      </span>
    </div>
  );
}
