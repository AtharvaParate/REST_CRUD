# 📌 REST_CRUD

*A simple RESTful API for Quora-like CRUD operations*

---

## 🚀 Project Overview
**REST_CRUD** is a basic implementation of a Quora-style application that allows users to perform CRUD (Create, Read, Update, Delete) operations on posts. The backend is built using **Node.js, Express.js, and MongoDB (or any database you are using)**, with API endpoints for handling user-generated content.

---

## 🛠 Features
✔️ **Create Posts** - Users can submit new posts.  
✔️ **Read Posts** - Fetch all posts or a single post.  
✔️ **Update Posts** - Edit an existing post using `PATCH`.  
✔️ **Delete Posts** - Remove a post from the database.  
✔️ **RESTful API** - Follows REST principles for easy integration.  
✔️ **Middleware Support** - Uses Express middleware for parsing requests.  

---

## 📝 API Endpoints

| Method  | Endpoint         | Description                |
|---------|-----------------|----------------------------|
| `GET`   | `/posts`        | Fetch all posts           |
| `GET`   | `/posts/:id`    | Fetch a single post by ID |
| `POST`  | `/posts`        | Create a new post         |
| `PATCH` | `/posts/:id`    | Update a post's content   |
| `DELETE`| `/posts/:id`    | Delete a post             |

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/AtharvaParate/REST_CRUD.git
cd REST_CRUD
