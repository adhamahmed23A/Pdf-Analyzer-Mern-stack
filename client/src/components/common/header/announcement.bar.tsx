export function AnnouncementBar() {
  return (
    <div
      className={`sticky top-0 z-50 w-full overflow-hidden border-b border-white/10 bg-linear-to-r from-zinc-900/60 to-zinc-800/60 text-center text-xs text-zinc-400 backdrop-blur-md transition-[max-height,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] `}
    >
      <div className="py-0.5 sm:py-1">
        This website is developed by{" "}
        <span className="font-semibold text-zinc-100">Adham Ahmed</span>
      </div>
    </div>
  );
}
