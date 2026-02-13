import { useCallback } from 'react';
import { ga4Config } from '@/data/config';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export function useAnalytics() {
  const trackEvent = useCallback((
    eventName: string,
    params?: Record<string, unknown>
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }
  }, []);

  const trackWhatsAppClick = useCallback((location: string) => {
    trackEvent(ga4Config.events.WHATSAPP_CLICK, {
      location,
      method: 'whatsapp',
    });
  }, [trackEvent]);

  const trackServiceView = useCallback((serviceName: string) => {
    trackEvent(ga4Config.events.SERVICE_VIEW, {
      service_name: serviceName,
    });
  }, [trackEvent]);

  const trackContactView = useCallback(() => {
    trackEvent(ga4Config.events.CONTACT_VIEW);
  }, [trackEvent]);

  const trackNavClick = useCallback((linkName: string) => {
    trackEvent(ga4Config.events.NAV_CLICK, {
      link_name: linkName,
    });
  }, [trackEvent]);

  const trackScrollDepth = useCallback((depth: number) => {
    trackEvent(ga4Config.events.SCROLL_DEPTH, {
      depth_percent: depth,
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackWhatsAppClick,
    trackServiceView,
    trackContactView,
    trackNavClick,
    trackScrollDepth,
  };
}
