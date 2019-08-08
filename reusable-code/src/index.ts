import { CsvFileReader } from './CsvFileReader'

const fileReader = new CsvFileReader('football.csv')

fileReader.readFile()
fileReader.parse()
fileReader.print()