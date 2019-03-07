//This file holds any configuration variables we may need 
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: 'mongodb://tempotato:t3mpotato3s!@ds249035.mlab.com:49035/tempotato', //place the URI of your mongo database here.
  }
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */