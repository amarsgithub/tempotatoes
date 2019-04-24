const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    action: {
        firstName: String,
        lastName: String,
        fullName: String,
        active: String,
        email: {type: String, required: false, unique: true},
        major1: String,
        major2: String,
        minor1: String,
        minor2: String,
        studyAbroadProgram: [String],
        country: [String],
        graduationSemester: String,
        yearsLeft: Number,
        inducted: String,
        birthday: String,
        image: String,
        officeHours: String,
        question1: String,
        question2: String,
        question3: String,
        question4: String,
        question5: String,
        username: String,
        password: String,
        points: Number
    }
});

/* Use your schema to instantiate a Mongoose model */
const User = mongoose.model('user', UserSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = User;