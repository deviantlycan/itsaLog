"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logSettings = /** @class */ (function () {
    function logSettings(debugModeOn, infoModeOn, warningModeOn) {
        this._debugModeOn = false;
        this._infoModeOn = false;
        this._warningModeOn = false;
        this._debugStr = "==-- Debug: ";
        this._errorStr = "==-- ERROR: ";
        this._infoStr = "==-- INFO: ";
        this._warningStr = "==-- WARNING: ";
        this._debugModeOn = debugModeOn;
        this._infoModeOn = infoModeOn;
        this._warningModeOn = warningModeOn;
    }
    Object.defineProperty(logSettings.prototype, "debugModeOn", {
        get: function () {
            return this._debugModeOn;
        },
        set: function (value) {
            this._debugModeOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(logSettings.prototype, "infoModeOn", {
        get: function () {
            return this._infoModeOn;
        },
        set: function (value) {
            this._infoModeOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(logSettings.prototype, "warningModeOn", {
        get: function () {
            return this._warningModeOn;
        },
        set: function (value) {
            this._warningModeOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(logSettings.prototype, "debugStr", {
        get: function () {
            return this._debugStr;
        },
        set: function (value) {
            this._debugStr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(logSettings.prototype, "errorStr", {
        get: function () {
            return this._errorStr;
        },
        set: function (value) {
            this._errorStr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(logSettings.prototype, "infoStr", {
        get: function () {
            return this._infoStr;
        },
        set: function (value) {
            this._infoStr = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(logSettings.prototype, "warningStr", {
        get: function () {
            return this._warningStr;
        },
        set: function (value) {
            this._warningStr = value;
        },
        enumerable: true,
        configurable: true
    });
    return logSettings;
}());
exports.logSettings = logSettings;
// Set in constructor
/**
 * Logger constructor
 * @params moduleInput Name of the caller module
 * @params settingsObject object containing modes to turn on. Modes are:
 * "debugModeOn," "infoModeOn," and "warningModeOn." Note that you can also
 * set their string settings as well
 */
var Logs = /** @class */ (function () {
    function Logs(modulePrint, settingsObject) {
        this.modulePrint = modulePrint;
        this.settingsObject = settingsObject;
    }
    Logs.prototype.debug = function (message) {
        if (this.settingsObject.debugModeOn) {
            try {
                console.log(this.settingsObject.debugStr + this.modulePrint + "." + arguments.callee.caller.name.toString() + " - " + message);
            }
            catch (err) {
                console.log(this.settingsObject.debugStr + this.modulePrint + " - " + message);
            }
        }
        return true;
    };
    Logs.prototype.error = function (message, callback) {
        callback = (typeof callback === 'function') ? callback : function () {
        };
        if (!message) {
            return false;
        }
        try {
            console.error(this.settingsObject.errorStr + this.modulePrint + "." + arguments.callee.caller.name.toString() + " - " + message);
            callback(message);
        }
        catch (err) {
            console.error(this.settingsObject.errorStr + this.modulePrint + " - " + message);
            callback(message);
        }
        return true;
    };
    Logs.prototype.info = function (message) {
        if (this.settingsObject.infoModeOn) {
            console.info(this.settingsObject.infoStr + message);
        }
        return true;
    };
    Logs.prototype.warning = function (message) {
        if (this.settingsObject.warningModeOn) {
            try {
                console.warn(this.settingsObject.warningStr + this.modulePrint + "." + arguments.callee.caller.name.toString() + " - " + message);
            }
            catch (err) {
                console.warn(this.settingsObject.warningStr + this.modulePrint + " - " + message);
            }
        }
        return true;
    };
    Logs.prototype.setDebug = function (activationFlag) {
        this.settingsObject.debugModeOn = (activationFlag == true ? true : false);
    };
    Logs.prototype.setInfo = function (activationFlag) {
        this.settingsObject.infoModeOn = (activationFlag == true ? true : false);
    };
    Logs.prototype.setWarning = function (activationFlag) {
        this.settingsObject.warningModeOn = (activationFlag == true ? true : false);
    };
    return Logs;
}());
exports.Logs = Logs;
