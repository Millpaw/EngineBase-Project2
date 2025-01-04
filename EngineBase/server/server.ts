import express from 'express';
import authRoutes from './routes/auth';
import sequelize from './database';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(5000, () => console.log('Server running on http://localhost:5000'));
});
