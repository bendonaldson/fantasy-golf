import express from "express";

import {
  getAllTeams,
  getTeamById,
  createTeam,
  getTeamName,
  updateTeamName,
  getTeamPlayers,
  addPlayerToTeam,
  removePlayerFromTeam,
  getTeamByPlayer,
} from "../controllers/teams.js";

import { verifyToken, isAdmin } from "../middleware/auth.js";
import { isTeamManager } from "../middleware/teams.js";

const router = express.Router();

router.get("/", verifyToken, isAdmin, getAllTeams);
router.post("/", verifyToken, createTeam);

router.get("/:teamId", verifyToken, isTeamManager, getTeamById);

router.get("/:teamId/name", verifyToken, isTeamManager, getTeamName);
router.put("/:teamId/name", verifyToken, isTeamManager, updateTeamName);

router.get("/:teamId/players", verifyToken, isTeamManager, getTeamPlayers);
router.post(
  "/:teamId/players/:playerId",
  verifyToken,
  isTeamManager,
  addPlayerToTeam
);
router.delete(
  "/:teamId/players/:playerId",
  verifyToken,
  isTeamManager,
  removePlayerFromTeam
);

router.get("/player/:playerId", verifyToken, isAdmin, getTeamByPlayer);

export default router;
