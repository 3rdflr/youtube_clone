import "dotenv/config";
import "./db";
import "./models/video";
import "./models/user";
import "./models/comment";
import app from "./server";

const PORT = 3000;

const handleListening = () =>
  console.log(`✅ Server is listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
