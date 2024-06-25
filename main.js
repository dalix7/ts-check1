/*  Define the Vehicle Interface */
/*  Implement the Car Class */
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
/* Create an Instance and Call the start Method */
var myCar = new Car("Toyota", "Corolla", 2020);
myCar.start(); // Should log "Car engine started" to the console
/*
  Compile the TypeScript code to JavaScript using the TypeScript compiler: 'tsc main.ts'
  This will generate a main.js file.
  
  
  */
