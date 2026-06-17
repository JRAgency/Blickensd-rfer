type IconName =
  | "lathe"
  | "mill"
  | "polymer"
  | "gear"
  | "assembly"
  | "coating"
  | "draft"
  | "tool"
  | "advice"
  | "measure"
  | "arrow"
  | "phone"
  | "mail"
  | "pin"
  | "play"
  | "check"
  | "clock";

const paths: Record<IconName, React.ReactNode> = {
  lathe: (
    <>
      <path d="M3 16h18M3 16v3M21 16v3" />
      <circle cx="7.5" cy="11.5" r="3.5" />
      <path d="M11 11.5h7l2-2v4l-2-2" />
    </>
  ),
  mill: (
    <>
      <path d="M12 3v6" />
      <rect x="9" y="9" width="6" height="4" rx="1" />
      <path d="M10 13l-1.5 4h7L14 13" />
      <path d="M5 21h14" />
    </>
  ),
  polymer: (
    <>
      <circle cx="7" cy="9" r="2.4" />
      <circle cx="15.5" cy="7.5" r="2.4" />
      <circle cx="12" cy="15.5" r="2.4" />
      <path d="M9 10l4 4M14 9l-1 4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 4v2.4M12 17.6V20M4 12h2.4M17.6 12H20M6.3 6.3l1.7 1.7M16 16l1.7 1.7M17.7 6.3L16 8M8 16l-1.7 1.7" />
    </>
  ),
  assembly: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
      <path d="M10.5 7h4a2 2 0 0 1 2 2v4" />
    </>
  ),
  coating: (
    <>
      <path d="M12 3c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z" />
      <path d="M9 13a3 3 0 0 0 3 3" />
    </>
  ),
  draft: (
    <>
      <path d="M4 5h16v14H4z" />
      <path d="M4 9h16M9 9v10" />
    </>
  ),
  tool: (
    <>
      <path d="M14.5 4.5a4 4 0 0 0-5 5L4 15v5h5l5.5-5.5a4 4 0 0 0 5-5l-2.8 2.8-2.2-.6-.6-2.2z" />
    </>
  ),
  advice: (
    <>
      <path d="M21 11.5a8 8 0 1 1-3.5-6.6" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  measure: (
    <>
      <rect x="3" y="8" width="18" height="8" rx="1" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 5v2a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  play: <path d="M8 5v14l11-7z" />,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-6 w-6",
  filled = false,
}: {
  name: IconName;
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
