import { LinkedList } from './LinkedList'

interface ISortable {
  length: number
  compare (leftIndex: number, rightIndex: number): boolean
  swap (leftIndex: number, rightIndex: number): void
}

class Sorter {
  private _collection: ISortable

  constructor (collection: ISortable) {
    this._collection = collection
  }

  public sort (): void {
    for (let i = 1; i < this._collection.length; i++) {
      for (let j = 0; j < this._collection.length - i; j++) {
        if (this._collection.compare(j, j + 1)) {
          this._collection.swap(j, j + 1)
        }
      }
    }
  }

  get collection (): string {
    return JSON.stringify(this._collection, null, 2)
  }
}

const linkedlist = new LinkedList()

linkedlist.add(1)
linkedlist.add(3)
linkedlist.add(2)
linkedlist.add(1)
linkedlist.add(3)
linkedlist.add(3)
linkedlist.add(2)

const sorter = new Sorter(linkedlist)
sorter.sort()

console.log(sorter.collection)
