import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { usePromptInputController } from "@/components/ai-elements/prompt-input";
export const PromptTextArea = () => {
  const {
    textInput: { setInput, value },
  } = usePromptInputController();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResize = () => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";

    // maximum height = 140px
    textarea.style.height = `${Math.min(textarea.scrollHeight, 140)}px`;

    // enable scroll after max height
    textarea.style.overflowY = textarea.scrollHeight > 140 ? "auto" : "hidden";
  };
  return (
    <Textarea
      ref={textareaRef}
      rows={1}
      onInput={handleResize}
      value={value}
      onChange={(e) => setInput(e.target.value)}
      placeholder="How can I help you?"
      className="
            w-full
            min-h-0
            resize-none
            border-none
            bg-transparent!
            py-0
            px-1
            shadow-none
            placeholder:text-zinc-600
          
          "
    />
  );
};
