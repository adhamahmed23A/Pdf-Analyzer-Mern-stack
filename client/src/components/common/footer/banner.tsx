export const Banner = () => {
  return (
    <>
      <div className="relative ">
        <h1 className="font-black uppercase text-[70px] sm:text-[90px] md:text-[120px] lg:text-[150px] tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-zinc-600 to-transparent">
          Sonorous
        </h1>
        <div className="absolute bottom-0 w-full h-full bg-linear-to-t from-background to-transparent"></div>
        <div className="absolute bottom-0 w-full h-full bg-linear-to-t from-background to-background/50"></div>
      </div>
    </>
  );
};
