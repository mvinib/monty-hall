import PortModel from "../model/port";

export function createPorts (qtd: number, portOnGift?:number) : PortModel[] {
  const selected = Math.floor(Math.random() * qtd + 1)
  return Array.from({ length: qtd }, (_, i) => {
    const number = i + 1
    const haveGift = number === (portOnGift ?? selected)
    return new PortModel(number, haveGift)
  })
}

export function updatePorts(ports: PortModel[], portModified: PortModel): PortModel[] {
  return ports.map((port) => {
    if(port.number === portModified.number) {
      return portModified
    } else {
      return portModified.open ? port :  port.unSelected()
    }
  })
}