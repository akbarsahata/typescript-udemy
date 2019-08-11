"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader() {
        this._raw = [];
        this._data = [];
    }
    CsvFileReader.prototype.printRaw = function () {
        console.log(JSON.stringify(this._raw, null, 2));
    };
    CsvFileReader.prototype.printData = function () {
        console.log(this._data);
    };
    Object.defineProperty(CsvFileReader.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    CsvFileReader.prototype.readFile = function () {
        var str = fs_1.default.readFileSync(this.filepath, {
            encoding: 'utf-8'
        });
        this._raw = str
            .trim()
            .split('\n')
            .map(function (line) { return line.split(','); });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
