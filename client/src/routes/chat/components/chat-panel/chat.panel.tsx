import { DefaultChatTransport, type UIMessage } from "ai";
import { ConversationChat } from "./conversation/conversation.chat";
import { PromptBox } from "./prompt-input/prompt.box";
import { useChat, type UseChatOptions } from "@ai-sdk/react";

const Configurations: UseChatOptions<UIMessage> = {
  transport: new DefaultChatTransport({
    api: `${import.meta.env.VITE_BACKEND_URL}/api/chat`,
    credentials: "include",
  }),
};
export const ChatPanel = () => {
  const { messages, sendMessage, status, regenerate, stop } =
    useChat(Configurations);

  return (
    <>
      <section className="relative w-full pt-8 mx-auto h-full">
        <div className="w-full  max-h-[60vh] overflow-y-auto scrollbar-none">
          <ConversationChat messages={messages} status={status} />
        </div>
        <div className="absolute bottom-0 left-0 right-0  p-4 pb-2 w-full  text-center ">
          <div className="">
            <PromptBox
              status={status}
              sendMessage={sendMessage}
              regenerate={regenerate}
              stop={stop}
            />
          </div>
          <span className="text-xs text-center  text-muted-foreground mt-2">
            Any model can make mistakes. Please check important info
          </span>
        </div>
      </section>
    </>
  );
};
