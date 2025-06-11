import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { 
    acceptFriendRequestController, 
    getFriendsRequestsController, 
    getMyFriendsController, 
    getOutgoingFriendsReqsController, 
    getRecommendedUsersController, 
    sendFriendRequestController 
} from "../controllers/user.controller.js";

const router = express.Router();

router.use(protectRoute);

router.get("/", getRecommendedUsersController);
router.get("/friends", getMyFriendsController);

router.post("/friend-request/:id", sendFriendRequestController);
router.put("/friend-request/:id/accept", acceptFriendRequestController);

router.get("/friend-requests", getFriendsRequestsController);
router.get("/outgoing-friend-requests", getOutgoingFriendsReqsController);

export default router;