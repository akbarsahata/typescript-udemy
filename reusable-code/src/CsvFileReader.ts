import fs from 'fs'

export abstract class CsvFileReader<T> {
  protected _raw: string[][] = []
  protected _data: T[] = []
  
  public abstract filepath: string
  public abstract parse (): void

  public printRaw (): void {
    console.log(JSON.stringify(this._raw, null, 2))
  }

  public printData (): void {
    console.log(this._data)
  }

  public get data (): T[] {
    return this._data
  }

  public readFile(): void {
    const str = fs.readFileSync(this.filepath, {
      encoding: 'utf-8'
    })

    this._raw = str
      .trim()
      .split('\n')
      .map((line: string): string[] => line.split(','))
  }
}