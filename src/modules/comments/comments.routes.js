import { Router } from "express"
import { getComments,createComment,ubdateComment,deleteComment,specificUser } from "./comments.controler.js"
const router=Router()


router.get("/",getComments)
router.get("/specificUser",specificUser)
router.post("/",createComment)
router.patch("/",ubdateComment)
router.delete("/",deleteComment)






export default router