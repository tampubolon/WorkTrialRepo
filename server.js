// Build for Xendit Work Trial by Martinus Tampubolon
 

var express = require('express');
var os = require('os');
var app = express();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
var candidate_name = "Martinus Tampubolon";

//This variables used for version:2
let ts = Date.now();
let date_ob = new Date(ts);
// current Date
let date = date_ob.getDate();
// current month
let month = date_ob.getMonth() + 1;
// current year
let year = date_ob.getFullYear();
var current_date = [year + "-" + month + "-" + date];
var candidate_name = "Martinus Tampubolon";



app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


//uncomment this section for apps version 1
/*app.get('/api', function (req, res) {
      res.send(Hello Xendit! From docker:'+'{OS:'+os.platform()+'}{Architecture:'+os.arch()+'}{Version:'+os.release()+'}{ContainerID:'+os.hostname()+'}'); 

});
*/

//uncomment this section for apps version 2
app.get('/api', function (req, res) {
        res.send(`Hello Xendit! From docker: {OS:${os.platform()}}{OSArchitecture:${os.arch()}}{OSVersion:${os.release()}}{ContainerID:${os.hostname()}}.
        This is a simple app by ${candidate_name} for work trial start from 2021-8-12 to ${current_date}`);
});


//uncomment this section for apps version 3
/*
app.get('/api', function (req, res) {
	res.send(`Hello Xendit! From docker: {OS:${os.platform()}}{OSArchitecture:${os.arch()}}{OSVersion:${os.release()}}{ContainerID:${os.hostname()}``}.                                    
	//This is a simple app from ${candidate_name} for work trial start from 2021-8-12 to ${current_date}`);	
});
*/

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



//console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
//app.get('/api', function (req, res) {
//    res.send('Memory:'+os.totalmem()+' '+'CPU:'+os.cpus());
//res.send(`The script uses approximately ${Math.round(used * 100) / 100} MB`)
//});

