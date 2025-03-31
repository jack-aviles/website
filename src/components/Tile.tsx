import React, { ReactNode } from 'react';

interface TileProps {
  name?: string;
  description?: string;
  icon?: ReactNode;
  iconLink?: string;
}

export default function Tile({ 
  name = "Project Title", 
  description = "Project description goes here",
  icon,
  iconLink
}: TileProps) {
  return (
    <div className="w-72 h-80 m-10 rounded-2xl bg-white shadow-xl hover:scale-105 transition-transform duration-200 p-4 relative">
      {/* Icon in top right corner, if provided */}
      {icon && (
        <div className="absolute top-2 right-2">
          {iconLink ? (
            <a 
              href={iconLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              {icon}
            </a>
          ) : (
            icon
          )}
        </div>
      )}

      <div className="w-full h-full flex flex-col">
        <h3 className="text-lg font-medium pb-3">{name}</h3>
        <hr className="border-t border-gray-300 w-full my-2" />
        <p className="text-gray-600 mt-3">{description}</p>
      </div>
    </div>
  );
}



