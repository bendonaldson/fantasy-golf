import Team from "../models/Team.js";
import User from "../models/User.js";

export const isTeamManager = async (req, res, next) => {
  try {
    const teamId = await req.params.teamId;
    const userId = await req.params.userId;

    if (!teamId) {
      return res.status(404).json({ message: "You must provide a team id." });
    }

    if (!userId) {
      return res.status(404).json({ message: "You must provide a user id." });
    }

    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ message: "Team not found." });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    if (team.manager === user.id || user.admin) {
      next();
    } else {
      res.status(403).json({ message: "You are not the manager of this team." });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
