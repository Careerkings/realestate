import express  from "express";
import test from "../controllers/user.controller.js";

const router = express.Router();


const userRouter = router.get('/test', test)

export default userRouter


