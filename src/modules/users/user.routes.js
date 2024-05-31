import { Router } from "express"
import { getUser, createUser,loginUser,logoutUser } from "./user.controler.js"


const router=Router()
router.get("/",getUser)
router.post("/",createUser)
router.post("/login",loginUser)
router.delete("/logout",logoutUser)


export default router