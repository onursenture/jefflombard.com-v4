const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  gitUrl: String,
  url: String,
  tags: [String],
});

// Add Static Methods Here

mongoose.model('project', ProjectSchema);
