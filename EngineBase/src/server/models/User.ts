import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';

interface UserAttributes {
  id: number;
  username: string;
  password: string;
}

class User extends Model<UserAttributes> {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export default User;
