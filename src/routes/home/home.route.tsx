/*
 * Imports
 */
import Divider from "@/components/ui/divider";
import { HeroSection } from "./components/hero.section";
import { HeroWrapper } from "./components/hero.wrapper";
import { MarqueeSection } from "./components/marquee.section";
import { FeaturesSection } from "./components/features.section";

export const HomeRoute = () => {
  return (
    <>
      <div className="w-full min-h-screen mb-12 flex flex-col gap-6 ">
        <HeroWrapper>
          <section className="w-full flex justify-center items-center mt-32 ">
            <HeroSection />
          </section>
        </HeroWrapper>
        <div className="main-x-padding">
          <Divider variant="solid" className="mb-12">
            Trusted by
          </Divider>
        </div>
        <section className="main-x-padding">
          <MarqueeSection />
        </section>
        <div className="main-x-padding">
          <Divider variant="solid" className="mt-12">
            Features
          </Divider>
        </div>
        <section className="main-x-padding">
          <FeaturesSection />
        </section>
      </div>
    </>
  );
};
