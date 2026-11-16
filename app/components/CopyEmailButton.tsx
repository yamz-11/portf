"use client";

import { useState } from "react";

export default function CopyEmailButton({
  email,
  className,
  style,
}: {
  email: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button onClick={handleCopy} className={className} style={style}>
      {copied ? "✓ Email Tersalin!" : ""}
    </button>
  );
}
