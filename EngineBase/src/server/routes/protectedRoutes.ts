import express, { Request, Response } from 'express';
import { authenticateJWT } from '../middleware/authenticateJWT';

const router = express.Router();

router.get('/profile', authenticateJWT, (req: Request, res: Response) => {
  const user = (req as any).user; // Access user data from middleware
  res.json({
    message: 'Welcome to your profile!',
    user,
  });
});

export default router;
