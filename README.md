# Toolpad Dashboard

This project is a React 19 frontend dashboard built with Vite, Material UI, React Router, and Toolpad. It's designed to be a flexible and modern UI for managing AI tools and workflows.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Project Setup

```bash
npm create vite@latest
npm install
npm install react-router-dom
npm install @mui/icons-material
npm install @mui/material @emotion/react @emotion/styled
npm install @toolpad/core
npm install lottie-react
npm install axios
npm install express cors dotenv openai
npm install qs

node generate-structure.js
docker run -d -p 5000:5000 libretranslate/libretranslate
