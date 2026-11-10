'use client';

import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return <div className="loader" aria-label="Loading UmarJaum" role="status"><div className="loader-mark">UJ</div><div className="loader-line"><span /></div><p>UMARJAUM / SYSTEMS FOR PUBLISHING</p></div>;
}
