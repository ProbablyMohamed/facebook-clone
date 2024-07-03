import { Router } from "express";
 import * as commentController from "./comment.controller.js";
const router = Router();


router.post("/addComment", commentController.addComment)
router.get("/getComment", commentController.getComments)
router.get("/userPostsAndComments", commentController.userPostsAndComments)
router.put("/updateComment", commentController.updateComment)
router.delete("/deleteComment", commentController.deleteComment)







export default router