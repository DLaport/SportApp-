// Import Actions
import {
  ADD_PLAYER,
  ADD_PLAYERS,
  ADD_TEAM,
  ADD_TEAMS,
  TOGGLE_ADD_PLAYER,
  TOGGLE_ADD_TEAM,
  TOGGLE_ASSOCIATE_PLAYER,
  HIDE_ADD_PLAYER,
  HIDE_ADD_TEAM,
  HIDE_ASSOCIATE_PLAYER,
} from './AppActions';

// Initial State
const initialState = {
  showAddPlayer: false,
  showAddTeam: false,
  showAssociatePlayer: false,
  teams: [],
  players: [],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_ADD_PLAYER:
      return {
        ...state,
        showAddPlayer: false,
      };

    case HIDE_ADD_TEAM:
      return {
        ...state,
        showAddTeam: false,
      };

    case HIDE_ASSOCIATE_PLAYER:
      return {
        ...state,
        showAssociatePlayer: false,
      };

    case TOGGLE_ADD_PLAYER:
      return {
        ...state,
        showAddPlayer: !state.showAddPlayer,
      };

    case TOGGLE_ADD_TEAM:
      return {
        ...state,
        showAddTeam: !state.showAddTeam,
      };

    case TOGGLE_ASSOCIATE_PLAYER:
      return {
        ...state,
        showAssociatePlayer: !state.showAssociatePlayer,
      };

    case ADD_TEAMS:
      return {
        ...state,
        teams: action.teams,
      };

    case ADD_TEAM:
      return {
        ...state,
        teams: [action.team, ...state.teams],
      };

    case ADD_PLAYER:
      return {
        ...state,
        players: [action.player, ...state.players],
      };

    case ADD_PLAYERS:
      return {
        ...state,
        players: action.players,
      };

    default:
      return state;
  }
};

/* Selectors */

export const getShowAddPlayer = state => state.app.showAddPlayer;

export const getShowAddTeam = state => state.app.showAddTeam;

export const getShowAssociatePlayer = state => state.app.showAssociatePlayer;

export const getTeams = state => state.app.teams;

export const getPlayers = state => state.app.players;
// Export Reducer
export default AppReducer;
