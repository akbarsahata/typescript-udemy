import { LinkedList } from './LinkedList'

interface ISortable {
  length: number
  compare (leftIndex: number, rightIndex: number): boolean
  swap (leftIndex: number, rightIndex: number): void
}

class Sorter {
  public collection: ISortable

  constructor (collection: ISortable) {
    this.collection = collection
  }

  public sort (): void {
    for (let i = 1; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }
}

const linkedlist

sorter.sort()
