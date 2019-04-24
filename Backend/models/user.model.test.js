var should = require('should'), 
    mongoose = require('mongoose'), 
    User = require('./user'), 
    config = require('../config/config');

var user, id;

user =  {
        firstName: "mocha",
        lastName: "test",
        fullName: "mocha test",
        active: "Y",
        email: "email@mocha.test",
        major1: "testing",
        major2: "asdad",
        minor1: "asdad",
        minor2: "asda",
        studyAbroadProgram: ["asdad"],
        country: ["asdasd"],
        graduationSemester: "asdasd",
        yearsLeft: 1,
        inducted: "Y",
        birthday: "asda",
        image: "asdasd",
        officeHours: "asdasd",
        question1: "these",
        question2: "are",
        question3: "for",
        question4: "testing",
        question5: "api",
        username: "mocha",
        password: "test",
        points: 1
}

describe('User Schema Unit Tests', function() {

  before(function(done) {
    mongoose.connect(config.db.uri, {useNewUrlParser: true});
    done();
  });

  mongoose.set('useCreateIndex', true);

  describe('Saving to database', function() {
    /*
      Mocha's default timeout for tests is 2000ms. To ensure that the tests do not fail 
      prematurely, we can increase the timeout setting with the method this.timeout()
     */
    this.timeout(10000);

    it('saves properly when full name and email provided', function(done){
      new User({
        fullName: user.fullName, 
        email: user.email
      }).save(function(err, user){
        should.not.exist(err);
        id = user._id;
        done();
      });
    });

    it('saves properly when all properties provided', function(done){
      new User(user).save(function(err, user){
        should.not.exist(err);
        id = user._id;
        done();
      });
    });

    it('does not throw an error when email not provided', function(done){
      new User({
        fullName: user.fullName
      }).save(function(err,user){
        should.not.exist(err);
        id = user._id;
        done();
      })
    });

    it('does not throw an error when full name not provided', function(done){
      new User({
        email: user.email
      }).save(function(err,user){
        should.not.exist(err);
        id = user._id;
        done();
      })
    });

  });

  afterEach(function(done) {
    if(id) {
      User.deleteOne({ _id: id }).exec(function() {
        id = null;
        done();
      });
    } else {
      done();
    }
  });
});
