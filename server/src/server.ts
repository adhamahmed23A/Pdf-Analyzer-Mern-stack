// Dotenv configuration
import dotenv from "dotenv";
dotenv.config();
// Import the app
import { createApp } from "./app.js";
import { connectDB } from "./configs/db.js";
import dns from "dns";
import { createAuth } from "./features/auth/lib/better-auth.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const startServer = async (): Promise<void> => {
  const PORT = process.env.PORT || 5000;
  const NODE_ENV = process.env.NODE_ENV;
  try {
    // ── Database ───────────────────────────────────────────
    const client = await connectDB();

    // ── Creating Auth Instance ───────────────────────────────────────────

    const auth = createAuth(client);

    // ── Creating The Server ───────────────────────────────────────────
    const app = createApp(auth);
    app.listen(PORT, () => {
      console.log(`[server] running on http://localhost:${PORT} (${NODE_ENV})`);
    });
  } catch (error) {
    console.error("[server] failed to start:", error);
    process.exit(1);
  }
};

startServer();
