import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getMyFriendsController, getRecommendedUsersController } from "../controllers/user.controller.js";

const router = express.Router();

router.use(protectRoute);

router.get("/", getRecommendedUsersController);
router.get("/friends", getMyFriendsController);

export default router;