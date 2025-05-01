import { mkdir, writeFile, access } from "fs/promises";
import { join } from "path";
import { cwd } from "process";
import { constants } from "fs";

const structure = {
  ".env": "",
  src: {
    assets: {},
    components: {},
    contexts: {},
    hooks: {},
    layouts: {
      DashboardLayout: {
        "DashboardLayout.jsx": "",
      },
    },
    modules: {
      auth: {
        "Login.jsx": "",
        "Signup.jsx": "",
        "authService.js": "",
        "useAuth.js": "",
      },
      dashboard: {
        "Dashboard.jsx": "",
      },
      textToImage: {
        "TextToImage.jsx": "",
        "TextToImage.module.css": "",
        "textToImageService.js": "",
        "useTextToImage.js": "",
      },
      voiceToText: {
        "VoiceToText.jsx": "",
        "VoiceToText.module.css": "",
        "voiceToTextService.js": "",
        "useVoiceToText.js": "",
      },
      textTranslation: {
        "TextTranslation.jsx": "",
        "TextTranslation.module.css": "",
        "translationService.js": "",
        "useTextTranslation.js": "",
      },
      common: {
        "NotFound.jsx": "",
      },
    },
    services: {
      "api.js": "",
      "openai.js": "",
      "whisper.js": "",
      "replicate.js": "",
    },
    utils: {
      "validators.js": "",
      "helpers.js": "",
    },
    styles: {
      "theme.js": "",
    },
    server: {
      "server.js": "",
    },
    "App.jsx": "",
    "routes.jsx": "",
    "main.jsx": "",
  },
};

// Helper to check if file exists
async function fileExists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

// Recursive function to create folders and files
async function createStructure(basePath, obj) {
  for (const name in obj) {
    const fullPath = join(basePath, name);
    if (typeof obj[name] === "object") {
      await mkdir(fullPath, { recursive: true });
      await createStructure(fullPath, obj[name]);
    } else {
      const exists = await fileExists(fullPath);
      if (!exists) {
        await writeFile(fullPath, obj[name]);
        console.log(`📄 Created file: ${fullPath}`);
      } else {
        console.log(`⚠️  Skipped (already exists): ${fullPath}`);
      }
    }
  }
}

// Run the script
createStructure(cwd(), structure)
  .then(() => console.log("✅ Folder structure created successfully!"))
  .catch((err) => console.error("❌ Error creating structure:", err));
