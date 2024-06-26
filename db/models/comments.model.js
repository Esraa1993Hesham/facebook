import { sequelize } from "../connectionDB.js";
import { Sequelize,DataTypes } from "sequelize";
import userModel from "./user.model.js";
import postModel from "./post.model.js";


const commentModel = sequelize.define(
  'comment',
  {

  
 content: {
    type: DataTypes.STRING(500),


  },
});

userModel.hasMany(commentModel);
commentModel.belongsTo(userModel,
{onDelete:"CASCADE",onUpdate:"CASCADE",}

)


postModel.hasMany(commentModel);
commentModel.belongsTo(postModel,
{onDelete:"CASCADE",onUpdate:"CASCADE",}

)




export default commentModel