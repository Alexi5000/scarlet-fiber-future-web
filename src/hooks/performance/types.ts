
export type QualityLevel = 'high' | 'medium' | 'low' | 'static';

export type DeviceCapabilities = ReturnType<
  typeof import('../../utils/deviceDetection').detectDeviceCapabilities
>;

export interface PerformanceState {
  currentQuality: QualityLevel;
  fps: number;
  isMonitoring: boolean;
  shouldAutoDegrade: boolean;
  deviceCapabilities: DeviceCapabilities;
  isPaused: boolean;
}

export interface FPSMonitorConfig {
  isMobile: boolean;
  minFPS: number;
  monitoringDuration: number;
}
