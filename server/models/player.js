import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {type: 'String', required: true},
  surname: {type: 'String', required: true},
  sport: {type: 'String', required: true},
  team: {type: 'String'},
  joinDate: {type: 'Date'},
  leaveDate: {type: 'Date'},
  dateAdded: {type: 'Date', default: Date.now, required: true},
});

export default mongoose.model('Player', playerSchema);
