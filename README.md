# 🦈 SyntaxShark - AI-Powered Code Reviewer

![SyntaxShark Banner]<img width="1843" height="933" alt="image" src="https://github.com/user-attachments/assets/281368bf-afb5-4857-a9b5-6e973bebcfcc" />

*(Optional: Replace this link with a screenshot of your Home Page later)*

**SyntaxShark** is a Full-Stack SaaS application that automates code reviews using the power of Generative AI. It acts as an intelligent coding assistant, providing real-time feedback, bug fixes, and best practice suggestions for developers.

> **Live Demo:** [Insert your Vercel Link Here]

---

## 🚀 Key Features

- **🤖 AI-Powered Analysis:** Leverages **Llama-3 (via Groq)** to analyze code logic, syntax, and efficiency instantly.
- **⚡ Real-Time Feedback:** Returns structured reviews (Original Code vs. Corrected Code) with deep explanations.
- **📜 Smart History System:** Automatically saves every review to **MongoDB**. Users can retrieve past solutions via a slide-out sidebar.
- **🌍 Multi-Language Support:** accurate reviews for Python, JavaScript, Java, C++, and more.
- **🎨 Modern UI/UX:** Built with **React + Vite** and **Tailwind CSS** for a responsive, dark-mode developer experience.
- **🛡️ Secure Architecture:** Backend acts as a secure gateway to protect API keys and manage rate limits.

---

## 🛠️ Tech Stack

### Frontend
- **React.js (Vite):** High-performance component-based UI.
- **Tailwind CSS:** Responsive and modern styling.
- **React Markdown & Syntax Highlighter:** For rendering code blocks beautifully.
- **Axios:** For API communication.

### Backend
- **Node.js & Express:** RESTful API architecture.
- **Groq SDK:** To interface with the Llama-3 LLM.
- **MongoDB & Mongoose:** NoSQL database for storing review history.
- **Cors & Dotenv:** Security and configuration management.

---

## ⚙️ Installation & Setup

Follow these steps to run SyntaxShark locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR_USERNAME/SyntaxShark.git](https://github.com/YOUR_USERNAME/SyntaxShark.git)
cd SyntaxShark
