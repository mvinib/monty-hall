export default class PortModel {
  #number: number
  #haveGift: boolean
  #selected: boolean
  #open: boolean

  constructor(number: number, haveGift = false, selected = false, open = false) {
    this.#number = number
    this.#haveGift = haveGift
    this.#selected = selected
    this.#open = open
  }

  get number () {
    return this.#number
  }

  get haveGift () {
    return this.#haveGift
  }

  get selected () {
    return this.#selected
  }

  get open () {
    return this.#open
  }

  unSelected() {
    const select =  false
    return new PortModel(this.number, this.haveGift, select, this.open)
  }

  handleSelected() {
    const select =  !this.selected
    return new PortModel(this.number, this.haveGift, select, this.open)
  }

  opening() {
    const opened =  true
    return new PortModel(this.number, this.haveGift, this.selected, opened)
  }
}