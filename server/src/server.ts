// Validating the environment variables
import "./configs/env.js";
// Import the app
import { createApp } from "./app.js";
import { connectDB } from "./configs/db.js";
import { createAuth } from "./features/auth/better-auth.js";
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const startServer = async (): Promise<void> => {
  const PORT = process.env.PORT || 5000;
  const NODE_ENV = process.env.NODE_ENV;

  try {
    // ── Database Connection ───────────────────────────────────────────
    const mongoClient = await connectDB();

    // ── Initialize Auth ───────────────────────────────────────────
    const auth = createAuth(mongoClient);

    // ── Create Express App ───────────────────────────────────────────
    const app = createApp(auth);

    // ── Start Server ───────────────────────────────────────────
    app.listen(PORT, () => {
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(`[SERVER] ✅ Server running on http://localhost:${PORT}`);
      console.log(`[SERVER] Environment: ${NODE_ENV}`);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    });
  } catch (error) {
    console.error("\n[SERVER] ❌ Failed to start:", error);
    process.exit(1);
  }
};

startServer();
