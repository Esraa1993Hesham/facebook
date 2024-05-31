
import express from 'express'
import path from "path"
import postRouter from './src/modules/posts/post.routes.js'
import userRouter from './src/modules/users/user.routes.js'
import commentRouter from './src/modules/comments/comments.routes.js'
import connectionDB from './db/connectionDB.js'
import bcrypt from 'bcrypt'

const port=process.env.port||3000
const app=express()
app.use(express.json());
connectionDB()

app.use("/posts",postRouter)
app.use("/user",userRouter)
app.use("/comments",commentRouter)

app.get("/",(req,res,next)=>{
    res.status(200).json({msg:"hello in my project"})
    
    })
app.use("*",(req,res,next)=>{
res.status(404).json({msg:"sorry not found"})

})

    


app.listen(port,()=>{

console.log("server is running")
})