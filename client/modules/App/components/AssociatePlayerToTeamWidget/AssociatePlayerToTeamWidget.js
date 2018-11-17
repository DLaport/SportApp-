import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Import Style
import styles from './AssociatePlayerToTeamWidget.css';

export class AssociatePlayerToTeamWidget extends Component {
  associate = () => {
    const playerRef = this.refs.player;
    const teamRef = this.refs.team;
    const joinDateRef = this.refs.joinDate;
    const leaveDateRef = this.refs.leaveDate;
    if (playerRef.value && teamRef.value && joinDateRef.value && leaveDateRef.value) {
      this.props.associatePlayer(playerRef.value, teamRef.value, joinDateRef.value, leaveDateRef.value);
      playerRef.value = teamRef.value = joinDateRef.value = leaveDateRef.value = '';
    }
  };

  selectPlayer() {
    this.setState({
      player: this.refs.player.value
    });
  }

  render() {
    const cls = `${styles.form} ${(this.props.showAssociatePlayer ? styles.appear : '')}`;
    let teams;
    if (this.refs.player && this.refs.player.value) {
      const player = this.props.players.find((o) => o._id === this.refs.player.value);
      teams = (
        <div>
          <div className={styles.label}>Equipe</div>
          <select className={styles['form-field']} ref="team">
            {
              this.props.teams.filter((o) => o.sport === player.sport).map(el => <option value={el._id} key={el._id}> {el.name} </option>)
            }
          </select>
        </div>
      );
    } else {
      teams = null;
    }
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Associer un joueur a un equipe</h2>
          <div>
            <div className={styles.label}>Joueur</div>
            <select onChange={(e) => this.selectPlayer(e)} className={styles['form-field']} ref="player">
              {
                this.props.players.map(el => <option value={el._id} key={el._id}> {el.name + ' ' + el.surname} </option>)
              }
            </select>
          </div>
          {
            teams
          }
          <input placeholder="Date debut du contract" type={'date'} className={styles['form-field']} ref="joinDate"/>
          <input placeholder="Date fin du contract" type={'date'} className={styles['form-field']} ref="leaveDate"/>
          <a className={styles['post-submit-button']} href="#" onClick={this.associate}>Enregistrer</a>
        </div>
      </div>
    );
  }
}

AssociatePlayerToTeamWidget
  .propTypes = {
  associatePlayer: PropTypes.func.isRequired,
  showAssociatePlayer: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
  teams: PropTypes.array.isRequired
};

export default AssociatePlayerToTeamWidget;
