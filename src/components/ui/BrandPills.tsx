import React from 'react'
import { LucideIcon } from 'lucide-react'
interface BrandPillProps {
  icon?: LucideIcon
  iconImage?: string
  label: string
  className?: string
  style?: React.CSSProperties
  rotation?: number
  iconColor?: string
  imageOnly?: boolean
  customLabel?: React.ReactNode
}
export function BrandPill({
  icon: Icon,
  iconImage,
  label,
  className = '',
  style,
  rotation = 0,
  iconColor = '#9CA3AF',
  imageOnly = false,
  customLabel,
}: BrandPillProps) {
  return (
    <div
      className={`absolute flex items-center gap-2 ${imageOnly ? 'px-2 py-2' : 'px-4 py-2'} bg-[#1A1A1A] rounded-full shadow-xl backdrop-blur-sm text-gray-300 hover:scale-105 hover:bg-[#252525] transition-all duration-300 cursor-default z-10 ${className}`}
      style={{
        ...style,
        transform: `rotate(${rotation}deg)`,
        border: '2px solid transparent',
        backgroundImage: 'linear-gradient(#1A1A1A, #1A1A1A), linear-gradient(135deg, #2BFFFF, transparent)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {iconImage ? (
        <img src={iconImage} alt={label} className="w-4 h-4 object-contain" />
      ) : (
        Icon && <Icon className="w-4 h-4" style={{ color: iconColor }} />
      )}
      {!imageOnly && (
        customLabel ? customLabel : <span className="text-sm font-medium">{label}</span>
      )}
    </div>
  )
}
