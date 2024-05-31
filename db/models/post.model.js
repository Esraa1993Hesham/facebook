import { sequelize } from "../connectionDB.js";
import { Sequelize,DataTypes } from "sequelize";
import userModel from "./user.model.js";


const postModel = sequelize.define(
  'post',
  {

   title: {
      type: DataTypes.STRING(200),
     
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  
 auther: {
    type: DataTypes.STRING(200),
    allowNull: false,

  },
});

userModel.hasMany(postModel)
postModel.belongsTo(userModel,
{onDelete:"CASCADE",onUpdate:"CASCADE",}

)

export default postModel