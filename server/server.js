import app from "./app.js";
import { connectDB } from "./db/connectDB.js";

const PORT = 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
};

startServer();