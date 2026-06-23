export default function SignalDivider() {
  return (
    <div className="max-w-content mx-auto px-12 mt-[100px] flex items-center gap-6">
      <div className="flex-1 h-px" style={{ background: "var(--line)" }} />
      <svg
        width="120"
        height="20"
        viewBox="0 0 120 20"
        fill="none"
        style={{ flexShrink: 0, opacity: 0.7 }}
        aria-hidden="true"
      >
        <path
          d="M0 10 L10 10 L14 2 L20 18 L26 6 L32 14 L38 10 L48 10 L52 4 L58 16 L64 8 L70 12 L76 10 L86 10 L90 3 L96 17 L102 7 L108 13 L114 10 L120 10"
          stroke="#C9A876"
          strokeWidth="1.3"
        />
      </svg>
      <div className="flex-1 h-px" style={{ background: "var(--line)" }} />
    </div>
  );
}
