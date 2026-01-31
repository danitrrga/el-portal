import React from 'react';

interface ProgressArcProps {
    value: number;
    max: number;
    label: string;
    sublabel?: string;
    color?: 'pacific' | 'bali';
    size?: 'sm' | 'md';
}

export const ProgressArc: React.FC<ProgressArcProps> = ({
    value,
    max,
    label,
    sublabel,
    color = 'pacific',
    size = 'md'
}) => {
    const percentage = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;

    // Arc configuration (270 degree arc)
    const radius = size === 'sm' ? 36 : 44;
    const strokeWidth = size === 'sm' ? 6 : 8;
    const circumference = 2 * Math.PI * radius;
    const arcLength = circumference * 0.75; // 270 degrees
    const offset = arcLength * (1 - percentage / 100);

    const colorClass = color === 'pacific'
        ? 'text-pacific-500'
        : 'text-bali-500';

    const glowClass = color === 'pacific'
        ? 'drop-shadow-[0_0_8px_rgba(14,165,233,0.4)]'
        : 'drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]';

    const svgSize = size === 'sm' ? 100 : 120;

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative" style={{ width: svgSize, height: svgSize * 0.75 }}>
                <svg
                    className="transform"
                    viewBox={`0 0 ${svgSize} ${svgSize * 0.85}`}
                    style={{ width: '100%', height: '100%' }}
                >
                    {/* Background Arc */}
                    <circle
                        cx={svgSize / 2}
                        cy={svgSize / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeLinecap="round"
                        strokeDasharray={`${arcLength} ${circumference}`}
                        strokeDashoffset={0}
                        className="text-graphite-100 dark:text-graphite-800"
                        transform={`rotate(135 ${svgSize / 2} ${svgSize / 2})`}
                    />

                    {/* Value Arc */}
                    <circle
                        cx={svgSize / 2}
                        cy={svgSize / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeLinecap="round"
                        strokeDasharray={`${arcLength} ${circumference}`}
                        strokeDashoffset={offset}
                        className={`${colorClass} ${glowClass} transition-all duration-700 ease-out`}
                        transform={`rotate(135 ${svgSize / 2} ${svgSize / 2})`}
                    />
                </svg>

                {/* Center Value */}
                <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingTop: size === 'sm' ? '8px' : '12px' }}>
                    <span className={`font-display font-bold text-graphite-900 dark:text-white tracking-tight ${size === 'sm' ? 'text-2xl' : 'text-3xl'}`}>
                        {typeof value === 'number' && value % 1 === 0 ? value : Math.round(value)}
                        {label.includes('%') ? '' : ''}
                    </span>
                    {sublabel && (
                        <span className="text-[8px] font-bold uppercase text-graphite-400 mt-0.5">
                            {sublabel}
                        </span>
                    )}
                </div>
            </div>

            {/* Label Below */}
            <div className="text-[10px] font-bold uppercase tracking-widest text-graphite-500 mt-1 text-center">
                {label}
            </div>
        </div>
    );
};
