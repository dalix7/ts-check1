/*  Define the Vehicle Interface */

interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}
/*  Implement the Car Class */

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

/* Create an Instance and Call the start Method */

const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start(); // Should log "Car engine started" to the console

/*
  Compile the TypeScript code to JavaScript using the TypeScript compiler: 'tsc main.ts'
  This will generate a main.js file.
  
  
  */
