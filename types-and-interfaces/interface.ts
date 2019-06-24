interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

class Civic implements Vehicle {
  name: string
  year: number
  broken: boolean

  constructor (name: string, year: number, broken: boolean) {
    this.name = name
    this.year = year
    this.broken = broken
  }

  summary (): string {
    return this.name
  }
}
const oldCivic: Civic = new Civic('civic old', 2000, true)

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`this is a ${vehicle.name} from ${vehicle.year} and it's ${vehicle.broken ? '' : 'not '}broken`)
}

printVehicle(oldCivic)