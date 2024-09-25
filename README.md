# 🎟️ Propass - Complete Events Booking Platform

**Propass** is a full-featured, modern events booking platform built with **MERN stack** and **Next.js**. It's designed to provide a smooth, seamless user experience for booking events, with secure payment processing via **Stripe** and user authentication powered by **Clerk**.

---

## 🤖 Introduction

Built on **Next.js 14**, the events application stands as a comprehensive, full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through **Stripe**, you have the capability to purchase tickets for any event or even initiate and manage your own events.

If you're getting started and need assistance or face any bugs, join our active **Discord community** with over **27k+ members**. It's a place where people help each other out.

---

## ⚙️ Tech Stack:

- **Node.js**
- **Next.js** (v14)
- **TypeScript**
- **TailwindCSS**
- **Stripe** (Payment)
- **Zod** (Validation)
- **React Hook Form** (Form Handling)
- **Shadcn**
- **Uploadthing** (File uploads)
- **Clerk** (Authentication)

---

## 🔋 Features

- **👉 Authentication (CRUD) with Clerk**: User management through Clerk, ensuring secure and efficient authentication.

- **👉 Events (CRUD)**: Comprehensive functionality for creating, reading, updating, and deleting events, giving users full control over event management.
  
  - **Create Events**: Users can effortlessly generate new events, providing essential details such as title, date, location, and any additional information.
  - **Read Events**: Seamless access to a detailed view of all events, allowing users to explore event specifics, including descriptions, schedules, and related information.
  - **Update Events**: Empowering users to modify event details dynamically, ensuring that event information remains accurate and up-to-date.
  - **Delete Events**: A straightforward process for removing events from the system, giving administrators the ability to manage and curate the platform effectively.

- **👉 Related Events**: Smartly connects related events and displays them on the event details page, making the platform more engaging for users.

- **👉 Organized Events**: Efficient organization of events, showing events created by users on their profile page.

- **👉 Search & Filter**: A robust search and filter system, enabling users to easily find events that match their preferences.

- **👉 New Category**: Allows for seamless addition of new event categories, keeping the platform adaptable and dynamic.

- **👉 Checkout and Pay with Stripe**: Secure and smooth payment transactions using Stripe for a streamlined checkout experience.

- **👉 Event Orders**: A comprehensive order management system providing a clear overview of all event-related transactions.

- **👉 Search Orders**: A quick and efficient search feature for tracking and managing event orders.

- **👉 Code Architecture**: Designed with a focus on reusability, ensuring a scalable and maintainable codebase.

---

## 📂 Project Structure:

```bash
.
├── components/         # Reusable React components for UI
├── pages/              # Next.js pages for SSR
├── api/                # Express API routes (bookings, payments)
├── models/             # MongoDB models for events, users, bookings
├── public/             # Static assets (images, icons)
├── utils/              # Utility functions (helpers, formatters)
├── server.js           # Express server setup
└── package.json        # Project dependencies and scripts
