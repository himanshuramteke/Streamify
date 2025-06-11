import { generateStreamToken } from "../config/streamConfig.js";

export async function getStreamTokenController(req, res) {
    try {
        const token = generateStreamToken(req.user.id);
        res.status(200).json({ token });
    } catch (error) {
        console.log("Error in getStreamToken controller", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}