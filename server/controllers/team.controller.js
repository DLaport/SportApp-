import sanitizeHtml from 'sanitize-html';
import Team from '../models/team';

export function getTeams(req, res) {
  Team.find().sort('-dateAdded').exec((err, teams) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ teams });
  });
}

export function addTeam(req, res) {
  if (!req.body.team.name || !req.body.team.sport) {
    res.status(403).end();
  }

  const newTeam = new Team(req.body.team);

  newTeam.name = sanitizeHtml(newTeam.name);
  newTeam.sport = sanitizeHtml(newTeam.sport);

  newTeam.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ team: saved });
  });
}
