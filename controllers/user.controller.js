/**
 * Created by sazack on 8/11/17.
 */
'use strict';
//************************************************************************
// USE COLLECT LIBRARY in lib folder to collect DATA from the request body
//************************************************************************
let collect = require('../lib/collect');

module.exports = {

    //*********************************************************************
    //SAMPLE FUNCTION TO COLLECT DATA AND STORE IN VARIABLE
    //*********************************************************************
    collectForUsers: (req, res, next) => {
        let collectInstance = new collect();
        collectInstance.setBody([
            'firstName',
            'middleName',
            'lastName',
            'city',
            'state',
            'country',
            'email',
            'username',
            'password',
            'passwordSalt',
            'phone',
            'deleted',
            'userRole'

        ])
        collectInstance.setFiles(['image'])

        collectInstance.setMandatoryFields({
            firstName: 'First Name not provided',
            // lastName: 'Last Name not provided',
            // email: 'Email not provided',
            // username: 'Username not provided',
            // password: 'Password not provided',
            // city: 'City not provided',
            // country: 'Country not provided',
            // phone: 'Phone not provided'

        })
        collectInstance.collect(req).then((data) => {
            req.userData = data
            next();
        }).catch((err) => {
            err.status = 400
            next(err)
        })
    },
}