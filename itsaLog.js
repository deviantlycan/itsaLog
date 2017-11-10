// Default settings to false, changed in constructor
var modSettings = {  
	debugModeOn: false,
	infoModeOn: false,
	warningModeOn: false,
	debugStr: "==-- Debug: ",
	errorStr: "==-- ERROR: ",
	infoStr: "==-- INFO: ",
	warningStr: "==-- WARNING: "
}

var modulePrint; // Set in constructor

/**
 * Logger constructor
 * @params moduleInput Name of the caller module
 * @params settingsObject object containing modes to turn on. Modes are:
 * "debugModeOn," "infoModeOn," and "warningModeOn." Note that you can also
 * set their string settings as well
 */
function createLog(moduleInput, settingsObject){
	modulePrint = moduleInput;
	for(var element in settingsObject){ 
		if(settingsObject.hasOwnProperty(element)){
			switch(element){
				case "debugModeOn":
					modSettings.debugModeOn = settingsObject.debugModeOn;
					break;
				case "infoModeOn":
					modSettings.infoModeOn = settingsObject.infoModeOn;
					break;
				case "warningModeOn":
					modSettings.warningModeOn = settingsObject.warningModeOn;
					break;
				case "debugStr":
					modSettings.debugStr = settingsObject.debugStr;
					break;
				case "infoStr":
					modSettings.infoStr = settingsObject.infoStr;
					break;
				case "errorStr":
					modSettings.errorStr = settingsObject.errorStr;
					break;
				case "warningStr":
					modSettings.warningStr = settingsObject.warningStr;
					break;
			}
		}
	} 
};

/*
 * Logging functions
 */
function debug(message){
	if (modSettings.debugModeOn){
		try{
			console.log(modSettings.debugStr + modulePrint + "." + arguments.callee.caller.name.toString() + " - " + message);
		} catch (err){
			console.log(modSettings.debugStr + modulePrint + " - " + message);
		}
	}
	return true;
}
function error(message, callback){
	callback = (typeof callback === 'function') ? callback : function() {};
	if (message){
		try{
			console.error(modSettings.errorStr + modulePrint + "." + arguments.callee.caller.name.toString() + " - " + message);
			callback(message);
		} catch (err) { 
			console.error(modSettings.errorStr + modulePrint + " - " + message);
			callback(message);
		}
		return true;
	}
	return false;
}
function info(message){
	if (modSettings.infoModeOn){
		console.error(modSettings.infoStr + message);		
	}
	return true;
}

function warning(message){
	if (modSettings.warningModeOn){
		try{
			console.error(modSettings.warningStr + modulePrint + "." + arguments.callee.caller.name.toString() + " - " + message);		
		} catch(err){
			console.error(modSettings.warningStr + modulePrint + " - " + message);					
		}
	}
	return true;
} 

function setDebug(activationFlag){
	modSettings.debugModeOn = (activationFlag == true ? true : false);
}

function setInfo(activationFlag){
	modSettings.infoModeOn = (activationFlag == true ? true : false);
}

function setWarning(activationFlag){
	modSettings.warningModeOn = (activationFlag == true ? true : false);
}
 
module.exports = {info, debug, error, warning, createLog, setWarning, setInfo, setDebug}; 