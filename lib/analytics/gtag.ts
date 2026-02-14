// Google Analytics 4 Helper Functions
// Measurement ID: G-FX3ZM2KSLW

export const GA_MEASUREMENT_ID = 'G-FX3ZM2KSLW';

// Type definitions
type GTagEvent = {
  action: string;
  category: string;
  label?: string;
  value?: number;
};

// Check if gtag is available
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track page views
export const pageview = (url: string): void => {
  if (!isGtagAvailable()) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const event = ({ action, category, label, value }: GTagEvent): void => {
  if (!isGtagAvailable()) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
