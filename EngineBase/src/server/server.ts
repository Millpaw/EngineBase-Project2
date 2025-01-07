import express from 'express';
import authRoutes from './routes/auth';
import sequelize from '../config/database';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connection successful!');
    app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
  })
  .catch((error: unknown) => {
    console.error('❌ Unable to connect to the database:', error);
  });
