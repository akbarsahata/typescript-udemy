"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var util_1 = require("./util");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filepath) {
        this.raw = [];
        this.data = [];
        this.filepath = filepath;
    }
    CsvFileReader.prototype.printRaw = function () {
        console.log(JSON.stringify(this.raw, null, 2));
    };
    CsvFileReader.prototype.print = function () {
        console.log(this.data);
    };
    CsvFileReader.prototype.readFile = function () {
        var str = fs_1.default.readFileSync(this.filepath, {
            encoding: 'utf-8'
        });
        this.raw = str
            .trim()
            .split('\n')
            .map(function (line) {
            var _a = line.split(','), a = _a[0], b = _a[1], c = _a[2], d = _a[3], e = _a[4], f = _a[5], g = _a[6];
            return [a, b, c, d, e, f, g];
        });
    };
    CsvFileReader.prototype.parse = function () {
        if (!this.raw.length) {
            throw new Error('the data is empty, probably has not called readFile');
        }
        this.data = this.raw
            .map(function (row) {
            var a = row[0], b = row[1], c = row[2], d = row[3], e = row[4], f = row[5], g = row[6];
            return [
                util_1.dateStringToDate(a),
                b,
                c,
                parseInt(d),
                parseInt(e),
                f,
                g
            ];
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
