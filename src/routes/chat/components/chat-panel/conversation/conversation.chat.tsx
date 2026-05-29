import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import { EmptyConversation } from "./empty-conversation";
import type { ChatStatus, UIMessage } from "ai";

type ConversationChatProps = {
  messages?: UIMessage[];
  status: ChatStatus;
};

export const ConversationChat = ({
  messages = [],
  status,
}: ConversationChatProps) => {
  return (
    <Conversation className="relative w-full max-w-5xl mx-auto ">
      <ConversationContent className=" p-0!" aria-live="polite">
        {messages.length === 0 ? (
          <EmptyConversation />
        ) : (
          messages.map(({ id, parts, role }) =>
            parts
              .filter((p) => p.type === "text")
              .map((part, index) => (
                <Message key={`${id}-${index}`} from={role}>
                  <MessageContent className="px-3! py-1.5! rounded-lg! dark:bg-secondary/50! bg-black/30!">
                    {part.text}
                  </MessageContent>
                </Message>
              )),
          )
        )}
      </ConversationContent>
      <ConversationScrollButton className="absolute top-2 right-0" />
    </Conversation>
  );
};
