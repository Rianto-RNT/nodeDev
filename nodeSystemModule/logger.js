var url = 'http://mylogger.io/log'

function log(message) {
    //sent an HTTP request
    console.log(message);
}

module.exports.log = log;