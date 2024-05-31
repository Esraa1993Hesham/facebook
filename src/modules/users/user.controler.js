
import userModel from './../../../db/models/user.model.js'
import postModel from '../../../db/models/post.model.js'




//user regestration-----------------------------------------------

export const createUser=async(req,res,next)=>{
const{userName,email,password}=req.body
    const user=await userModel.findOrCreate({

        where:{email,userName,password}
    })
    if(!user[1]){
      return  res.status(200).json({msg:"this user email is already exist"})

    }


    res.status(200).json({msg:"done",user:user[0]})
    }




    //user login-----------------------------------------------

export const loginUser=async(req,res,next)=>{
  const{email,password}=req.body
      const user=await userModel.findOne({
  
          where:{email}
      })
    if(!user){  return res.status(200).json({msg:"sorry this email is not exist.. register first"})}
      res.status(200).json({msg:"welcome"})
      }

      

      

    //user logout-----------------------------------------------

export const logoutUser=async(req,res,next)=>{
const{email}=req.body
  const user=await userModel.destroy({
where:{email}

  })

  return res.status(200).json({msg:"you are logged out"})
      }
  



    export const getUser=(req,res,next)=>{

      const users=userModel.findAll()
      res.status(200).json({msg:"done",users})
      }
      

          //specific user-----------------------------------------------


      

            