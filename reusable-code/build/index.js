"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var fileReader = new CsvFileReader_1.CsvFileReader('football.csv');
fileReader.readFile();
fileReader.parse();
fileReader.print();
