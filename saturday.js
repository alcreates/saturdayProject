var prompt = require('prompt');
var request = require('request');
var fs = require('fs');
var open = require('open');
var dateFormat = require('dateformat');
    var now = new Date();
var arg = process.argv[2];

var createFile = require('create-file');
  var date = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");




request( arg , function(error, response, body) {
    
	

	if (!error && response.statusCode == 200) {
      

        createFile('test2.html',"" ,function (err) {
  // file either already exists or is now created (including non existing directories) 
});


         fs.writeFile('test2.html','<!DOCTYPE html><html><head><title></title></head><body>' + body + '</body></html>', 'utf8', function(err, data){
        	if(err) return console.log(err);
         }); // Show the HTML for the Google homepage. 

         open('file:///Users/Al/Desktop/saturday/test2.html','firefox');
   

         fs.appendFile('log.txt', date + " | " + arg + "\n", function(err,data){
         	if(err) return console.log(err);
         } )

    }
});
