class Node {
  public next: Node | null = null

  constructor (public data: number) {}
}

class LinkedList {
  private head: Node | null = null

  public add (data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node

      return
    }

    let tail = this.head.next

    while (tail.next) {
      tail = tail.next
    }

    tail.next = node
  }

  public at (index: number): Node {
    if (!this.head) {
      throw new Error('out of bound!')
    }

    let counter = 0
    let node = this.head

    while (node.next) {
      if (counter === index) {
        return node
      }
      node = node.next
      counter++
    }

    throw new Error('out of bound!')
  }

  public swap (leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)
    const leftHand = leftNode.data

    leftNode.data = rightNode.data
    rightNode.data = leftHand
  }

  public compare (leftIndex: number, rightIndex: number): boolean {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    return leftNode.data > rightNode.data
  }

  get length (): number {
    if (!this.head) {
      return 0
    }

    let length = 1
    let node = this.head.next

    while (node.next) {
      length++
      node = node.next
    }

    return length
  }

  public toString (): string {
    return JSON.stringify(this.head, null, 2)
  }

}

export { LinkedList }
