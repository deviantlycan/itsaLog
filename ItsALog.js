// https://blog.risingstack.com/fundamental-node-js-design-patterns/
const util = require('util');

let modulePrint = null;

class ItsALog {
	constructor(options) {
		this._debugOn = false;
		this._infoOn = false;
		this._warningOn = true;
		this._debugPrefix = "DEBUG";
		this._infoPrefix = "INFO";
		this._warningPrefix = "WARNING";
		this._errorPrefix = "ERROR ";
		this._moduleName = "";
		if (!options) {
			return new ItsALog(options);
		}
	}

	createLog(moduleInput, settingsObject) {
		let options = null;
		options = function(moduleInput, settingsObject) {
			this._debugOn = options.hasOwnProperty("debugOn") ? options.debugOn : this._debugOn;
			this._infoOn = options.hasOwnProperty("infoOn") ? options.infoOn : this._infoOn;
			this._warningOn = options.hasOwnProperty("warningOn") ? options.warningOn : this._warningOn;
			this._debugPrefix = options.hasOwnProperty("debugPrefix") ? options.debugPrefix : this._debugPrefix;
			this._infoPrefix = options.hasOwnProperty("infoPrefix") ? options.infoPrefix : this._infoPrefix;
			this._warningPrefix = options.hasOwnProperty("warningPrefix") ? options.warningPrefix : this._warningPrefix;
			this._errorPrefix = options.hasOwnProperty("errorPrefix") ? options.errorPrefix : this._errorPrefix;
			this._moduleName = options.hasOwnProperty("moduleName") ? options.moduleName : this._moduleName;
		};

		modulePrint = moduleInput;
		for(let element in settingsObject) {
			if(settingsObject.hasOwnProperty(element)) {
				switch(element) {
					case "debugModeOn":
						modSettings.debugModeOn = settingsObject.debugModeOn;
						this._debugOn = modSettings.debugModeOn;
						break;
					case "infoModeOn":
						modSettings.infoModeOn = settingsObject.infoModeOn;
						this._infoOn = modSettings.infoModeOn;
						break;
					case "warningModeOn":
						modSettings.warningModeOn = settingsObject.warningModeOn;
						this._warningOn = modSettings.warningModeOn;
						break;
					case "debugStr":
						modSettings.debugStr = settingsObject.debugStr;
						this._debugPrefix = modSettings.debugStr;
						break;
					case "infoStr":
						modSettings.infoStr = settingsObject.infoStr;
						this._infoPrefix = modSettings.infoStr;
						break;
					case "errorStr":
						modSettings.errorStr = settingsObject.errorStr;
						this._errorPrefix = modSettings.errorStr;
						break;
					case "warningStr":
						modSettings.warningStr = settingsObject.warningStr;
						this._warningPrefix = modSettings.warningStr;
						break;
				}
			}
		}
		return true;
	}

	toString(pretty) {
		return pretty ? JSON.stringify(this.toJSON(), null, 2) : JSON.stringify(this.toJSON());
	}

	toJSON() {
		let retval = null;
		retval = {
			debugOn: this._debugOn,
			debugPrefix: this._debugPrefix,
		};
	}

	debug(message) {
		if (modSettings.debugModeOn) {
			try {
				console.log(modSettings.debugStr + modulePrint + "." + arguments.callee.caller.name.toString() + " - " + message);
			} catch (err) {
				console.log(modSettings.debugStr + modulePrint + " - " + message);
			}
		}
		return true;
	}
	error(message, callback) {
		callback = (typeof callback === 'function') ? callback : function() {};
		if (!message) {return false;}

		try {
			console.error(modSettings.errorStr + modulePrint + "." + arguments.callee.caller.name.toString() + " - " + message);
			callback(message);
		} catch (err) {
			console.error(modSettings.errorStr + modulePrint + " - " + message);
			callback(message);
		}
		return true;
	}

	info(message) {
		if (modSettings.infoModeOn) {
			console.log(modSettings.infoStr + message);
		}
		return true;
	}

	warning(message) {
		if (modSettings.warningModeOn) {
			try {
				console.log(modSettings.warningStr + modulePrint + "." + arguments.callee.caller.name.toString() + " - " + message);
			} catch(err) {
				console.log(modSettings.warningStr + modulePrint + " - " + message);
			}
		}
		return true;
	}

	setDebug(activationFlag) {
		modSettings.debugModeOn = (activationFlag == true ? true : false);
	}

	setInfo(activationFlag) {
		modSettings.infoModeOn = (activationFlag == true ? true : false);
	}

	setWarning(activationFlag) {
		modSettings.warningModeOn = (activationFlag == true ? true : false);
	}

	isDebugOn() {
		return this._debugOn;
	}

	setDebugOn(value) {
		this._debugOn = value;
		return this._debugOn;
	}

	isInfoOn() {
		return this._infoOn;
	}

	setInfoOn(value) {
		this._infoOn = value;
		return this._infoOn;
	}

	isWarningOn() {
		return this._warningOn;
	}

	setWarningOn(value) {
		this._warningOn = value;
		return this._warningOn;
	}

	getDebugPrefix() {
		return this._debugPrefix;
	}

	setDebugPrefix(value) {
		this._debugPrefix = value;
		return this._debugPrefix;
	}

	getInfoPrefix() {
		return this._infoPrefix;
	}

	setInfoPrefix(value) {
		this._infoPrefix = value;
		return this._infoPrefix;
	}

	getWarningPrefix() {
		return this._warningPrefix;
	}

	setWarningPrefix(value) {
		this._warningPrefix = value;
		return this._warningPrefix;
	}

	getErrorPrefix() {
		return this._errorPrefix;
	}

	setErrorPrefix(value) {
		this._errorPrefix = value;
		return this._errorPrefix;
	}

	getModuleName() {
		return this._moduleName;
	}

	setModuleName(value) {
		this._moduleName = value;
		return this._moduleName;
	}
}

//Or this way:
// function ItsALog(options) {
// 	this.options = options;
// }
// function createLogger(options) {
// 	// modify the options here if you want
// 	return new ItsALog(options);
// }
// module.exports.create = create;

//module.exports = {info, debug, error, warning, createLog, setWarning, setInfo, setDebug};

module.exports = {
	ItsALog: ItsALog
};