import express from 'express';
import sequelize from './server/src/config/database';

const app = express();
app.use(express.json());

sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connection successful!');
    app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
  })
  .catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });
