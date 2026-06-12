import mongoose, { Model, Schema, Document } from "mongoose";

export interface IDocument {
  userId: mongoose.Types.ObjectId;
  title: string;
  size: number;
  storageKey: string;
  status: "processing" | "ready" | "failed";
}
export interface IDocumentDocument extends IDocument, Document {}

export interface IDocumentModel extends Model<IDocumentDocument> {}

const documentSchema = new Schema<IDocumentDocument, IDocumentModel>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, "User ID is required"],
      index: true, // ← fast lookup by user
      ref: "user",
    },

    title: {
      type: String,
      required: [true, "Document title is required"],
      trim: true,
      maxlength: [255, "Title cannot exceed 255 characters"],
    },

    size: {
      type: Number,
      required: [true, "File size is required"],
      min: [1, "File size must be greater than 0"],
    },

    storageKey: {
      type: String,
      required: [true, "Storage key is required"],
      unique: true, // ← no duplicate files
    },

    status: {
      type: String,
      enum: {
        values: ["processing", "ready", "failed"],
        message: "{VALUE} is not a valid status",
      },
      default: "processing",
    },
  },
  {
    timestamps: true, // ← adds createdAt and updatedAt automatically
    versionKey: false, // ← removes __v field
  },
);
documentSchema.index({ userId: 1, _id: 1 });
export default mongoose.model<IDocumentDocument, IDocumentModel>(
  "document",
  documentSchema,
);
