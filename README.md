# ToyStore - Modern Fullstack E-commerce

A high-performance toy store application built with the latest web technologies. This project focuses on speed, developer experience, and seamless user interaction.

##  Tech Stack

- **Backend:** Laravel 13 (PHP 8.3)
- **Frontend:** React 19, Inertia.js 3.0
- **Styling:** Tailwind CSS 4.0, Shadcn UI
- **State Management:** Zustand (Cart & UI logic)
- **Environment:** Laravel Sail (Docker)

##  Features

- **Modern SPA Experience:** Powered by Inertia.js for fast, no-refresh navigation.
- **Dynamic Catalog:** Real-time filtering and pagination.
- **Robust State:** Cart management using Zustand for persistent and reactive data.
- **eveloper First:** Fully dockerized environment with a comprehensive Makefile.
## 📦 Installation & Setup

getStarted

1. **Clone the repo:**
   
   git clone [toyStore]
   cd toystore
Full Setup (Docker, Migrations, Assets):

make up
make install-node-packages
make refresh
Running the Application:

Backend: Already running via make up (Sail).

Frontend (Vite): bash
make start
