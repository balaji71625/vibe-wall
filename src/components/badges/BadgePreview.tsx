
import React from 'react';
import { BadgeIcon } from './index';
import { Badge as BadgeType } from "@/types";

interface BadgePreviewProps {
  title: string;
  badges: BadgeType[];
}

const BadgePreview: React.FC<BadgePreviewProps> = ({ title, badges }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
        {badges.slice(0, 5).map((badge) => (
          <BadgeIcon key={badge.id} badge={badge} size="sm" />
        ))}
      </div>
    </div>
  );
};

export default BadgePreview;

