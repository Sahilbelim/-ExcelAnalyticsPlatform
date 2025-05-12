# 📊 3D Visual Data Analytics Platform

Welcome to the **3D Visual Data Analytics Platform** — a powerful web-based application for visualizing Excel/CSV data through 2D and 3D interactive charts, with AI-powered summaries, export tools, and user authentication.

---

## 🚀 Features

| 🔍 Feature                  | 💡 Description                                         |
| --------------------------- | ------------------------------------------------------ |
| 📂 Upload Excel/CSV Files   | Drag & drop file upload with parsing support.          |
| 📊 2D & 3D Chart Generation | Choose from Bar, Line, Pie, and 3D scatter/bar charts. |
| 🧭 Dynamic Axis Selection   | Let users select X, Y, and Z axes for deeper insight.  |
| 🤖 AI-Powered Summary       | Summarizes uploaded data using OpenAI API.             |
| 📥 Download PNG/PDF Charts  | Export visuals easily with a click.                    |
| 📈 Upload History           | Track past uploads and analyses.                       |
| 👤 User Authentication      | JWT-based login, signup, and role-based dashboard.     |
| 🕹️ 3D Interaction          | Rotate, zoom, and pan 3D charts via Three.js.          |

---

## 🖼️ Landing Page Preview

![Landing Preview](./public/landing_preview.png)

## 🎨 AI-Generated Visual Examples

### 📊 Example 2D Bar Chart (AI Summary Output)

![Bar Chart](./public/bar_ai_example.png)

### 🌐 Example 3D Scatter Plot

![3D Chart](./public/3d_scatter_example.png)

### 🤖 AI Summary Box Example

![AI Summary](./public/ai_summary_box.png)

---

## 🛠️ Tech Stack

* **Frontend:** React.js + Tailwind CSS + Chart.js + Three.js
* **Backend:** Node.js + Express.js + MongoDB + Multer
* **Auth:** JWT Authentication + Role-based access
* **AI:** OpenAI API integration for dynamic summaries
* **Extras:** html2canvas, html2pdf, React Fiber, OrbitControls

---

## 📁 Folder Structure (Important)

```bash
├── client
│   ├── public
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   └── App.js
├── server
│   ├── controllers
│   ├── routes
│   ├── models
│   └── index.js
```

---

## 📦 Setup Instructions

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/3d-data-visualizer.git
```

### 2️⃣ Install frontend

```bash
cd client
npm install
npm run dev
```

### 3️⃣ Install backend

```bash
cd ../server
npm install
npm run server
```

### 4️⃣ Environment Variables

Create a `.env` file in `/server` with:

```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
OPENAI_KEY=your_openai_key
```

---

## 🔐 Authentication Flow

* Signup/Login using email & password
* JWT stored in `localStorage`
* Protected routes using middleware

---

## 📊 3D Chart Example

```js
<Canvas>
  <OrbitControls />
  <mesh position={[x, y, z]}>
    <boxGeometry args={[1, height, 1]} />
    <meshStandardMaterial color="skyblue" />
  </mesh>
</Canvas>
```

---

## 🧠 AI Summary Example

```json
POST /api/ai/summary
{
  "data": [ { "Month": "Jan", "Sales": 120 } ]
}
Response:
{
  "summary": "Sales increased..."
}
```

---

## 📸 Screenshots

* 📌 Dashboard with chart selector
* 📌 3D graph with interactive zoom
* 📌 AI summary card
* 📌 PNG/PDF export buttons

---

## 🙌 Contributors

* 👨‍💻 You (Developer / Student)
* 🤖 ChatGPT (AI Planning Assistant)

---

## 📬 Contact

📧 Email: [sahilbelim7770@gmail.com](mailto:sahilbelim7770@gmail.com)
🌐 GitHub: [@Sahilbelim](https://github.com/Sahilbelim)

---

## 📝 License

This project is MIT Licensed — free to use, modify, and share.

---

> Built with 💙 using React, Tailwind, and Three.js
