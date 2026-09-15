# Basic Express Template

A minimal Express.js application built with TypeScript. A clean foundation for learning and building backend applications.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- pnpm

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Hurjay-Naguit/basic-express-template.git
cd basic-express-template
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
```

You may use a different port if preferred.

**Note:** Environment variables are optional if your application does not require them.

### 4. Start the development server

```bash
pnpm dev
```

## Project Structure

```text
basic-express-template/
├── src/
│   └── config/
│   └── controllers/
│           └── test.controller.ts
│   └── lib/
│   └── middlewares/
│   └── models/
│   └── routes/
│           └── test.routes.ts
│   ├── app.ts
│   ├── index.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.json
```

## Optional: .gitignore

Create a `.gitignore` file in the project root to prevent unnecessary or sensitive files from being committed.

```gitignore
node_modules/
.env
dist/
```

## License

This project is for learning and development purposes.
