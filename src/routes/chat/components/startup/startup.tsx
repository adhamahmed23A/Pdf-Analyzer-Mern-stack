import { StartupHeader } from "./startup.header";
import { Dropzone } from "./dropzone";

export const Startup = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col gap-12 main-x-padding pb-8 ">
        {/* Header */}
        <div className="mx-auto w-full max-w-3xl px-4 pt-16 md:pt-24">
          <StartupHeader />
        </div>

        {/* Drag and Drop Area */}
        <div className="flex-1 w-full">
          <Dropzone />
        </div>
      </div>
    </>
  );
};
