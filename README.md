# Personal Portfolio

A sleek, modern personal portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS v4, React Icons
- **Build Tool:** Vite 8
- **3D Graphics Support:** Three.js (Types configured)
- **Code Quality:** ESLint, TypeScript Compiler (`tsc`)
- **Containerization:** Docker & Nginx

---

## 📁 Project Structure

```
portfolio/
├── .dockerignore
├── .gitignore
├── Dockerfile
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── Data.ts
    ├── index.css
    ├── main.tsx
    └── components/
        ├── About.tsx
        ├── Contact.tsx
        ├── Footer.tsx
        ├── Hero.tsx
        ├── Navbar.tsx
        ├── Projects.tsx
        └── Skills.tsx
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (optional, for containerized running)

---

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Lint and Type Check:**
   ```bash
   npm run lint
   npm run build
   ```

---

## 🐳 Running with Docker

### Build the Docker Image

```bash
docker build -t portfolio-app .
```

### Run the Container

```bash
docker run -d -p 8080:80 --name portfolio portfolio-app
```

Now visit `http://localhost:8080` in your browser.

---

## 📜 Available Scripts

- `npm run dev` – Starts the Vite dev server with Hot Module Replacement (HMR).
- `npm run build` – Performs TypeScript type checking (`tsc -b`) and builds production assets into `dist/`.
- `npm run preview` – Locally previews the production build.
- `npm run lint` – Runs ESLint across the codebase.

---