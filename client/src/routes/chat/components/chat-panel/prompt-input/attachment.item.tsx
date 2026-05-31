import {
  Attachment,
  AttachmentHoverCard,
  AttachmentHoverCardContent,
  AttachmentHoverCardTrigger,
  AttachmentInfo,
  AttachmentPreview,
  AttachmentRemove,
  getAttachmentLabel,
  getMediaCategory,
  type AttachmentData,
} from "@/components/ai-elements/attachments";
import { memo, useCallback } from "react";

interface AttachmentItemProps {
  attachment: AttachmentData;
  onRemove: (id: string) => void;
}

export const AttachmentItem = memo(
  ({ attachment, onRemove }: AttachmentItemProps) => {
    const handleRemove = useCallback(
      () => onRemove(attachment.id),
      [onRemove, attachment.id],
    );
    const mediaCategory = getMediaCategory(attachment);
    const label = getAttachmentLabel(attachment);

    return (
      <AttachmentHoverCard key={attachment.id}>
        <AttachmentHoverCardTrigger asChild>
          <Attachment data={attachment} onRemove={handleRemove}>
            <div className="relative size-5 shrink-0">
              <div className="absolute inset-0 transition-opacity group-hover:opacity-0">
                <AttachmentPreview />
              </div>
              <AttachmentRemove className="absolute inset-0" />
            </div>
            <AttachmentInfo />
          </Attachment>
        </AttachmentHoverCardTrigger>
        <AttachmentHoverCardContent>
          <div className="space-y-3">
            {mediaCategory === "image" &&
              attachment.type === "file" &&
              attachment.url && (
                <div className="flex max-h-96 w-80 items-center justify-center overflow-hidden rounded-md border">
                  <img
                    alt={label}
                    className="max-h-full max-w-full object-contain"
                    height={384}
                    src={attachment.url}
                    width={320}
                  />
                </div>
              )}
            <div className="space-y-1 px-0.5">
              <h4 className="font-semibold text-sm leading-none">{label}</h4>
              {attachment.mediaType && (
                <p className="font-mono text-muted-foreground text-xs">
                  {attachment.mediaType}
                </p>
              )}
            </div>
          </div>
        </AttachmentHoverCardContent>
      </AttachmentHoverCard>
    );
  },
);
