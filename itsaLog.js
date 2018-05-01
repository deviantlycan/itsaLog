"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

/**
 * The log settings object is used by the logs to configure the
 * the logging levels and configs sent to user
 * @type {logSettings}
 */
var logSettings = /** @class */ (function () {
    function logSettings(debugModeOn, infoModeOn, warningModeOn, fineModeOn, finerModeOn, finestModeOn) {
        this._debugModeOn = debugModeOn;
        this._infoModeOn = infoModeOn;
        this._warningModeOn = warningModeOn;
        this._fineModeOn = fineModeOn;
        this._finerModeOn = finerModeOn;
        this._finestModeOn = finestModeOn;
        this._debugStr = "==-- DEBUG: ";
        this._errorStr = "==-- ERROR: ";
        this._infoStr = "==-- INFO: ";
        this._fineStr = "==-- FINE: ";
        this._finerStr = "==-- FINER: ";
        this._finestStr = "==-- FINEST: ";
        this._warningStr = "==-- WARNING: ";
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

    Object.defineProperty(logSettings.prototype, "fineModeOn", {
        get: function () {
            return this._fineModeOn;
        },
        set: function (value) {
            this._fineModeOn = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(logSettings.prototype, "finerModeOn", {
        get: function () {
            return this._finerModeOn;
        },
        set: function (value) {
            this._finerModeOn = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(logSettings.prototype, "finestModeOn", {
        get: function () {
            return this._finestModeOn;
        },
        set: function (value) {
            this._finestModeOn = value;
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

    Object.defineProperty(logSettings.prototype, "fineStr", {
        get: function () {
            return this._fineStr;
        },
        set: function (value) {
            this._fineStr = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(logSettings.prototype, "finerStr", {
        get: function () {
            return this._finerStr;
        },
        set: function (value) {
            this._finerStr = value;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(logSettings.prototype, "finestStr", {
        get: function () {
            return this._finestStr;
        },
        set: function (value) {
            this._finestStr = value;
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
            console.info(this.settingsObject.infoStr + this.modulePrint + " - "  + message);
        }
        return true;
    };

    Logs.prototype.fine = function (message) {
        if (this.settingsObject.fineModeOn) {
            console.info(this.settingsObject.fineStr + this.modulePrint + " - "  + message);
        }
        return true;
    };

    Logs.prototype.finer = function (message) {
        if (this.settingsObject.finerModeOn) {
            console.info(this.settingsObject.finerStr + this.modulePrint + " - "  + message);
        }
        return true;
    };

    Logs.prototype.finest = function (message) {
        if (this.settingsObject.finestModeOn) {
            console.info(this.settingsObject.finestStr + this.modulePrint + " - "  + message);
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
        this.settingsObject.debugModeOn = (activationFlag === true);
    };
    Logs.prototype.setInfo = function (activationFlag) {
        this.settingsObject.infoModeOn = (activationFlag === true);
    };
    Logs.prototype.setWarning = function (activationFlag) {
        this.settingsObject.warningModeOn = (activationFlag === true);
    };

    Logs.prototype.setFine = function (activationFlag) {
        this.settingsObject.fineModeOn = (activationFlag === true);
    };

    Logs.prototype.setFiner = function (activationFlag) {
        this.settingsObject.finerModeOn = (activationFlag === true);
    };

    Logs.prototype.setFinest = function (activationFlag) {
        this.settingsObject.finestModeOn = (activationFlag === true);
    };
    return Logs;
}());
exports.Logs = Logs;
