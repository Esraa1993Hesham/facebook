import { sequelize } from "../connectionDB.js";
import { Sequelize,DataTypes } from "sequelize";
import bcrypt from 'bcrypt'

const userModel = sequelize.define(
  'User',
  {

    userName: {
      type: DataTypes.STRING(200),
      allowNull: false,
     
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
   
    },
  
  password: {
    type: DataTypes.STRING(200),
    allowNull: false



  },
});
export default userModel


var salt = bcrypt.genSaltSync(10);
const saltRounds = 10;
bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
  
      return;
  }
  
console.log("Salt generation successful, proceed to hash the password")
  });



 // Replace with the actual password
bcrypt.hash(userModel.password, salt, (err, hash) => {
    if (err) {
        // Handle error
        return;
    }

// Hashing successful, 'hash' contains the hashed password
console.log('Hashed password:', hash);
});


