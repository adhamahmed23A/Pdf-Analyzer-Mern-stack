import { Attachments } from "@/components/ai-elements/attachments";
import { AttachmentItem } from "./attachment.item";
import { usePromptInputAttachments } from "@/components/ai-elements/prompt-input";

const AttachmentsDisplay = () => {
  const attachments = usePromptInputAttachments();

  return (
    <div className="flex items-center justify-start w-full">
      <Attachments variant="inline">
        {attachments.files.map((attachment) => (
          <AttachmentItem
            attachment={attachment}
            key={attachment.id}
            onRemove={() => attachments.remove(attachment.id)}
          />
        ))}
      </Attachments>
    </div>
  );
};

export default AttachmentsDisplay;
