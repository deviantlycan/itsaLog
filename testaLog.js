const ItsaLog = require('./itsaLog.js').Logs;
const modSettings2 = require('./itsaLog.js').logSettings;


// Settings to be used to create logger from external object there is now an object on itsaLog :)
var modSettings = {
		debugModeOn: true,
		infoModeOn: true,
		warningModeOn: true,
		debugStr: "==-- Debug: ",
		errorStr: "==-- ERROR: ",
		infoStr: "==-- INFO: ",
		warningStr: "==-- WARNING: "
};

const logger = new ItsaLog("ModuleName", modSettings);
//create a new itsaLog modSettings

main();
secondLogInstance();
function main(){

	// logger.createLog("ModuleName", modSettings);
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

function secondLogInstance() {
    const logger2 = new ItsaLog("ModuleName2", modSettings2);
    // logger.createLog("ModuleName", modSettings);
    logger2.info("Thanks for choosing itsaLog! \nThe following is a brief tutorial on how to use it!");
    logger2.info("At any point, you can change your settings by either calling \"createLog\" again, or calling individual setters");
    logger2.setInfo(false);
    logger2.info("This line will only appear if the setter was passed true, or the program is broken.");
    logger2.setInfo(true);
    logger2.info("Good luck in your coding adventures!");

    logger2.debug("Just like info, you can log debug information");
    logger2.debug("If you don't like the prefix, that can be changed in the source code of itsLog.js");
    logger2.warning("If using strict, the caller function will NOT be displayed. Sorry.");
    logger2.warning("You can also log error messages pretty easily, like so:");
    logger2.error(" You can log errors");


}
