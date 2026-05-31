import Logo from "@/assets/svg/logo";
import { Banner } from "./banner";
import { FooterLinks } from "./footer.links";

export const Footer = () => {
  return (
    <>
      <footer className="w-full mb-16 main-x-padding  flex flex-col justify-center items-center gap-4">
        <div className="max-w-sm flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="">
            <Logo width="200" height="48" />
          </div>
          <p className="text-sm text-muted-foreground leading-normal ">
            Helping you interact with PDFs naturally through modern AI-powered
            document analysis and instant answers.
          </p>
          <FooterLinks />

          <Banner />
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center mt-4">
          <p className="text-sm text-muted-foreground/40 leading-normal">
            © Sonorous 2026
          </p>
          <p className="text-sm text-muted-foreground/40 leading-normal">
            All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};
