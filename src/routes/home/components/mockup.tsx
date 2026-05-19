import heroMockup from "../../../assets/images/HeroMockup.png";

export const Mockup = () => {
  return (
    <div className="mx-auto scale-[0.9] md:scale-[0.7]  w-full relative z-10">
      {/* Wrapper */}
      <div className="relative overflow-hidden p-px rounded-2xl">
        {/* Image + Border */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-zinc-700/80 ">
          <img
            src={heroMockup}
            alt="AssetWise product mockup"
            className="block w-full h-auto scale-[1.01]"
          />
        </div>
        <div className="absolute bottom-0 left-0 right w-full h-[50%]  bg-linear-to-b from-transparent from via-background to-background dark:via-background dark:to-[#050505]" />
      </div>
    </div>
  );
};
