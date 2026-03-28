import express from "express";
import users from "./users.js";
import cors from "cors";


const app = express();
const PORT = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello from TypeScript backend!");
});


app.get("/api/user", (req, res)=> {
    res.send(users)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});