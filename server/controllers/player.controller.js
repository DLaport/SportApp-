import sanitizeHtml from 'sanitize-html';
import Player from '../models/player';

export function getPlayers(req, res) {
  Player.find().sort('-dateAdded').exec((err, players) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ players });
  });
}

export function addPlayer(req, res) {
  if (!req.body.player.name || !req.body.player.surname || !req.body.player.sport) {
    res.status(403).end();
  }

  const newPlayer = new Player(req.body.player);

  newPlayer.name = sanitizeHtml(newPlayer.name);
  newPlayer.surname = sanitizeHtml(newPlayer.surname);
  newPlayer.sport = sanitizeHtml(newPlayer.sport);

  newPlayer.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ player: saved });
  });
}

export function associatePlayer(req, res) {
  if (!req.body.player.id || !req.body.player.team || !req.body.player.joinDate || !req.body.player.leaveDate) {
    res.status(403).end();
  }

  Player.find({_id: req.body.player.id}).exec((err, players) => {
    if (err) {
      res.status(500).send(err);
    }
    let player = players[0];
    player.team = req.body.player.team;
    player.joinDate = req.body.player.joinDate;
    player.leaveDate = req.body.player.leaveDate;
    player.save((error, saved) => {
      if (error) {
        res.status(500).send(error);
      }
      res.json({ player: saved });
    });
  });
}
