export const HeroWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden dark:opacity-90 opacity-95  transition-colors duration-500 flex flex-col items-center">
      {/* --- Ambient Glowing Lights (Magic UI Style) --- */}

      {/* 1. Main Bottom-Center Glow (Rises up behind the mockup) */}
      <div className="absolute bottom-[50%] left-1/2 -translate-x-1/2 w-[140%] max-w-[1200px] h-[500px] rounded-[100%] bg-[#3852b4] blur-[100px] md:blur-[160px] opacity-20 dark:opacity-40 pointer-events-none z-0"></div>

      {/* 2. Soft Top Background Aura (Balances the viewport exposure) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100%] max-w-[800px] h-[400px] rounded-full bg-[#3852b4] blur-[150px] opacity-[0.05] dark:opacity-15 pointer-events-none z-0"></div>

      {/* --- Content Canvas --- */}
      {/* Setting z-10 puts your text, links, and code mockups reliably over the top of the glows */}
      <div className="">{children}</div>
    </div>
  );
};
