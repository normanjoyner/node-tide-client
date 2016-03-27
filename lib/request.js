var request = require("request");
var _ = require("lodash");

function Request(options, fn){
    options = _.defaults(options, {
        method: "GET",
        json: true
    });

    request(options, fn);
}

module.exports = Request;
