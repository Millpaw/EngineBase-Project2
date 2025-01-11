import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

const users = [
  { username: "test", password: bcrypt.hashSync("password123", 10) }, // Sample user
];

// Login route
router.post("/login", async (req: express.Request, res: express.Response): Promise<void> => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });

  res.json({ token });
});

// Registration route
router.post("/register", async (req: express.Request, res: express.Response): Promise<void> => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: "Username and password are required" });
      return;
    }
    
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Save the user (replace this logic with database insertion)
    users.push({ username, password: hashedPassword });
  
    res.status(201).json({ message: "User registered successfully" });
});
  

export default router;
