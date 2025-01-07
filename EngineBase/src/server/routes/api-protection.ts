import express from 'express';
import { authenticateJWT } from './auth';

const router = express.Router();

router.get('/protected-route', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected route!', user: req.user });
});

export default router;
