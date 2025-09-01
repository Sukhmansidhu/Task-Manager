# 📝 Task Manager App  

A simple Task Manager application built with **Node.js, Express, and MongoDB Atlas**.  
It allows users to sign up, log in, and manage tasks with status toggling between **Pending** and **Completed**.  

---

## 🚀 Features  

- User Signup & Login (JWT + Session)  
- Add, Edit, Delete tasks  
- Toggle task status (**Pending ↔ Completed**)  
- Flash messages for user feedback  
- Backend deployed on **Vercel** with **MongoDB Atlas**  

---

## 📂 Tech Stack  

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas (Mongoose)  
- **Authentication:** JWT, Express-session  
- **Templating:** EJS  
- **Deployment:** Vercel  

---

## ⚙️ Installation & Setup  

### Prerequisites  
- Node.js (>= 18.x)  
- MongoDB Atlas account  

### Steps  

1. Clone the repository:  
   bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   

2. Install dependencies:  
   bash
   npm install
   

3. Create a `.env` file in the root with:  
   env
   MONGO_URI=your_mongo_atlas_connection_string
   JWT_SECRET=your_secret_key
   SESSION_SECRET=your_session_secret
   

4. Start the server:  
   bash
   npm start
   

5. Open in browser:  
   
   http://localhost:3000/auth/login

---

## 🌐 Live Demo  

🔗 [Task Manager on Vercel](https://task-manager-chi-seven-41.vercel.app/auth/login)  

---

## 🎥 Demo Video  

📹 A 2-minute demo showing signup, login, add/edit/delete tasks, and toggle status.  
📹 [Watch Demo Video](https://drive.google.com/file/d/1nmc1DLeWafnJvy1qupoYAZXBGDlJgjMu/view?usp=sharing)

---

✨ Built with ❤️ for assignment submission.  
