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
  updateManager,
  getManager,
  getLeagueByManager,
  getLeagueRules,
  updateLeagueRules,
} from "../controllers/leagues.js";
import { verifyToken, isAdmin } from "../middleware/auth.js";
import { isManager, isInLeague } from "../middleware/league.js";

const router = express.Router();

router.get("/", verifyToken, isAdmin, getAllLeagues);
router.post("/", verifyToken, createLeague);

router.get("/:id", verifyToken, isInLeague, getLeagueById);
router.delete("/:id", verifyToken, isManager, deleteLeague);

router.get("/:id/name", getLeagueName);
router.put("/:id/name", verifyToken, isAdmin, updateLeagueName);

router.post("/:leagueId/team/:teamId", verifyToken, isManager, addTeamToLeague);
router.delete(
  "/:leagueId/team/:teamId",
  verifyToken,
  isManager,
  removeTeamFromLeague
);

router.get("/:id/teams", getTeamsInLeague);

router.get("/team/:teadId", getLeagueByTeam);

router.get("/:leagueId/manager", verifyToken, isAdmin, getManager);
router.put("/:leagueId/manager", verifyToken, isManager, updateManager);

router.get("/manager/:managerId", getLeagueByManager);

router.get("/:id/rules", getLeagueRules);
router.put("/:id/rules", verifyToken, isManager, updateLeagueRules);

export default router;
