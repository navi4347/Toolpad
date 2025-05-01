import { useState } from "react";
import styles from "./TextTranslation.module.css";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "Arabic" },
  { code: "zh", label: "Chinese" },
  { code: "cs", label: "Czech" },
  { code: "de", label: "German" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "hi", label: "Hindi" },
  { code: "it", label: "Italian" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "nl", label: "Dutch" },
  { code: "pl", label: "Polish" },
  { code: "pt", label: "Portuguese" },
  { code: "ru", label: "Russian" },
  { code: "tr", label: "Turkish" },
  { code: "uk", label: "Ukrainian" },
  { code: "vi", label: "Vietnamese" },
];

function TextTranslation() {
  const [text, setText] = useState("");
  const [targetLang, setTargetLang] = useState("hi");
  const [translated, setTranslated] = useState("");

  const handleTranslate = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          source: "auto",
          target: targetLang,
        }),
      });

      const data = await res.json();
      setTranslated(data.translatedText);
    } catch {
      alert("Translation failed.");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>🌐 Text Translation</h2>


      <textarea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to translate"
        className={styles.textarea}
      />

      <div className={styles.controls}>
        <label className={styles.label}>Select Target Language:</label>
        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          className={styles.select}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleTranslate} className={styles.button}>
        Translate
      </button>

      <p className={styles.result}>
        <strong>Translated:</strong> {translated}
      </p>
    </div>
  );
}

export default TextTranslation;
