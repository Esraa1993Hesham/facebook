
import userModel from './../../../db/models/post.model.js'
import postModel from './../../../db/models/post.model.js'





// getpost (reading)------------
export const getPost=(req,res,next)=>{

const posts=postModel.findAll()
res.status(200).json({msg:"done",posts})
}




// specific post ------------
export const specificPost=async(req,res,next)=>{
const{id}=req.body
  const specific = await postModel.findOne({ 
    
    where: { id,auther } });
    if(specific===NULL){ return res.status(200).json({msg:"not found"})}
    res.status(200).json({msg:"done",specific})

  }
  

// createpost-------------
export const createPost=async(req,res,next)=>{
const{title,content,auther}=req.body
    const post=await postModel.create({
        title,content,auther
    })
  


    res.status(200).json({msg:"done",post})
    }




    // ubdatepost----------
    export const ubdatePost=async(req,res,next)=>{
        const{userId,title,content,auther}=req.body
            const post=await postModel.findOrCreate({
        
                where:{userId,title,content,auther}
            })
            if(!post[1]){
              return  res.status(200).json({msg:"post already exist"})
        
            }
        
        
            res.status(200).json({msg:"done",post:post[0]})
            }

// delete post=================

            export const deletePost=async(req,res,next)=>{
              const{UserId}=req.body
                  const post=await postModel.destroy({
                where:{UserId}
                
                  })
                if(!post){
                    return res.status(200).json({msg:"post not found"})

                }
                  res.status(200).json({msg:"deleted"})
                      }
                  
                
                
                      