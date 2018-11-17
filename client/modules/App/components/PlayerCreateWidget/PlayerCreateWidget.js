import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Import Style
import styles from './PlayerCreateWidget.css';

export class PlayerCreateWidget extends Component {
  addPlayer = () => {
    const nameRef = this.refs.name;
    const surnameRef = this.refs.surname;
    const sportRef = this.refs.sport;
    if (nameRef.value && sportRef.value && surnameRef.value) {
      this.props.addPlayer(nameRef.value, surnameRef.value, sportRef.value);
      nameRef.value = '';
      surnameRef.value = '';
      sportRef.value = '';
    }
  };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPlayer ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Cree un nouveau joueur</h2>
          <input placeholder="Nom" className={styles['form-field']} ref="name" />
          <input placeholder="Prenom" className={styles['form-field']} ref="surname" />
          <input placeholder="Sport" className={styles['form-field']} ref="sport" />
          <a className={styles['post-submit-button']} href="#" onClick={this.addPlayer}>Enregistrer</a>
        </div>
      </div>
    );
  }
}

PlayerCreateWidget.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  showAddPlayer: PropTypes.bool.isRequired,
};

export default PlayerCreateWidget;
