import express from "express";

import {
  getAllLeagues,
  getLeagueById,
  createLeague,
  deleteLeague,
  getLeagueName,
  updateLeagueName,
  addTeamToLeague,
  removeTeamFromLeague,
  getTeamsInLeague,
  getLeagueByTeam,
  getManager,
  getLeagueByManager,
  getLeagueRules,
  updateLeagueRules,
} from "../controllers/leagues.js";
import { verifyToken, isAdmin } from "../middleware/auth.js";
import { isManager, isInLeague } from "../middleware/leagues.js";

const router = express.Router();

router.get("/", verifyToken, isAdmin, getAllLeagues);
router.post("/", verifyToken, createLeague);

router.get("/:leagueId", verifyToken, isInLeague, getLeagueById);
router.delete("/:leagueId", verifyToken, isManager, deleteLeague);

router.get("/:leagueId/name", verifyToken, getLeagueName);
router.put("/:leagueId/name", verifyToken, isManager, updateLeagueName);

router.post("/:leagueId/team/:teamId", verifyToken, isManager, addTeamToLeague);
router.delete(
  "/:leagueId/team/:teamId",
  verifyToken,
  isManager,
  removeTeamFromLeague
);

router.get("/:leagueId/teams", verifyToken, isInLeague, getTeamsInLeague);

router.get("/team/:teadId", verifyToken, isAdmin, getLeagueByTeam);

router.get("/:leagueId/manager", verifyToken, isInLeague, getManager);

router.get("/manager/:managerId", verifyToken, isAdmin, getLeagueByManager);

router.get("/:leagueId/rules", verifyToken, getLeagueRules);
router.put("/:leagueId/rules", verifyToken, isManager, updateLeagueRules);

export default router;
