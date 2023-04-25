import League from "../models/League.js";

export const isInLeague = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(400).json({ error: "You must provide a league id." });
    }

    const teamsInLeague = League.findById(id).teams;

    if (!teamsInLeague) {
      res.status(404).json({ error: "League not found." });
    }

    if (teamsInLeague.includes(req.user.id)) {
      next();
    } else {
      res.status(403).json({ error: "You are not in this league." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const isManager = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.status(400).json({ error: "You must provide a league id." });
    }

    const leagueManager = League.findById(id).manager;

    if (!leagueManager) {
      res.status(404).json({ error: "League not found." });
    }

    if (leagueManager === req.user.id) {
      next();
    } else {
      res.status(403).json({ error: "You are not a manager of this league." });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
