import fs from 'fs'

import { dateStringToDate } from './util'

type MatchResult = {
  HomeWin: 'H'
  AwayWin: 'A'
  Draw: 'D'
}
type RawTuple = [string, string, string, string, string, string, string]
type DataTuple = [Date, string, string, number, number, MatchResult, string]

export class CsvFileReader {
  private raw: RawTuple[] = []
  private data: DataTuple[] = []
  public filepath: string

  constructor (filepath: string) {
    this.filepath = filepath
  }

  public printRaw (): void {
    console.log(JSON.stringify(this.raw, null, 2))
  }

  public print (): void {
    console.log(this.data)
  }

  public readFile(): void {
    const str = fs.readFileSync(this.filepath, {
      encoding: 'utf-8'
    })

    this.raw = str
      .trim()
      .split('\n')
      .map((line: string): RawTuple => {
        const [a, b, c, d, e, f, g] = line.split(',')

        return [a, b, c, d, e, f, g]
      })
  }

  public parse (): void {
    if (!this.raw.length) {
      throw new Error('the data is empty, probably has not called readFile')
    }

    this.data = this.raw
      .map((row): DataTuple => {
        const [a, b, c, d, e, f, g]: RawTuple = row

        return [
          dateStringToDate(a),
          b,
          c,
          parseInt(d),
          parseInt(e),
          f as unknown as MatchResult,
          g
        ]
      })
  }
}