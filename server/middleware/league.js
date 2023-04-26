import League from "../models/League.js";

export const isInLeague = async (req, res, next) => {
  try {
    const leagueId = req.params.leagueId;

    if (!leagueId) {
      res.status(400).json({ error: "You must provide a league id." });
    }

    const league = await League.findById(leagueId);

    if (!league) {
      res.status(404).json({ error: "League not found." });
    }

    const teams = league.teams;

    if (teams.includes(req.user.id) || req.user.admin) {
      next();
    } else {
      res.status(403).json({ error: "You are not in this league." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const isManager = async (req, res, next) => {
  try {
    const leagueId = req.params.leagueId;

    if (!leagueId) {
      return res.status(400).json({ error: "You must provide a league id." });
    }

    const league = await League.findById(leagueId);

    if (!league) {
      return res.status(404).json({ error: "League not found." });
    }

    const leagueManager = league.manager;

    if (!leagueManager) {
      return res.status(404).json({ error: "League manager not found." });
    }

    if (leagueManager.toString() === req.user.id.toString() || req.user.admin) {
      next();
    } else {
      return res
        .status(403)
        .json({ error: "You are not a manager of this league." });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
