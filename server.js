// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

var express = require('express');
var os = require('os');
var app = express();

const used = process.memoryUsage().heapUsed / 1024 / 1024;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

//console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);


app.get('/api', function (req, res) {
    //res.send('Hello Xendit from Martin, '+'This host OS:'+os.platform()+' '+'Architecture:'+os.arch()+' Version:'+os.release()+' Memory:'+os.totalmem()+'CPU:'+os.hostname());
	res.send(`The script uses approximately ${Math.round(used * 100) / 100} MB`)
});

//app.get('/api', function (req, res) {
//    res.send('Memory:'+os.totalmem()+' '+'CPU:'+os.cpus());
//});

var port = process.env.PORT || 80;
var server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});

process.on("SIGINT", () => {
    process.exit(130 /* 128 + SIGINT */);
});

process.on("SIGTERM", () => {
    console.log("Terminating...");
    server.close();
});

/*const used = process.memoryUsage().heapUsed / 1024 / 1024;
app.get('/api', function (req, res) {
    //res.send('Hello Xendit from Martin, '+'This host OS:'+os.platform()+' '+'Architecture:'+os.arch()+' Version:'+os.release()+' Memory:'+os.totalmem()+'CPU:'+os.hostname());
	res.send(`The script uses approximately ${Math.round(used * 100) / 100} MB`)
});
*/