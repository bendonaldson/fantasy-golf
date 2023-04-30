import Team from "../models/Team.js";
import Player from "../models/Player.js";

export const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();

    if (!teams) {
      return res.status(404).json({ message: "No teams found!" });
    }

    return res.status(200).json(teams);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getTeamById = async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    return res.status(200).json(team);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createTeam = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.user;

    const team = await Team.findOne({ name: name });

    if (team) {
      return res
        .status(400)
        .json({ message: "A Team with that name already exists!" });
    }

    const newTeam = await Team.create({ name, user: id });

    if (!newTeam) {
      return res.status(404).json({ message: "No team found!" });
    }

    return res.status(201).json(newTeam);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getTeamName = async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    return res.status(200).json(team.name);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateTeamName = async (req, res) => {
  try {
    const { teamId } = req.params;
    const { name } = req.body;
    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    team.name = name;
    await team.save();

    return res.status(200).json("Team name updated successfully!");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const addPlayerToTeam = async (req, res) => {
  try {
    const { teamId, playerId } = req.params;

    const team = await Team.findById(teamId);
    const player = await Player.findById(playerId);

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    if (!player) {
      return res.status(404).json({ message: "No player found!" });
    }

    if (team.players.includes(playerId)) {
      return res.status(400).json({ message: "Player already in team!" });
    }

    team.players.push(playerId);
    await team.save();

    return res.status(200).json("Player added to team successfully!");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const removePlayerFromTeam = async (req, res) => {
  try {
    const { teamId, playerId } = req.params;

    const team = await Team.findById(teamId);
    const player = await Player.findById(playerId);

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    if (!player) {
      return res.status(404).json({ message: "No player found!" });
    }

    if (!team.players.includes(playerId)) {
      return res.status(400).json({ message: "Player not in team!" });
    }

    team.players.pull(playerId);
    await team.save();

    return res.status(200).json("Player removed from team successfully!");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getTeamPlayers = async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await Team.findById(teamId);

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    return res.status(200).json(team.players);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getTeamByPlayer = async (req, res) => {
  try {
    const { playerId } = req.params;
    const player = await Player.findById(playerId);

    if (!player) {
      return res.status(404).json({ message: "No player found!" });
    }

    const team = await Team.findOne({ players: playerId });

    if (!team) {
      return res.status(404).json({ message: "No team found!" });
    }

    return res.status(200).json(team);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
