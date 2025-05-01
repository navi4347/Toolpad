import express from "express";
import cors from "cors";
import { translateText } from "../modules/textTranslation/translationService.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// === Translate API ===
app.post("/api/translate", async (req, res) => {
  try {
    const result = await translateText(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// === Start Server ===
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
