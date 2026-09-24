# 🎓 GuruCool

> A full-stack e-learning platform with role-based management, OTP-backed onboarding, and real-time classroom communication.

GuruCool is an education platform built with **Next.js** and **MongoDB** for Admin, Teacher, and Student workflows. It combines account management, course/category administration, email-based verification, and live classroom communication in one project.

## ✨ Key Features

- 👥 **Role-based workflows** for Admin, Teacher, and Student users
- 🔐 **Authentication & verification** flows using JWT, encrypted data handling, and OTP/email workflows
- 🎥 **Real-time classroom communication** using Socket.IO signaling for room joins, calls, and peer negotiation
- 🧑‍💼 **Admin management** for users, categories, contact data, and platform operations
- 📧 **Email integration** with Nodemailer
- 🗄️ **MongoDB persistence** through Mongoose
- 🎨 Responsive UI built with Next.js, React, and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend / Full Stack:** Next.js 13, React 18
- **Database:** MongoDB, Mongoose
- **Real-time:** Socket.IO
- **Authentication / Security:** JWT, CryptoJS
- **Email:** Nodemailer
- **Styling:** Tailwind CSS

## 🧩 Project Structure

```txt
pages/
├── admin/        # Admin workflows
├── api/          # Next.js API routes
├── lobby/        # Classroom lobby
├── room/         # Real-time classroom/call flow
├── login.js
├── register.js
└── ...

server.js         # Socket.IO signaling server
```

## 🚀 Run Locally

```bash
git clone https://github.com/vaibhav537/GURUCOOL.git
cd GURUCOOL
yarn install
yarn dev
```

For the real-time classroom server, run:

```bash
yarn serve
```

Create a `.env.local` file and configure the database connection strings and application secrets required by the API routes before starting the application.

## 👨‍💻 Author

**Vaibhav Mali**  
[GitHub](https://github.com/vaibhav537) • [LinkedIn](https://www.linkedin.com/in/udr-vaibhavmali)
