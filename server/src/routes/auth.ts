import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User";

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
    
    try {
      // Check if username already exists
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        res.status(400).json({ message: "Username already exists" });
        // TODO: ADD REDIRECT TO LOGIN PAGE ON ERROR AFTER 5 SECONDS
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Save user to database
      const newUser = await User.create({
        username,
        password: hashedPassword,
        id: 0,
      });
  
      res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
      // TODO: ADD REDIRECT TO LOGIN PAGE ON ERROR AFTER 5 SECONDS
    }
});
  

export default router;
