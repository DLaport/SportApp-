import { Router } from 'express';
import * as PlayerController from '../controllers/player.controller';
import * as TeamController from '../controllers/team.controller';
const router = new Router();

// Get all Players
router.route('/players').get(PlayerController.getPlayers);

// Add a new Player
router.route('/players').post(PlayerController.addPlayer);

// Associate a Player to a team
router.route('/players').put(PlayerController.associatePlayer);

// Get all teams
router.route('/teams').get(TeamController.getTeams);

// Add a new teams
router.route('/teams').post(TeamController.addTeam);
export default router;
