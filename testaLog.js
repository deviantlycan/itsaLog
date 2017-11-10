const logger = require('./itsaLog.js');

// Settings to be used to create logger
var modSettings = { 
		debugModeOn: true,
		infoModeOn: true,
		warningModeOn: true,
		debugStr: "==-- Debug: ",
		errorStr: "==-- ERROR: ",
		infoStr: "==-- INFO: ",
		warningStr: "==-- WARNING: "
}

main();

function main(){
	logger.createLog("ModuleName", modSettings);
	logger.info("Thanks for choosing itsaLog! \nThe following is a brief tutorial on how to use it!");
	logger.info("At any point, you can change your settings by either calling \"createLog\" again, or calling individual setters");
	logger.setInfo(false);
	logger.info("This line will only appear if the setter was passed true, or the program is broken.");
	runDebug();
	logger.setInfo(true);
	logger.info("Good luck in your coding adventures!");
}

function runDebug(){
	var callback = (typeof callback === 'function') ? callback : function() {};
	logger.debug("Just like info, you can log debug information");
	logger.debug("If you don't like the prefix, that can be changed in the source code of itsLog.js");
	logger.warning("If using strict, the caller function will NOT be displayed. Sorry.");
	logger.warning("You can also log error messages pretty easily, like so:");
	
	callbackTest(function(err, data){
	    if (logger.error(err)){return;}
	    logger.error("runDebug - FAILED Callback Error Test");
	});
}

function callbackTest(callback){
	callbackErrorTest(function(err, data){
	    if (logger.error(err, callback)){return;}
	    logger.error("callbackTest - FAILED Callback Error Test");
	});
}

function callbackErrorTest(callback){
	callback("Successful Callback Error Test");
}
