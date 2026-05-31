import { SidebarGroupContent } from "@/components/ui/sidebar";

/**
 * Imports
 */
export const AppSidebarCollapsibleContent = () => {
  return (
    <>
      <SidebarGroupContent className="p-0 mb-0 ">
        <div className="relative">
          {/* Top fade */}
          <div className="absolute -top-px left-0 right-0 h-4 bg-linear-to-b from-background to-transparent z-10 pointer-events-none" />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-linear-to-t from-background to-transparent z-10 pointer-events-none" />

          {/* Scrollable list */}
          <div className="flex flex-col gap-1 overflow-y-auto scrollbar-none py-0.5 h-50">
            {Array.from({ length: 30 }).map((_, index) => (
              <div key={index}>
                <span>Item {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </SidebarGroupContent>
    </>
  );
};
