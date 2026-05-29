import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PDFViewer } from "./components/pdf.viewer";
import { ChatPanel } from "./components/chat-panel/chat.panel";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileView } from "./components/mobile.view";

export const ChatRoute = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileView />;

  return (
    <>
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={"60%"} minSize={"30%"}>
          <PDFViewer
            url={
              "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
            }
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={"50%"} minSize={"35%"}>
          <ChatPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};
