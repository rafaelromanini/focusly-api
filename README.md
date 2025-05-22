# 🚀 Focusly

An API for managing a **To-Do List** with **Goals** and **Tasks**, built with **Strapi** and **TypeScript**.

## 📝 Description

Focusly is a simple and efficient API designed to help users manage their goals and tasks in a structured way.  
It uses **Strapi** as the backend framework, powered by **TypeScript**, providing flexibility, type safety, and speed in development.  

The API includes **full CRUD operations** for both **Goals** and **Tasks**, with **JWT authentication** for secure access.

## ✅ Features

- **Full CRUD** for Goals.
- **Full CRUD** for Tasks.
- Link **Tasks** to specific **Goals** or keep them independent.
- Secure access with **JWT-based authentication**.
- Auto-generated **timestamps** for all entries.
- User-based data filtering and validation.

## 🛠️ Technologies

- **Strapi** — Headless CMS and backend framework.  
- **TypeScript** — Strongly typed programming language.  
- **Node.js** — JavaScript runtime for executing the backend.  
- **JWT** — JSON Web Tokens for authentication.
- **SQLite** — Lightweight database used in **Quick Start** mode.
- **RESTful API** — For structured communication.


## 🔐 Authentication

The API uses **JWT** for secure authentication.  
To access protected endpoints, you must first authenticate and include the **Bearer Token** in the Authorization header of your requests.

Example:  
Authorization: Bearer <your-jwt-token>

## 💻 Frontend

The frontend for Focusly is currently **in development**.  
Stay tuned for updates!  

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/rafaelromanini/focusly-api
cd focusly
```
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run develop
```
4. Access Strapi Admin Panel:  
Open http://localhost:1337/admin in your browser.

## 🗂️ Project Structure
```bash
focusly  
├── .strapi  
├── .tmp  
│   └── data.db  
├── config  
├── database  
│   └── migrations  
├── dist  
├── public  
├── src  
│   ├── admin  
│   ├── api  
│   │   ├── goal  
│   │   │   ├── content-types/goal/schema.json  
│   │   │   ├── controllers/goal.ts  
│   │   │   ├── routes/goal.ts  
│   │   │   └── services/goal.ts  
│   │   └── task  
│   │       ├── content-types
│   │       ├── controllers
│   │       ├── routes
│   │       └── services
├── extensions  
│   └── index.ts  
├── types/generated  
    ├── components.d.ts  
    └── contentTypes.d.ts  
```
## 👤 Author

**Rafael Romanini**  
Linkedin: [LinkedIn](https://www.linkedin.com/in/rafaelromanini) 
Github: [GitHub](https://github.com/rafaelromanini)
