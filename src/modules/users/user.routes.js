import { Router } from "express";
 import * as userController from "./user.controller.js";
const router = Router();


router.post("/signUp", userController.addUser)
router.post("/logIn", userController.login)
router.patch("/logOut", userController.logOut)














export default router