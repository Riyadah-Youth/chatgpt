import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from './gtag';

/**
 * Hook to track page views automatically
 * Usage: Add `usePageTracking()` to your root layout or _app
 */
export function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      pageview(url);
    }
  }, [pathname, searchParams]);
}
