
import userModel from '../../../db/models/user.model.js'
import commentModel from './../../../db/models/comments.model.js'





// get all comments (reading)------------
export const getComments=(req,res,next)=>{

const comments=commentModel.findAll()
res.status(200).json({msg:"done",comments})
}


// create comment-------------
export const createComment=async(req,res,next)=>{
const{content,postId,UserId}=req.body
    const comment=await commentModel.create({
        content,postId,UserId
    })
  


    return res.status(200).json({msg:"done",comment})
    }




    // ubdate comment----------
    export const ubdateComment=async(req,res,next)=>{
        const{postId,content,UserId}=req.body
            const comment=await commentModel.findOrCreate({
        
                where:{postId,content,UserId}
            })
            if(!comment[1]){
              return  res.status(200).json({msg:"comment already exist"})
        
            }
        
        
            res.status(200).json({msg:"done",comment:comment[0]})
            }

// delete comment=================

            export const deleteComment=async(req,res,next)=>{
                const{UserId}=req.body
                  const comment=await commentModel.destroy({
                where:{UserId}
                
                  })
                if(!comment){
                    return res.status(200).json({msg:"comment not found"})

                }
                  res.status(200).json({msg:"deleted"})
                      }
                  
                

// specific=================

    export const specificUser=async(req,res,next)=>{
      const{UserId,postId}=req.body
      const specificUser=userModel.findAll(
        {

          where:{UserId,postId}

        }
      )
      res.status(200).json({msg:"done",specificUser})
      }
      

                
                      