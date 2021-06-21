const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lehuyhiep449:Dothithuhang1010@cluster0.h6ust.mongodb.net/ontap-express?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
module.exports = mongoose;