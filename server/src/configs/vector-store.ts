import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { env } from "./env.js";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { getMongoClient } from "./db.js";
import { AppError } from "../errors/app-error.js";
import { getHttpStatus } from "../constants/http.js";

const { GOOGLE_EMBEDDING_API_KEY, EMBEDDING_MODEL } = env;

export const embedding = new GoogleGenerativeAIEmbeddings({
  apiKey: GOOGLE_EMBEDDING_API_KEY,
  model: EMBEDDING_MODEL,
});

const createVectorStore = () => {
  const client = getMongoClient();
  const collection = client.db().collection("documents-chunks");
  return new MongoDBAtlasVectorSearch(embedding, {
    collection: collection as any,
    indexName: "vector_index",
    textKey: "text",
    embeddingKey: "embedding",
  });
};
let vectorStore: MongoDBAtlasVectorSearch | undefined;
export const getVectorStore = () => {
  if (!vectorStore) {
    try {
      vectorStore = createVectorStore();
    } catch (error) {
      console.log(error);
      throw new AppError(
        "Failed to create vector store instance",
        getHttpStatus("INTERNAL_SERVER_ERROR"),
        "Vector store instance creation failed",
        false,
      );
    }
  }
  return vectorStore;
};
