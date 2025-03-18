const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
  comapany: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    requried: true,
  }, 
  notes: String,
  postingLink: String,
  status: { 
    type: String,
    enum: ['interested', 'applied', 'interviewing', 'rejected', 'accepted'
    ],
    required: true,
  }
})


const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applictaions: [applicationSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
