import {
  PromptInputActionAddAttachments,
  PromptInputActionAddScreenshot,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTools,
  usePromptInputController,
} from "@/components/ai-elements/prompt-input";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import type { ChatStatus } from "ai";
type PromptFooterProps = {
  status: ChatStatus;
  regenerate: () => void;
  stop: () => void;
};
export const PromptFooter = ({
  status,
  regenerate,
  stop,
}: PromptFooterProps) => {
  const [openMenu, setopenMenu] = useState<boolean>(false);

  const {
    textInput: { value },
  } = usePromptInputController();

  return (
    <PromptInputFooter className="p-0! ">
      <PromptInputTools>
        <Tooltip delayDuration={300}>
          <PromptInputActionMenu open={openMenu} onOpenChange={setopenMenu}>
            <TooltipTrigger>
              <PromptInputActionMenuTrigger />
            </TooltipTrigger>
            <PromptInputActionMenuContent className="w-full p-1.5">
              <PromptInputActionAddAttachments setopenMenu={setopenMenu} />
              <PromptInputActionAddScreenshot />
            </PromptInputActionMenuContent>
          </PromptInputActionMenu>
          <TooltipContent className="bg-input-bg text-white py-1 px-2 border border-border ">
            <p className="text-xs">Add files</p>
          </TooltipContent>
        </Tooltip>
      </PromptInputTools>
      <PromptInputSubmit
        status={status}
        className="bg-btn-brand text-white hover:bg-btn-brand-hover cursor-pointer"
        disabled={!value.trim()}
      />
    </PromptInputFooter>
  );
};
