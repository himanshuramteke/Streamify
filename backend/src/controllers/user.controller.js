import User from "../models/User.js";

export async function getRecommendedUsersController(req, res) {
  try {
    const currentUserId = req.user.id;
    const currentUser = req.user;

    const recommendedUsers = await User.find({
      $and: [
        { _id: { $ne: currentUserId } }, //exclude current user
        { $id: { $nin: currentUser.friends } }, //exclude current user's friends
        { isOnboarded: true },
      ],
    });
    res.status(200).json(recommendedUsers);
  } catch (error) {
    console.error("Error in getRecommendedUsers controller", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export async function getMyFriendsController(req, res) {
    try {
        const user = await User.findById(req.user.id)
          .select("friends")
          .populate("friends", "fullName profilePic nativeLanguage learningLanguage");

        res.status(200).json(user.friends);
    } catch (error) {
        console.log("Error in getMyFriends controller", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
