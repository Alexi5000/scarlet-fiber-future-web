import { useEffect, useRef } from 'react';
import { PerformanceState, QualityLevel } from './types';

interface BatteryManager extends EventTarget {
  charging: boolean;
  level: number;
}

export const useBatteryMonitor = (
  setPerformanceState: React.Dispatch<React.SetStateAction<PerformanceState>>
) => {
  const batteryApiRef = useRef<BatteryManager | null>(null);

  useEffect(() => {
    if ('getBattery' in navigator) {
      (navigator as Navigator & { getBattery: () => Promise<BatteryManager> }).getBattery().then((battery: BatteryManager) => {
        batteryApiRef.current = battery;
        
        const checkBattery = () => {
          if (battery.level < 0.2 && !battery.charging) {
            console.log('Low battery detected, reducing animation quality');
            setPerformanceState((prev) => ({ 
              ...prev, 
              currentQuality: prev.currentQuality === 'high' ? 'medium' : 'low'
            }));
          }
        };
        
        battery.addEventListener('levelchange', checkBattery);
        battery.addEventListener('chargingchange', checkBattery);
        checkBattery();
      });
    }
  }, [setPerformanceState]);

  return { batteryApiRef };
};