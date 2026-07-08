const growthPoints = [
  { cx: 62, cy: 420, r: 8 },
  { cx: 154, cy: 400, r: 9.2 },
  { cx: 250, cy: 372, r: 10.4 },
  { cx: 342, cy: 312, r: 11.6 },
  { cx: 438, cy: 254, r: 12.8 },
  { cx: 536, cy: 214, r: 14 },
  { cx: 640, cy: 154, r: 15.2 }
];

export function HeroGrowthVisual() {
  return (
    <div className="pointer-events-none absolute right-0 top-24 hidden h-[70%] w-[54%] lg:block" aria-hidden="true">
      <svg className="h-full w-full overflow-visible" viewBox="0 0 720 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 408C138 400 184 424 266 362C344 303 390 252 476 234C552 218 612 174 680 92" stroke="rgb(var(--color-line))" strokeWidth="2" />
        <path d="M46 422C142 414 188 438 270 376C348 317 394 266 480 248C556 232 616 188 684 106" stroke="rgb(var(--color-signal))" strokeWidth="5" strokeLinecap="round" />
        {growthPoints.map((point) => (
          <circle key={point.cx} cx={point.cx} cy={point.cy} r={point.r} fill="rgb(var(--color-signal))" />
        ))}
        <rect x="430" y="62" width="162" height="108" rx="8" fill="rgb(var(--color-surface) / 0.86)" stroke="rgb(var(--color-line))" />
        <path d="M458 130L486 111L515 121L552 84" stroke="rgb(var(--color-signal))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="486" y="298" width="184" height="118" rx="8" fill="rgb(var(--color-surface) / 0.86)" stroke="rgb(var(--color-line))" />
        {[0, 1, 2, 3, 4].map((bar) => (
          <rect key={bar} x={514 + bar * 26} y={366 - bar * 12} width="14" height={26 + bar * 12} rx="3" fill="rgb(var(--color-signal) / 0.22)" />
        ))}
        <circle cx="360" cy="166" r="54" stroke="rgb(var(--color-line))" strokeWidth="14" />
        <path d="M360 112A54 54 0 1 1 313 193" stroke="rgb(var(--color-signal))" strokeWidth="14" strokeLinecap="round" />
      </svg>
    </div>
  );
}
