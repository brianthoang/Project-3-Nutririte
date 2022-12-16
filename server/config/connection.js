const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Nutririte', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('MongoDB connected');
}).catch((e)=> {
    console.log('MongoDB connection unseccessful: ' + e);
});

module.exports = mongoose.connections;