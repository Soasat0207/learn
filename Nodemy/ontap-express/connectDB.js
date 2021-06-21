const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ontap-express', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
module.exports = mongoose;