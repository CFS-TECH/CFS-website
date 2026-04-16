import { useState, useEffect } from 'react';

/**
 * A custom hook to determine if a component has mounted in the browser.
 * Very useful for suppressing hydration errors in dynamic components.
 */
export default function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
