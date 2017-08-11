/**
 * Created by sazack on 8/11/17.
 */

//*******************************************************************
//MAILING ENGINE TO SEND YOUR TEMPLATES AS AN EMAIL
//*******************************************************************
const econfig = require('../config/config').email;
const util = require('util');

const NiceMail = require('nicemail');

const nicemailer = new NiceMail(econfig, econfig.template);

module.exports = {
    sendMail:(options,cb)=>{
        if(options){
            let emailOptions = {
                template: options.template,
                subject: options.subject,

            }

            if(options.receiver) {
                emailOptions.to = options.receiver  ;
            }

            if(options.content) {
                emailOptions.content = options.content;
            }
            //Find Templates at the designated email templates folder in your config.js file

            switch(emailOptions.template){
                case 'sample':
                    emailOptions.subject = 'Sample Email';
                    break;
                case 'Another Sample':
                    emailOptions.subject = 'Next Sample ';
                    break;

                default:
            }

            nm.send(emailOptions)
                .then( res => cb(null, res))
                .catch( err => cb(err));
        }

        else{
            cb("No emailing details provided");
        }
    }
}
