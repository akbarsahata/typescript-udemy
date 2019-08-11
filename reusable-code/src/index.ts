import { CsvFileReader } from './CsvFileReader'
import { dateStringToDate } from './util'

type MatchResult = {
  HomeWin: 'W'
  AwayWin: 'A'
  Draw: 'D'
}
type FootballReport = [Date, string, string, number, number, MatchResult, string]

class FootballReader extends CsvFileReader<FootballReport> {
  constructor (public filepath: string) {
    super()
  }

  public parse (): FootballReport[] {
    if (!this._raw.length) {
      this.readFile()
    }

    this._data = this._raw.map(row =>
      [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as unknown as MatchResult,
        row[6]
      ]
    )
    
    return this._data
  }
}

const reader = new FootballReader('football.csv')
const data = reader.parse()

console.log(data)
