import League from "../models/League.js";
import Team from "../models/Team.js";

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
    const { id } = req.params;
    const league = await League.findById(id);

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
    const league = await League.create({ name });

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(201).json(league);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateLeagueName = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const league = await League.findByIdAndUpdate(id, { name });

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
    const { id } = req.params;
    const league = await League.findById(id);

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
    const { id } = req.params;
    const league = await League.findById(id);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    await League.deleteOne({ _id: id });

    return res.status(200).json(league);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const addTeamToLeague = async (req, res) => {
  try {
    const { leagueId, teamId } = req.params;
    const league = await League.findById(leagueId);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    league.teams.push(team);

    await league.save();

    return res.status(200).json(league);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const removeTeamFromLeague = async (req, res) => {
  try {
    const { leagueId, teamId } = req.params;
    const league = await League.findById(leagueId);

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    const index = league.teams.indexOf(team);

    league.teams.splice(index, 1);

    await league.save();

    return res.status(200).json(league);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getTeamsInLeague = async (req, res) => {
  try {
    const { id } = req.params;
    const league = await League.findById(id);

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
    const league = await League.find({ teams: teamId });

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
    const { id } = req.params;
    const league = await League.findById(id);

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
    const { id } = req.params;
    const { rules } = req.body;
    const league = await League.findByIdAndUpdate(id, { rules });

    if (!league) {
      return res.status(404).json({ message: "No league found!" });
    }

    return res.status(200).json(league);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
