import League from "../models/League.js";
import Team from "../models/Team.js";
import User from "../models/User.js";

export const getAllLeagues = async (req, res) => {
  try {
    const leagues = await League.find();

    if (!leagues) {
      return res.status(404).json({ message: "No leagues found!" });
    }

    return res.status(200).json(leagues);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getLeagueById = async (req, res) => {
  try {
    const { leagueId } = req.params;
    const league = await League.findById(leagueId);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json(league);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createLeague = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.user;

    // Check if the league name already exists
    const league = await League.findOne({ name: name });
    if (league) {
      return res.status(409).json({ message: "League name already exists!" });
    }

    const newLeague = await League.create({ name, manager: id });

    if (!newLeague) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(201).json(newLeague);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateLeagueName = async (req, res) => {
  try {
    const { leagueId } = req.params;
    const { name } = req.body;
    const league = await League.findByIdAndUpdate(leagueId, { name });

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json("League name updated successfully!");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getLeagueName = async (req, res) => {
  try {
    const { leagueId } = req.params;
    const league = await League.findById(leagueId);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json(league.name);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteLeague = async (req, res) => {
  try {
    const { leagueId } = req.params;
    const league = await League.findById(leagueId);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    await League.deleteOne({ _id: leagueId });

    return res.status(200).json("League deleted successfully!");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const addTeamToLeague = async (req, res) => {
  try {
    const { leagueId, teamId } = req.params;

    const league = await League.findById(leagueId);
    const user = await User.findById(req.user.id);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    if (league.teams.includes(teamId)) {
      return res.status(409).json({ message: "Team already in league!" });
    }

    league.teams.push(team);
    user.leagues.push(league);

    await league.save();
    await user.save();

    return res.status(200).json("Team added to league successfully!");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const removeTeamFromLeague = async (req, res) => {
  try {
    const { leagueId, teamId } = req.params;
    const league = await League.findById(leagueId);
    const user = await User.findById(req.user.id);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    if (!league.teams.includes(teamId)) {
      return res.status(409).json({ message: "Team not in league!" });
    }

    const index = league.teams.indexOf(team);
    league.teams.splice(index, 1);

    const userIndex = user.leagues.indexOf(league);
    user.leagues.splice(userIndex, 1);

    await league.save();
    await user.save();

    return res.status(200).json("Team removed from league successfully!");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getTeamsInLeague = async (req, res) => {
  try {
    const { leagueId } = req.params;
    const league = await League.findById(leagueId);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json(league.teams);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getLeagueByTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    const league = await League.find({ teamId });

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json(league);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateManager = async (req, res) => {
  try {
    const { leagueId } = req.params;
    const { managerId } = req.body;
    const league = await League.findByIdAndUpdate(leagueId, { managerId });

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json(league);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getManager = async (req, res) => {
  try {
    const { leagueId } = req.params;
    const league = await League.findById(leagueId);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json(league.manager);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getLeagueByManager = async (req, res) => {
  try {
    const { managerId } = req.params;
    const league = await League.find({ manager: managerId });

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json(league);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getLeagueRules = async (req, res) => {
  try {
    const { leagueId } = req.params;
    const league = await League.findById(leagueId);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json(league.rules);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateLeagueRules = async (req, res) => {
  try {
    const { leagueId } = req.params;
    const { rules } = req.body;
    const league = await League.findByIdAndUpdate(leagueId, { rules });

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json("League rules updated successfully!");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
