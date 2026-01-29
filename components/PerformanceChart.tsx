
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PerformanceChartProps {
    data: Array<{ 
        date: string; 
        score: number; 
        details?: Array<{ habit: { name: string }; done: boolean }>;
        [key: string]: any 
    }>;
    className?: string;
    showGrid?: boolean;
    color?: string;
    onDataSelect?: (data: any) => void;
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        // Filter only completed habits for the tooltip list
        const completedHabits = data.details?.filter((d: any) => d.done) || [];
        
        return (
            <div className="bg-graphite-900/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-2xl min-w-[150px] animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex justify-between items-start mb-2 border-b border-white/10 pb-2">
                    <div>
                        <p className="text-[10px] text-graphite-400 font-bold uppercase tracking-wider">
                            {new Date(label).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </p>
                        <p className="text-xl font-bold text-white flex items-center gap-1 leading-none mt-1">
                            {payload[0].value}%
                        </p>
                    </div>
                    <div className={`w-2 h-2 rounded-full mt-1 ${payload[0].value >= 80 ? 'bg-bali-500' : 'bg-pacific-500'}`}></div>
                </div>

                {/* Micro Habit List */}
                <div className="space-y-1.5">
                    {completedHabits.length > 0 ? (
                        <>
                            {completedHabits.slice(0, 4).map((detail: any, i: number) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-white/50 shrink-0"></div>
                                    <span className="text-[9px] text-graphite-300 font-medium truncate max-w-[120px]">
                                        {detail.habit.name}
                                    </span>
                                </div>
                            ))}
                            {completedHabits.length > 4 && (
                                <p className="text-[9px] text-graphite-500 pl-3 italic">
                                    + {completedHabits.length - 4} more completed
                                </p>
                            )}
                        </>
                    ) : (
                        <p className="text-[9px] text-graphite-500 italic">No habits recorded.</p>
                    )}
                </div>
            </div>
        );
    }
    return null;
};

export const PerformanceChart: React.FC<PerformanceChartProps> = ({
    data,
    className = "h-64 w-full",
    showGrid = true,
    color = "#0ea5e9", // Pacific-500
    onDataSelect
}) => {
    return (
        <div className={`select-none ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    onClick={(e) => {
                        if (onDataSelect && e && e.activePayload && e.activePayload[0]) {
                            onDataSelect(e.activePayload[0].payload);
                        }
                    }}
                >
                    <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                            <stop offset="95%" stopColor={color} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    
                    {showGrid && (
                        <CartesianGrid 
                            strokeDasharray="3 3" 
                            stroke="#52525b" 
                            opacity={0.4}
                            vertical={false}  
                        />
                    )}
                    
                    <XAxis 
                        dataKey="date" 
                        hide={true} 
                    />
                    
                    <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#a1a1aa', fontSize: 10, fontWeight: 500, fontFamily: 'monospace' }}
                        domain={[0, 100]}
                        ticks={[0, 25, 50, 75, 100]}
                        width={30}
                        interval={0}
                    />

                    <Tooltip 
                        content={<CustomTooltip />} 
                        cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: '4 4', opacity: 0.5 }} 
                    />

                    <Area 
                        type="monotone" 
                        dataKey="score" 
                        stroke={color} 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorScore)" 
                        activeDot={{ r: 5, strokeWidth: 0, fill: '#fff', stroke: 'none' }}
                        animationDuration={1000}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
