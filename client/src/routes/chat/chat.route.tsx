import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { PDFViewer } from "./components/pdf.viewer";
import { ChatPanel } from "./components/chat-panel/chat.panel";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileView } from "./components/mobile.view";
import { PdfProvider } from "./providers/pdf.provider";

export const ChatRoute = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileView />;

  return (
    <>
      <PdfProvider>
        <ResizablePanelGroup orientation="horizontal">
          <ResizablePanel defaultSize={"60%"} minSize={"30%"}>
            <PDFViewer />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={"50%"} minSize={"35%"}>
            <ChatPanel />
          </ResizablePanel>
        </ResizablePanelGroup>
      </PdfProvider>
    </>
  );
};
