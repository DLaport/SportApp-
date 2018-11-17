import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Import Style
import styles from './TeamCreateWidget.css';

export class TeamCreateWidget extends Component {
  addTeam = () => {
    const nameRef = this.refs.name;
    const sportRef = this.refs.sport;
    if (nameRef.value && sportRef.value) {
      this.props.addTeam(nameRef.value, sportRef.value);
      nameRef.value = '';
      sportRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddTeam ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Cree nouveau equipe</h2>
          <input placeholder="Nom" className={styles['form-field']} ref="name" />
          <input placeholder="Sport" className={styles['form-field']} ref="sport" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addTeam}>Enregistrer</a>
        </div>
      </div>
    );
  }
}

TeamCreateWidget.propTypes = {
  addTeam: PropTypes.func.isRequired,
  showAddTeam: PropTypes.bool.isRequired,
};

export default TeamCreateWidget;
