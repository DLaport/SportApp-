// Export Constants
import callApi from '../../util/apiCaller';

export const TOGGLE_ADD_PLAYER = 'TOGGLE_ADD_PLAYER';
export const HIDE_ADD_PLAYER = 'HIDE_ADD_PLAYER';
export const HIDE_ADD_TEAM = 'HIDE_ADD_TEAM';
export const HIDE_ASSOCIATE_PLAYER = 'HIDE_ASSOCIATE_PLAYER';
export const TOGGLE_ADD_TEAM = 'TOGGLE_ADD_TEAM';
export const TOGGLE_ASSOCIATE_PLAYER = 'TOGGLE_ASSOCIATE_PLAYER';
export const ADD_PLAYER = 'ADD_PLAYER';
export const ADD_TEAM = 'ADD_TEAM';
export const ADD_PLAYERS = 'ADD_PLAYERS';
export const ADD_TEAMS = 'ADD_TEAMS';
export const ASSOCIATE_PLAYER = 'ASSOCIATE_PLAYER';

// Export Actions
export function hideAddPlayer() {
  return {
    type: HIDE_ADD_PLAYER,
  };
}
export function hideAddTeam() {
  return {
    type: HIDE_ADD_TEAM,
  };
}
export function hideAssociatePlayer() {
  return {
    type: HIDE_ASSOCIATE_PLAYER,
  };
}
export function toggleAddPlayer() {
  return {
    type: TOGGLE_ADD_PLAYER,
  };
}

export function toggleAddTeam() {
  return {
    type: TOGGLE_ADD_TEAM,
  };
}

export function toggleAssociatePlayer() {
  return {
    type: TOGGLE_ASSOCIATE_PLAYER,
  };
}

export function addTeam(team) {
  return {
    type: ADD_TEAM,
    team,
  };
}

export function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    player,
  };
}

export function associatePlayer(player, team) {
  return {
    type: ASSOCIATE_PLAYER,
    player,
    team,
  };
}

export function addPlayerRequest(player) {
  return (dispatch) => {
    return callApi('players', 'post', {
      player: {
        name: player.name,
        surname: player.surname,
        sport: player.sport,
      },
    }).then(res => dispatch(addPlayer(res.player)));
  };
}

export function addTeamRequest(team) {
  return (dispatch) => {
    return callApi('teams', 'post', {
      team: {
        name: team.name,
        sport: team.sport,
      },
    }).then(res => dispatch(addTeam(res.team)));
  };
}

export function associatePlayerRequest(data) {
  return (dispatch) => {
    return callApi('players', 'put', {
      player: {
        id: data.player,
        team: data.team,
        joinDate: data.joinDate,
        leaveDate: data.leaveDate,
      },
    }).then();
  };
}

export function addPlayers(players) {
  return {
    type: ADD_PLAYERS,
    players,
  };
}

export function addTeams(teams) {
  return {
    type: ADD_TEAMS,
    teams,
  };
}

export function fetchPlayers() {
  return (dispatch) => {
    return callApi('players').then(res => {
      dispatch(addPlayers(res.players));
    });
  };
}

export function fetchTeams() {
  return (dispatch) => {
    return callApi('teams').then(res => {
      dispatch(addTeams(res.teams));
    });
  };
}
