# ToyStore — Modern Fullstack E-commerce

A high-performance toy store application focused on clean architecture, developer experience, and seamless user interaction.

## 🛠 Tech Stack

- **Backend:** Laravel 13 (PHP 8.3)
- **Frontend:** React 19 + Inertia.js 3.0 (SPA experience)
- **Styling:** Tailwind CSS 4.0 & Shadcn UI
- **State Management:** Zustand (Cart logic & UI state)
- **Environment:** Laravel Sail (Docker)
- **Testing:** Pest

## ✨ Key Features

- **SPA Performance:** Instant navigation via Inertia.js without page refreshes.
- **Dynamic Catalog:** Real-time product filtering and reactive state.
- **Robust Cart:** Persistent shopping cart managed with Zustand.
- **Developer First:** Fully dockerized environment with a custom Makefile for rapid development.

## 📦 Installation & Setup

1. **Clone the repository:**
   bash
   git clone [https://github.com/your-username/toystore.git](https://github.com/your-username/toystore.git)
   cd toystore
Environment Setup:

Bash
cp .env.example .env
make up
make install-node-packages
make refresh
Running the Application:

Full Start (Backend + Frontend): make start

Vite Dev Server: make run-dev-front

Run Tests: make test

🏗 Key Commands (Makefile)
make start — Up containers and start Vite.

make refresh — Refresh migrations and run seeders.

make recreate — Full rebuild of the environment.

make test — Run Pest test suite.

make artisans <command> — Run artisan commands inside Sail.

Screenshots:
<img width="1890" height="930" alt="image" src="https://github.com/user-attachments/assets/8cd916d5-a41b-44e0-8ace-60570e4d4494" />
<img width="1890" height="930" alt="image" src="https://github.com/user-attachments/assets/ebcd98f7-6900-484b-af08-f2d69285174f" />
<img width="801" height="877" alt="image" src="https://github.com/user-attachments/assets/c0256b9a-92ec-4500-a621-ce78d1141e78" />
<img width="1875" height="933" alt="image" src="https://github.com/user-attachments/assets/168ea452-143b-4663-9f9d-1f0e8081b17d" />
<img width="1875" height="933" alt="image" src="https://github.com/user-attachments/assets/34c63472-aecf-4385-bafe-4dc9bdb31c5e" />


