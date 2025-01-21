import React from "react";
import { cn } from "@/lib/utils";

interface SpeedometerProps {
  value: number;
  label: string;
  className?: string;
  colorClass?: string;
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
  animate?: boolean;
}

export const Speedometer = ({
  value,
  label,
  className,
  colorClass = "text-primary",
  showLabels = true,
  size = "md",
  animate = true,
}: SpeedometerProps) => {
  const rotation = (value / 100) * 180;
  
  const sizeClasses = {
    sm: "h-[80px] w-[160px]",
    md: "h-[100px] w-[200px]",
    lg: "h-[120px] w-[240px]",
  };

  return (
    <div className={cn("relative w-full max-w-[200px] mx-auto", className)}>
      <div className="relative">
        {/* Speedometer background with gradient */}
        <div className={cn("overflow-hidden relative", sizeClasses[size])}>
          <div className="absolute inset-0 rounded-t-full bg-gradient-to-br from-muted/10 to-muted/30"></div>
          
          {/* Tick marks */}
          {[...Array(11)].map((_, i) => {
            const deg = (i * 18);
            return (
              <div
                key={i}
                className="absolute bottom-0 left-1/2 h-2 w-[1px] origin-bottom"
                style={{
                  transform: `translateX(-50%) rotate(${deg}deg)`,
                  background: i % 2 === 0 ? '#C8C8C9' : '#666',
                }}
              />
            );
          })}
        </div>
        
        {/* Needle with enhanced styling */}
        <div 
          className={cn(
            "absolute left-1/2 bottom-0 origin-bottom",
            animate ? "transition-transform duration-1000 ease-out" : ""
          )}
          style={{ 
            transform: `translateX(-50%) rotate(${rotation}deg)`,
          }}
        >
          {/* Needle shaft */}
          <div className={cn(
            "w-[2px] rounded-full shadow-lg",
            sizeClasses[size].split(' ')[0],
            colorClass
          )}>
            <div className="w-full h-full bg-current"></div>
          </div>
          
          {/* Needle head */}
          <div className={cn(
            "absolute -top-1 left-1/2 w-4 h-4 -translate-x-1/2 rounded-full shadow-lg",
            "border-2 border-card",
            colorClass
          )}>
            <div className="w-full h-full rounded-full bg-current"></div>
          </div>
        </div>
        
        {/* Value labels */}
        {showLabels && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-muted-foreground">
            <span>0</span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0">50</span>
            <span>100</span>
          </div>
        )}
      </div>
      
      {/* Current value and label with animation */}
      <div className="text-center mt-4">
        <p className={cn(
          "text-2xl font-bold transition-all duration-500",
          colorClass,
          animate ? "animate-fade-in" : ""
        )}>
          {value}%
        </p>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </div>
    </div>
  );
};