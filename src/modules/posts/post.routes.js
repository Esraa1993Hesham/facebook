import { Router } from "express"
import { createPost, deletePost, getPost, specificPost, ubdatePost } from "./post.controler.js"


const router=Router()


router.get("/",getPost)
router.get("/specificPost",specificPost)
router.post("/",createPost)
router.patch("/:id",ubdatePost)
router.delete("/",deletePost)



export default router