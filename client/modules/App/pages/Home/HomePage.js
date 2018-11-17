import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PlayerCreateWidget } from '../../components/PlayerCreateWidget/PlayerCreateWidget';
import { TeamCreateWidget } from '../../components/TeamCreateWidget/TeamCreateWidget';
import { AssociatePlayerToTeamWidget } from '../../components/AssociatePlayerToTeamWidget/AssociatePlayerToTeamWidget';
import { getPlayers, getShowAddPlayer, getShowAddTeam, getShowAssociatePlayer, getTeams } from '../../AppReducer';
import {
  addPlayerRequest, addTeamRequest, associatePlayerRequest, fetchPlayers, fetchTeams, hideAddPlayer, hideAddTeam,
  hideAssociatePlayer,
  toggleAddPlayer,
  toggleAddTeam, toggleAssociatePlayer
} from '../../AppActions';
import styles from './HomePage.css';
// Import Actions

// Import Selectors

class HomePage extends Component {
  componentDidMount() {
   this.props.dispatch(fetchPlayers());
   this.props.dispatch(fetchTeams());
  }

  handleAddPlayer = (name, surname, sport) => {
    this.props.dispatch(toggleAddPlayer());
    this.props.dispatch(addPlayerRequest({name, surname, sport}));
  };

  handleAddTeam = (name, sport) => {
    this.props.dispatch(toggleAddTeam());
    this.props.dispatch(addTeamRequest({name, sport}));
  };

  handleAssociatePlayer = (player, team, joinDate, leaveDate) => {
    this.props.dispatch(toggleAssociatePlayer());
    this.props.dispatch(associatePlayerRequest({player, team, joinDate, leaveDate}));
  };

  toggleShowAddPlayer() {
    this.props.dispatch(toggleAddPlayer());
    this.props.dispatch(hideAddTeam());
    this.props.dispatch(hideAssociatePlayer());
  }

  toggleShowAddTeam() {
    this.props.dispatch(toggleAddTeam());
    this.props.dispatch(hideAddPlayer());
    this.props.dispatch(hideAssociatePlayer());
  }

  toggleAssociatePlayer() {
    this.props.dispatch(toggleAssociatePlayer());
    this.props.dispatch(hideAddPlayer());
    this.props.dispatch(hideAddTeam());
  }

  render() {
    const addPlayerActiveClass = (this.props.showAddPlayer) ? styles.active : '';
    const addTeamActiveClass = (this.props.showAddTeam) ? styles.active : '';
    const associatePlayerActiveClass = (this.props.showAssociatePlayer) ? styles.active : '';

    return (
      <div className={styles.container}>
        <div className={styles['button-container']}>
          <a className={addPlayerActiveClass} href="#" onClick={() => this.toggleShowAddPlayer()}>Ajouter un Joueur</a>
          <a className={addTeamActiveClass} href="#" onClick={() => this.toggleShowAddTeam()}>Ajouter une Equipe</a>
          <a className={associatePlayerActiveClass} href="#" onClick={() => this.toggleAssociatePlayer()}>Associer un Joueur</a>
        </div>
        <PlayerCreateWidget addPlayer={this.handleAddPlayer} showAddPlayer={this.props.showAddPlayer}/>
        <TeamCreateWidget addTeam={this.handleAddTeam} showAddTeam={this.props.showAddTeam}/>
        <AssociatePlayerToTeamWidget associatePlayer={this.handleAssociatePlayer} players={this.props.players}
                                     teams={this.props.teams} showAssociatePlayer={this.props.showAssociatePlayer}/>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPlayer: getShowAddPlayer(state),
    showAddTeam: getShowAddTeam(state),
    showAssociatePlayer: getShowAssociatePlayer(state),
    players: getPlayers(state),
    teams: getTeams(state),
  };
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  showAddPlayer: PropTypes.bool.isRequired,
  showAddTeam: PropTypes.bool.isRequired,
  showAssociatePlayer: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
  teams: PropTypes.array.isRequired,
};

HomePage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(HomePage);
