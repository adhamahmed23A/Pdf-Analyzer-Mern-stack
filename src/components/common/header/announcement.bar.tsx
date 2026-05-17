/*
 * Imports
 */
import { Button } from "@/components/ui/button";
import { HeaderData } from "@/constants/HeaderData";
import useAnnouncementBarVisible from "@/hooks/common/useAnnouncementBarVisible";

export const AnnouncementBar = () => {
  const isVisible = useAnnouncementBarVisible();

  return (
    <div
      className={`w-full py-1 border-b border-black/20 bg-linear-to-br from-black/20 via-gray-700/30 to-black/10 dark:from-white/20 dark:via-gray-400/30 dark:to-white/10 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden  ${isVisible ? "max-h-20 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-full"}`}
    >
      <div className="flex  gap-2 justify-between items-center main-x-padding">
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-700 tracking-tight">
            Developed by{" "}
            <span className="font-semibold underline text-zinc-750">
              {HeaderData.AnnouncementAuthor}
            </span>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          {HeaderData.socials.map((social) => (
            <a key={social.label} href={social.href}>
              <Button
                variant="outline"
                className="bg-white/40 border-black/20 cursor-pointer"
                size="icon"
              >
                <social.icon
                  className="pointer-events-none"
                  color={social.color}
                />
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
