import React from 'react';
import { SectionType } from '../types';
import { Plus, X } from 'lucide-react';

interface SectionInputProps {
  title: string;
  subtitle?: string;
  items: string[];
  type: SectionType;
  icon: React.ReactNode;
  placeholder: string | string[];
  onChange: (type: SectionType, index: number, value: string) => void;
  colorClass: string;
}

export const SectionInput: React.FC<SectionInputProps> = ({
  title,
  subtitle,
  items,
  type,
  icon,
  placeholder,
  onChange,
  colorClass,
}) => {
  const getPlaceholder = (index: number) => {
    if (Array.isArray(placeholder)) {
      return placeholder[index] || '';
    }
    return placeholder;
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${colorClass} bg-opacity-10 text-white`}>
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
          {subtitle && <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{subtitle}</p>}
        </div>
      </div>
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={`${type}-${index}`} className="relative group">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-mono text-sm select-none">
              {index + 1}.
            </span>
            <input
              type="text"
              value={item}
              onChange={(e) => onChange(type, index, e.target.value)}
              placeholder={getPlaceholder(index)}
              className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
            />
          </div>
        ))}
      </div>
    </div>
  );
};