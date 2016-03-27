# node-tide-client

## About

### Build Status
[![Build Status](https://drone.containership.io/api/badges/containership/node-tide-client/status.svg)](https://drone.containership.io/containership/node-tide-client)

### Description
A nodejs [tide](https://github.com/containership/containership.plugin.tide) client

### Author
ContainerShip Developers - developers@containership.io

## Installation
`npm install tide-client`

## Usage

### Instantiation
Create a new TideClient
```javascript
var TideClient = require("tide-client");
var tide_client = new TideClient({
    base_url: "127.0.0.1",  // base url of tide server
    port: 80,               // port tide server is listening on
    api_version: "v1",      // api version of tide server
    timeout: 5000           // request timeout
});
```

### Get Jobs
Get all jobs
```javascript
tide_client.get_jobs(function(err, jobs){
    if(err)
        throw err;

    console.log(jobs);
});
```

### Get Job
Get a specific job
```javascript
tide_client.get("jobname", function(err, job){
    if(err)
        throw err;

    console.log(job);
});
```

### Add Job
Add a new job
```javascript
tide_client.add_job({
    id: "jobname",
    application: {
        image: "owner/image:latest",
        cpus: 0.1,
        memory: 64
    },
    instances: 1,
    schedule: "0 0 0 * * *"
}, function(err){
    if(err)
        throw err;
});
```

### Edit Job
Edit an existing job
```javascript
tide_client.edit_job("jobname", {
    schedule: "0 0 4 * * *"
}, function(err){
    if(err)
        throw err;
});
```

### Remove Job
Remove a job
```javascript
tide_client.remove_job("jobname", function(err){
    if(err)
        throw err;
});
```

## Contributing
Pull requests and issues are encouraged!
