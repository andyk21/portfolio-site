import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({ children, size, rotation, shouldOrbit, shouldSpin, spinDuration, orbitDuration }:
  PropsWithChildren<{ size: number; rotation: number; shouldOrbit?: boolean; shouldSpin?: boolean; orbitDuration?: number; spinDuration?: number; }>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className={twMerge(shouldOrbit === true && 'animate-spin')} style={{
        animationDuration: `${orbitDuration}s`
      }}>
        <div className='flex items-start justify-start' style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`
        }}>
          <div className={twMerge(shouldSpin === true && 'animate-spin')} style={{
            animationDuration: `${spinDuration}s`
          }}>
            <div className='inline-flex' style={{
              transform: `rotate(${-1 * rotation}deg)`,
            }}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};