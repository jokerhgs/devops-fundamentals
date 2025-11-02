import dotenv from "dotenv";
import app from "./server.js";

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
