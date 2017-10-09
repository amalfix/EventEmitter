var date = new Date;

var events = require("events");
var logger = new events.EventEmitter();

logger.on("login", function(userName,timeIn){
	timeIn = date.toTimeString();
console.log('User '+userName+' login  '+timeIn);
});

logger.on("logout", function(userName,timeOut){
	timeOut = date.toTimeString();
console.log('User '+userName+' logout '+timeOut);
});

logger.emit("login", "John");
logger.emit("logout", "John");
