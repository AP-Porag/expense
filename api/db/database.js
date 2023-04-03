const mongoose = require('mongoose');

const db = async () => {

    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected successfully');
    }catch (e) {
        console.log('DB connection error: '+e)
    }
}

module.exports = {db}