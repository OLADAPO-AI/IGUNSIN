# Igunsin Youth Forum 🌍

A community-driven website dedicated to empowering youth through **education**, **innovation**, and **community development**.

## 🌐 Live Website

[https://igunsinyouthforum.org](https://igunsinyouthforum.org)

## 🛠️ Project Setup

This project is built using [Next.js](https://nextjs.org/) 15 with **Turbopack** for fast local development, **Tailwind CSS** for styling, and **Google Fonts** (Geist & Geist Mono) for clean, modern typography.

### Requirements

- Node.js 18+
- npm 9+ or Yarn

### Install Dependencies

```bash
npm install
# or
yarn install

### Development Server

npm run dev

### Build for Production

npm run build
npm start

### 🧱 Project Structure

.
├── app/
│   ├── layout.js        # Root layout with fonts and global components
│   └── globals.css      # Tailwind & global styles
├── components/
│   ├── NavBar.js        # Navigation bar
│   └── Footer.js        # Footer section
├── public/              # Static assets
├── tailwind.config.js   # Tailwind configuration
├── package.json         # Project metadata and dependencies
└── README.md            # You're here!

### ✨ Features

🚀 Fast development with Turbopack

🎨 Styled with Tailwind CSS v4

🧠 Semantic fonts from Google Fonts (Geist & Geist Mono)

⚙️ SEO and metadata for OpenGraph

🧩 Modular components (NavBar, Footer)

🛡️ Linting via ESLint

### 📄 Metadata Configuration

export const metadata = {
  title: 'Igunsin Youth Forum',
  description: 'Igunsin Youth Forum is a community-based organization dedicated to empowering youth through education, innovation, and community development.',
  openGraph: {
    title: 'Igunsin Youth Forum',
    description: 'Igunsin Youth Forum is a community-based organization dedicated to empowering youth through education, innovation, and community development.',
    url: 'https://igunsinyouthforum.org',
    siteName: 'Igunsin Youth Forum',
    type: 'website',
  },
  keywords: 'Oladapo, Community',
  authors: [{ name: 'Oladapo' }],
  creator: 'Oladapo',
  publisher: 'Oladapo',
}

### 👤 Author

Oladapo
Creator, Publisher, and Maintainer

### 📜 License

This project is private and not currently licensed for public redistribution.
```
