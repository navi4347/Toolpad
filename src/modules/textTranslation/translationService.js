import axios from "axios";

/**
 * Translate text using LibreTranslate
 * @param {Object} param0
 * @param {string} param0.text - The text to translate
 * @param {string} param0.source - Source language code (default: "auto")
 * @param {string} param0.target - Target language code
 */
export async function translateText({ text, source = "auto", target }) {
  try {
    const response = await axios.post(
      "http://localhost:5000/translate",
      {
        q: text,
        source,
        target,
        format: "text",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Navi-AI/1.0",
        },
        timeout: 10000,
      }
    );

    return { translatedText: response.data.translatedText };
  } catch (err) {
    console.error("Translation error:", err.message);
    throw new Error("Translation failed");
  }
}
