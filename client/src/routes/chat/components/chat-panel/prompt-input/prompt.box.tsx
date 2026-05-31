import {
  PromptInput,
  PromptInputProvider,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input";
import { PromptFooter } from "./prompt.footer";
import { PromptTextArea } from "./prompt.input";
import AttachmentsDisplay from "./attachment.display";
import type { ChatStatus } from "ai";
type PromptBoxProps = {
  status: ChatStatus;
  sendMessage: (message: PromptInputMessage) => void;
  regenerate: () => void;
  stop: () => void;
};
export function PromptBox({
  status,
  sendMessage,
  regenerate,
  stop,
}: PromptBoxProps) {
  const handleSubmit = (message: PromptInputMessage) => {
    console.log("sending the inputs", message);
    if (!message.text.trim()) return;
    if (message.text.trim().length < 2) return;
    sendMessage(message);
  };
  return (
    <div className="w-full max-w-5xl mx-auto">
      <PromptInputProvider>
        <PromptInput onSubmit={handleSubmit}>
          <div className="rounded-2xl border border-border flex flex-col gap-2 p-2.5">
            <AttachmentsDisplay />
            <PromptTextArea />
            <PromptFooter regenerate={regenerate} stop={stop} status={status} />
          </div>
        </PromptInput>
      </PromptInputProvider>
    </div>
  );
}
