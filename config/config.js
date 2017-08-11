/**
 * Created by sazack on 8/10/17.
 */
'use strict';

const dotenv = require('dotenv');
//***********************************************************
//Change PORT NUMBER IN THE .ENV FILE to set your custom port
//***********************************************************
dotenv.config();

module.exports = {
    port: process.env.PORT || 3000,
    //*******************************************************
    //Change the credentials according to your database
    //*******************************************************
    database:{
        development: {
            username: 'johndoe',
            password: 'johndoe',
            host: 'localhost',
            port: '27017',
            dbName: 'express-mvc-skeleton-development'
        },
        production: {
            username: 'johndoe',
            password: 'johndoe',
            host: 'localhost',
            port: '27017',
            dbName: 'express-mvc-skeleton-production'
        },
        test: {
            username: 'johndoe',
            password: 'johndoe',
            host: 'localhost',
            port: '27017',
            dbName: 'express-mvc-skeleton-test'

        }
    },
    //*********************************************************
    //Configure your email credentials and SMTP server
    //*********************************************************
    email:{
        sender:'Express-MVC Support<support@expressmvc.io>',
        host:'smtp.google.com',
        ssl:true,
        port: 465,
        secure:true,
        auth:{
            user:'express@express-mvc-skeleton.io',
            pass:'password'
        },
        template:{
            dir: root+'/resources/email-templates',
            type:'jade'

        }
    }
}