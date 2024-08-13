'use client';

import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientPortal({ children, selector }:
  {
    children: React.ReactNode;
    selector: string;
  }
) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (document.querySelector(selector) === null) return;
    ref.current! = document.querySelector(selector)!;
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current!) : null;
}
