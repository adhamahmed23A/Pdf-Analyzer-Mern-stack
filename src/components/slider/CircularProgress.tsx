export const CircularProgress = ({ rating }: { rating: number }) => {
  const percentage = (rating / 10) * 100;
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  const color =
    rating >= 7
      ? "#22c55e" // green
      : rating >= 5
        ? "#eab308" // yellow
        : "#ef4444"; // red

  return (
    <div className="relative size-14 flex items-center justify-center ">
      <svg className="absolute  -rotate-90" width="56" height="56">
        {/* background track */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-foreground/40"
        />
        {/* progress */}
        <circle
          cx="28"
          cy="28"
          r={radius}
          className=" fill-zinc-900/40"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xs font-bold z-10 ">{rating.toFixed(1)}</span>
    </div>
  );
};
