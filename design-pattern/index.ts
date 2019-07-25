class Sorter {
  collection: number[]

  constructor (collection: number[]) {
    this.collection = collection
  }

  sort (): void {
    for (let i = 1; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const a = this.collection[j]
          const b = this.collection[j + 1]

          this.collection[j] = b
          this.collection[j + 1] = a
        }
      }
    }
  }
}

const sorter = new Sorter([1,2,3,4,1,-2,1,8,9,3,3,4,2,1])

sorter.sort()

console.log(sorter.collection)