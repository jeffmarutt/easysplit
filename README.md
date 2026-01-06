<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1F_lItjZ3xAJDKYcNC2ao2OdYwu-u31oB

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy on Easypanel / Docker

The app is built as a static bundle and served by Nginx.

1. Build the image (pass your Gemini key at build time so Vite can inline it):
   ```bash
   docker build --build-arg GEMINI_API_KEY=your_key -t easysplit .
   ```
2. Run the container (Easypanel can map port 4173 to your public port):
   ```bash
   docker run -p 4173:4173 easysplit
   ```
3. Configure the `GEMINI_API_KEY` build arg in Easypanel so the AI receipt scan feature works.


### Using buildpacks on Easypanel

If you deploy with buildpacks (e.g., `pack build`), a `Procfile` is provided and the `start` script runs `vite preview` on `0.0.0.0:${PORT:-4173}` so the platform can set the port automatically.

