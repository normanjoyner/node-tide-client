var _ = require("lodash");
var Request = require([__dirname, "lib", "request"].join("/"));

function TideClient(options){
    var self = this;

    this.options = _.defaults(options, {
        base_url: "127.0.0.1",
        port: 80,
        api_version: "v1",
        timeout: 5000
    });
}

TideClient.prototype.get_jobs = function(fn){
    var options = {
        baseUrl: [this.options.base_url, this.options.port].join(":"),
        url: ["", this.options.api_version, "tide", "jobs"].join("/"),
        timeout: this.options.timeout
    }

    new Request(options, function(err, response){
        if(err)
            return fn(err);
        else if(response.statusCode != 200)
            return fn(new Error(response.body));
        else
            return fn(undefined, response.body);
    });
}

TideClient.prototype.add_job = function(configuration, fn){
    var options = {
        baseUrl: [this.options.base_url, this.options.port].join(":"),
        url: ["", this.options.api_version, "tide", "jobs", configuration.id].join("/"),
        method: "POST",
        json: configuration,
        timeout: this.options.timeout
    }

    new Request(options, function(err, response){
        if(err)
            return fn(err);
        else if(response.statusCode != 201)
            return fn(new Error(response.body));
        else
            return fn();
    });
}

TideClient.prototype.get_job = function(job, fn){
    var options = {
        baseUrl: [this.options.base_url, this.options.port].join(":"),
        url: ["", this.options.api_version, "tide", "jobs", job].join("/"),
        timeout: this.options.timeout
    }

    new Request(options, function(err, response){
        if(err)
            return fn(err);
        else if(response.statusCode != 200)
            return fn(new Error(response.body));
        else
            return fn(undefined, response.body);
    });
}

TideClient.prototype.edit_job = function(job, configuration, fn){
    var options = {
        baseUrl: [this.options.base_url, this.options.port].join(":"),
        url: ["", this.options.api_version, "tide", "jobs", job].join("/"),
        method: "PUT",
        json: configuration,
        timeout: this.options.timeout
    }

    new Request(options, function(err, response){
        if(err)
            return fn(err);
        else if(response.statusCode != 200)
            return fn(new Error(response.body));
        else
            return fn();
    });
}

TideClient.prototype.remove_job = function(job, fn){
    var options = {
        baseUrl: [this.options.base_url, this.options.port].join(":"),
        url: ["", this.options.api_version, "tide", "jobs", job].join("/"),
        timeout: this.options.timeout,
        method: "DELETE"
    }

    new Request(options, function(err, response){
        if(err)
            return fn(err);
        else if(response.statusCode != 204)
            return fn(new Error(response.body));
        else
            return fn();
    });
}

module.exports = TideClient;
