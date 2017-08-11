/**
 * Created by sazack on 8/11/17.
 */

//*****************************************************************************
//CREATING A CONNECTION POOL FOR MONGOOSE
//*****************************************************************************

'use strict';

const dbConfig = require('../config/config').database;
const mongoose = require('mongoose');

var database = {

init : (app)=> {
    let dbUrl = '';

    if (app.get('env') === 'development') {
        dbUrl = "mongodb://" + dbConfig.development.username + ":" + dbConfig.development.password + "@" + dbConfig.development.host + ":" + dbConfig.development.port + "/" + dbConfig.development.dbName;
    }
    else if (app.get('env') === 'production') {
        dbUrl = "mongodb://" + dbConfig.production.username + ":" + dbConfig.production.password + "@" + dbConfig.production.host + ":" + dbConfig.production.port + "/" + dbConfig.production.dbName;
    }
    else if (app.get('env') === 'test') {
        dbUrl = "mongodb://" + dbConfig.test.username + ":" + dbConfig.test.password + "@" + dbConfig.test.host + ":" + dbConfig.test.port + "/" + dbConfig.test.dbName;
    }

    mongoose.connect(dbUrl)

    mongoose.connection.on('connected', () => {
        console.log('Mongoose default connection to' + dbUrl);
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose default connection disconnected');
    })

    mongoose.connection.on('error', (err) => {
        console.log('Mongoose default connection error', + err);
    })

    process.on('SIGINT', function () {
        mongoose.connection.close();
        })
    }
}

module.exports = database;