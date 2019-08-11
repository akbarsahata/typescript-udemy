"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var util_1 = require("./util");
var FootballReader = /** @class */ (function (_super) {
    __extends(FootballReader, _super);
    function FootballReader(filepath) {
        var _this = _super.call(this) || this;
        _this.filepath = filepath;
        return _this;
    }
    FootballReader.prototype.parse = function () {
        if (!this._raw.length) {
            this.readFile();
        }
        this._data = this._raw.map(function (row) {
            return [
                util_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
        return this._data;
    };
    return FootballReader;
}(CsvFileReader_1.CsvFileReader));
var reader = new FootballReader('football.csv');
var data = reader.parse();
console.log(data);
