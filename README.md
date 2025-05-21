# 🔐 NextAuth Supabase

A modern authentication project built with **Next.js 15**, **React 19**, and **Supabase** for secure and seamless user management.

## 🔗 Live Demo
> To be added...

[👉 View Live Demo](https://your-deployment-url.vercel.app)

---

## 🚀 Features

- 🏠 **Home Page** – Publicly accessible
- 🔐 **Private Page** – Protected, accessible only to authenticated users
- 🔓 **Login Page** – Redirects authenticated users to the home page
- 📝 **Register Page** – Redirects authenticated users to the home page
- 🔁 **Forgot Password Page** – Redirects authenticated users to the home page
- 🔄 **Reset Password Page** – Redirects authenticated users to the home page

---

## 🛡️ Route Protection

Routes are protected using **Supabase middleware**, following the [official documentation](https://supabase.com/docs/guides/auth/server-side/nextjs), with custom logic to:

- 🔐 Restrict access to the private page for unauthenticated users
- 🚫 Redirect logged-in users away from guest-only pages

---

## 🧠 What I Learned

- 🔧 How to **integrate Supabase authentication into a Next.js app**
- 🧱 How to **protect routes using Supabase middleware**
- 🔁 How to **redirect based on user authentication state**
- 🧠 How to **manage auth state on both the client and server sides**

---

## 🧩 Tech Stack

- ⚙️ **Next.js 15** with Turbopack
- ⚛️ **React 19**
- 🛡️ **Supabase** for authentication and user management
- 🎨 **TailwindCSS** (optional if you’re styling pages)
- 🧹 **ESLint & TypeScript** for a clean developer experience

---

## 🛠️ Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/masmoud/next-auth-supabase.git
   cd next-auth-supabase
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your environment variables**
   Create a `.env.local` file in the root and add the following:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Run the dev server**

   ```bash
   npm run dev
   ```

---

## 📁 Pages Overview

| Route              | Access        | Description                      |
| ------------------ | ------------- | -------------------------------- |
| `/`                | Public        | Homepage                         |
| `/private`         | Authenticated | Accessible only when logged in   |
| `/login`           | Guests only   | Redirects logged-in users to `/` |
| `/register`        | Guests only   | Redirects logged-in users to `/` |
| `/forgot-password` | Guests only   | Redirects logged-in users to `/` |
| `/reset-password`  | Guests only   | Redirects logged-in users to `/` |

---

## 📦 Scripts

```bash
npm run dev     # Start the dev server with Turbopack
npm run build   # Build for production
npm run start   # Start the production server
npm run lint    # Run the linter
```

---

## 🖼️ Screenshots

> Will be added later
>
> ![Login Page](./public/screenshots/login.png)
> ![Private Page](./public/screenshots/private.png)

---

## 🤝 Contributing

Contributions are welcome!
If you have suggestions or bug reports, feel free to fork this repo and open a pull request.

---

## 📬 Contact

Created by [Mohamed Amoussa](https://amoussamohamed.fr)
Let’s connect on [LinkedIn](https://linkedin.com/in/mohamed-amoussa) or check out more on [GitHub](https://github.com/masmoud)

---

## 📄 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and share it for personal or commercial purposes.

