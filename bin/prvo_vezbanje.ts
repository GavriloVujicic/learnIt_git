let apples: number = 5;
let speed: string ='fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
// Built in object
let now: Date = new Date();
// Array of strings
let colors: string[] = ['red', 'green', 'blue'];
// Array of numbers
let myNumbers: number[] = [1,2,3];
//Array of booleans
let truths: boolean[] = [true, true, false];
//Klase
class Car {

}
let car: Car = new Car();
//Object Literal
let point: { x: number; y: number} = {
  x: 10,
  y: 20
}
// Function
const logNumber: (i: number) => void = (i: number) => {      //anotacija je sve izmedju logNumber: i = (: (i:number) =>void)  to je opis funkcije
  console.log(i);                                            // sve desno od znaka = je gde zapravo dajemo implementaciju ( = (i:number) =>)
}
//When to use Annotations
// 1) Functions that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);  //stavljamo coordinates: {x: number; y: number} da bi izbegli citanje tipa kao'any'
console.log(coordinates);   //{ x: 10, y: 20 }

// 2) When we declare a variable on one line
// and initialize it later
let words: string[] = ['red', 'green','blue'];
let foundWord: boolean = false;
for (let i=0; i<words.length; i++){
  if( words[i] === 'green') {
    foundWord = true;
  }
}
// Variable whose type cannot be inferred correctly
let numbers: number[] = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for(let i=0; i< numbers.length; i++) {
  if (numbers[i]>0){
    numberAboveZero = numbers[i];
  }
}
//primer funkcije za sabiranje dva broja
const saberi = (a: number, b: number): number => {
      return a + b;
}
// a moze i ovako, jer typescript sam cita vrednost i anotaciju ne mora da citamo
const saberi2 = (a: number, b: number) => {
  return a + b;
}

function divide(a: number, b:number): number {
  return a/ b;
}

const multiply = (a:number, b:number): number => {
  return a * b;
}
// Logger funkcija
const logger = (message: string): void => {
  console.log(message);
}
// throw error function
const throwError = (message: string): string => {
  if (!message){
    throw new Error(message);
  }
  return message;
}
// destruktuarizacija
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}
// destruktuarizacija
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todaysWeather);

//Annotations Around Object
const profile = {
  name: 'alex',
  age: 20,
  coords: {            //nested object
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {            // funkcija koja vraca godine u objekat
    this.age = age;
  }
};

// destrukturizacija godina prethodno kreiranog objekta
const {age}: {age: number} = profile;

//destrukturizacija latitude i longtitude
const {coords :{lat, lng}}: {coords: {lat: number, lng: number}} = profile;

//destrukturizacija godina i imena iz prethodno kreiranog profila
const {age, name}: {age:number, name: string} = profile;

const carMakers: string[] = ['ford', 'toyota','chevy'];
const dates = [new Date(), new Date()];

//dvodimenzionalni i visedimenzionalni nizovi
const carsByMakers: string[][] = [
  ['f150'],
  ['corola'],
  ['camaro']
];

//help with instance when extracting values

const automobil = carMakers[0];
const myCar = carMakers.pop(); // pop() metoda vraca zadnji element iz niza

// prevent incompatible values
carMakers.push('100'); //carMakers.push(100) ne moze da se ubaci

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string) [] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());


//zapis objekta tipa
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};
// korisni kod rad sa csv fileovima moze se preskociti
// Tuple sa specificnim karakteristikama svakog polja izgleda ovako
const pepsi: [string, boolean, number] = ['brown', true,40];

//Type Alias
 type Drinkic = [string,boolean,number];
 const cokaCola: Drinkic = ['brown', true, 40]; 
 const sprite: Drinkic = ['clear', true, 80];
 const tea: Drinkic = ['brown', false, 0];

 const carSpecs: [number, number] = [400, 3354];

 //Interfaces
 //ovakav tip anotacije moze da se uprosti koriscenjem interface-a

 const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
}

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
      console.log(`Name : ${vehicle.name}`);
      console.log(`Year : ${vehicle.year}`);
      console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);


//Na laksi nacin to mozemo uciniti ovako

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}


const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
}

const printVehicle = (vehicle: Vehicle): void => {
      console.log(`Name : ${vehicle.name}`);
      console.log(`Year : ${vehicle.year}`);
      console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);


//upotreba  predefinisanih tipova kaoo sto je Date() u interface-ima
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}


const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string{
    return `name: ${this.name}`
  }
}

const printVehicle = (vehicle: Vehicle): void => {
      console.log(`Name : ${vehicle.name}`);
      console.log(`Year : ${vehicle.year}`);
      console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
}

// redefinisanje Interface-a
interface Reportable {
  summary(): string;
}


const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string{
    return `name: ${this.name}`
  }
}
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(oldCivic);
// jos jedan oblik

interface Reportable {
  summary(): string;
}


const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string{
    return `name: ${this.name}`
  }
}

const drinkk = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(oldCivic);
printSummary(drinkk);

//classes and acccess modifiears in TypeScript
class Vehicle {
  protected drive(): void {
    console.log('chugga chugga');
  }
   public honk(): void {
    console.log('beep beep');
  }
}

class Kolca extends Vehicle {
    drive(): void {
      console.log('vroom vroom');
    }
    startDrivingProcess(): void {
      this.drive();
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const kolca = new Kolca();
kolca.drive();
kolca.honk();














let w: any = true;
v = "string"; //no error as it can be "any" type
Math.round(v); // no error as it can be "any" type


let w: unknown = 1;
w = "string"; //no error
w = {
	runANonExistentMethod: () => {
		console.log("I think therefore I am");
	}
} as { runANonExistentMethod: () => void}
// how can we avoid an error for the code commented out below when we don't know the type?
// w.runANonExistingMethod(); // object is of type 'unknown'

if(typeof w === 'object' && w !== null) {
	(w as {runANonExistentMethod: Function}).runANonExistentMethod();
}

// never effectiveley throws an error whenever it is defined

let x: never = true; //Error: Type 'boolean' is not assigned to type 'never'
//never is rareley used, especially by itself,its primaty use is in advanced generics


// type: undefined & null // these types dont have much use unless "strictNullChecks" is enabled in teh "tsconfig.json" file
// undefined and null are types that refer to the HavaScript primitives undefined and null respectiveley

let y: undefined = undefined;
let z: null = null;

// TypeScript has a specific syntax for typing arrays

const names: string[] = [];
names.push("Dylan"); //no error
names.push(3); //Error: Argument of type 'Number' is not asignable to parameter of type 'string'

//the readonly keyword can prevent arrays from being changed

const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property "push' does not exist on type 'readonly string[]'
// try removing the readonly modifier and see if it works?

// TypeScript can infer the type pf an array if it has values

const numbers = [1,2,3]; //inferred to type number[]
numbers.push(4); // no error
numbers.push("2"); // Error: Argument of type 'String' is not assignable to parameter of type 'number'
let head: number = numbers[]; //no error

// TypeScript Tuples
// Typed Arrays
// A tuple is a tuped array with a pre-defined length and types for each index
// Tuples are great because they allow each element in the array to be aknown type of value
// to define a tuple, specify the tuype of each element in the array:

// now we define our tuple

let ourTuple: [number, boolean, string];

// initialize correctly

ourTuple = [5, false, 'Coding God was here'];


// ReadOnly Tuple
//a good practice is to make your tuple radonly
//Tuples have strongly defined types for the initial values:


let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];  // we have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);


// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean,string] = [5, true, 'The real coding god'];
// throws error as it is readonly
ourReadonlyTuple.push('Coding God took a day off');

// Named tuples
// allow us to provide context for our values at each index

const graph: [x: number, y:number] = [55.2, 41.3]; // named tuples provide more context for what our indec valeuse reporestn

//destructing tuples
//since tuples are arrays we can also destruct them

const graph: [number,number] = [55.2, 41.3];
const [x,y] = graph;

// TypeScript has a specific syntax for typing object

const	car: {type: string, model:string, year:number} = {
	type: "Toyota",
	model: "Corola",
	year: 2009
};

// Type interface
// TypeScript can infer the types of properties based on their values

const car = {
	type:"Toyota",
};
car.type = "Ford"; // no error
car.type = 2; // error: Type "number is not assignableto type 'string'


// optional propreties
// optional properties are properties that dont have to be defined in the object definition

// example without an optional property
const car: {type:string, milage: number} = { // Error: Property 'milage' is missing in type '{type:string}' but required in type "{type:string; milage:number}"}.
	type: "Toyota",
};
car.milage = 2000;


// example with an optional property

const car: {type: string, milage?: number} = { //no error
	type: "Toyota"
};
car.milage = 2000;

// Iindex Signatures
// index signaturas can be used for objects without a defined list of properties

const nameAgeMap: {[index: string]: number} = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifity"; //Error: Type 'string' is not assignable to type 'number'

// TypeScript Enums
// An enum is a special 'class' that represents a group of ocnstants (unchangeable variables)
// enums come in two flavors 'string' and 'numeric'

// numeric enums - default
//by default enums will initialize the first value to 0 and add 1 to each additional value

enum CardinalDirection {
	North,
	East,
	South,
	West
}

let currentDirection = CardinalDirection.North; //logs 0
console.log(currentDirection);	// thorows an error as 'north' is not a valid enum
currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirection'


//Numeric Enums - Initialized
// you can set the value of the forst numeric enum and habe it auto increment from that

enum CardinalDirection {
	North = 1,
	East,
	South,
	West
} 
console.log(CardinalDirection.North); // logs 1
console.log(CardinalDirection.West); // logs 4

// Numeric enums - fully initialized
// you can assign unique number value for each enum value. then the values will not increment aoutomatically

enum StatusCodes {
	NotFound = 404,
	Success = 200,
	Accepted = 202,
	BadRequest
}
console.log(StatusCodes.NotFound); // logs 404
console.log(StatusCodes.Success); //logs 200


//string enums
// enums can also contain strings. this is more common


//TypeScript Type Aliases and Interfaces
// TypeScript allows types to be defined separately from the variables that use them
// Aliases and interfaces allows types to be easily shared between different variables/ objects
// Type Aliases
// Type Aliasesallow defining types with a custom name (an Alias)
// Type aliases can be used for primitives like "string" or more complex types such as "objects" and "arrays":

type CarYear = numbers
type CarType = string
type CarModel = string
type Car = {
	year: CarYear,
	type: CarType,
	model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corola"
const car: Car = {
	year: carYear,
	type: CarType,
	model: carModel
}


// Interfaces
// interfaces are similar to type aliases, except they only apply to "object" types

interface Rectangle {
	height: number,
	width: number
}

const rectangle: Rectangle = {
	height: 20,
	width: 10
};


// Extending Interfaces
// Interfaces can extend each other's definition
// Extending an interface means you are creating anew interface means you are creating a new interface with the same properties as the original , plus something new

interface Rectangle {
	height: number,
	width: number
}

interface ColoredRrectangle extends Rectangle{
	color: string
}

const colorRectangle: ColoredRrectangle = {
	height: 20,
	width: 10,
	color: "red"
};


// TypeScript Union Types
// Union types are used when a value can be more than a single type
// such as when a property would be string or number

//Union | (OR)
// Using the | we are saying our parameter is a stirng or number


function printStatusCode(code: string|number) {
	console.log(`My staatus code is ${code}.`)
}

printStatusCode(404);
printStatusCode('404');

// Union Tyype Errors
// Note: You need to know what your type is when union types are being used ot avoid type erroors

function printStatusCode(code: string|number){
	console.log(`My status code is ${code.toUpperCase()}.`) // error: property "toUpperCase" does not exist ontype 'string|number'.
	Property 'toUpperCase' does not exist ont type 'number'
}


//typescript Functions
//typescript has a specific sintax for typing function parameters ans returns values
//return type
//the type of the value returned by the function can be explicitly defined

// the `:number` here specifies that this function returns a number
function getTime(): number{
	return new Date().getTime();
}

// if no return type is defined, TypeScript will attempt to infer it trough the types of the variables or expressions returned

// voidReturn Type
//The type void can be used to indicate a function doesnt return any value

function prontHello(): void {
	console.log(`hello`);
}

// parameters
// function parameters are typed with a similar syntax as variable declarations

function multiply(a: number, b: number) {
	return a*b;
}

// if no parameter type is defined, TypeScript will default to using 'any' unless additionl type information is available as shown in the default parameters and type alias sections below


// optional parameters
// by default TypeScript will assume all parameters are required, but they can be explicitly marked as optional

//the `?` operator here marks parameter `c` as optional

function add(a: number, b:number, c?:number){
	return a + b + (c || 0);
}

//default parameters
//for parameters with default values the default values goes after the type annotation:

function pow(value: number, exponent: number = 10) {
	return value ** exponent;
}

// typescript can aslo infer the type from the default value

// named parameters
//typing named parameters follows the same patern as typing normal parameters

function divide({dividend, divisor}: { dividednd: number, divisor: number}) {
	return dividend/divisor;
}

//rest parameters
// rest parameteers can be typed like normal parameters but the type must be an array as rest parameters are always arrays

function add(a: number, b: number, ...rest: number[]) {
	return a + b + rest.reduce((p, c) => p + c, 0);
}

// type alias
// function types can be specified separateley from function with type aliases
// these types are written similarly to arrow functions

type Negate = (value: number) =>number;
//in this function , the parameter ` value` automaticallygets assigne the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value *-1;


// TypeScript Casting
// There are times when working with types where its necessary to override the type of a variable such as whrn incorrect types are provided by a libraty
//casting is the process of overriding a type

// Casting with as
//a straightforward way to cast a variable us usin the `as` keyword which will dierectly change the type of the given variable

let x: unknown = 'hello';
console.log((x as string).length);

// casting does not actually change the type of the data within the variable for example the following code will not work as expected since the variable x is still a number

let x: unknown = 4;
console.log((x as string).length); // prints undefinedsince numbers dont have a length

//typescript will still atttempt to typcheck casts tp prevent casts that dont seem correct for example the following will throw a type error since typescrypt knows
//casting a string to a number doesnt mane sens without converting the data:

console.log((4 as string).length); // error: conversion of type `number` to `string`` may be a mistake because neither type sufficiently overlaps with the other
									//if this was intentionsl, convert the expression to `unknown first


//casting with <>
//using <> works the same as casting with as

let x: unknown = 'hello';
console.log((<string>).length);
// this type of casting will not work with TSX, such as when working on react files
let myVar: unknown = "Hello world!";
console.log((<string>myVar).length);

//Force Casting
// to override type errors that TypeScript may throw when casting, first cast to "unknown

let x = 'hello';
console.log(((x as unkown) as number).length); // x is not actually a number so this will return undefined

// typescript clases
//typescript adds types and visability modifiers to javascript classes
//Members: Types

// the members of a class (properties & methods) are typed usig type annotations similar to variables

class person {
	name: string;
}

const person = new Person();
person.name = "Jane";

// Members visability
//class members also be given special modifiers which affect visability
// there are three main visability modifiers in typescript
// 1. public > (default) allows access to the class member from anywhere
// 2. private > only allows access to the class member from within the class
// 3. protected > allows access to the class member from itself and any classes thet inherit it

class Person {
	private name: string;
	public constructor(name:string){
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}
}

const person = new Person("Jane");
console.log(person.getName()); //person.name isnt accessible from outside the class since its private

//the this keyword ina a class usually refers to the instace of the class

// Parameters Properties
// Typescript provides a convenient way to define class members in the constructor, by adding a visability modifiers to the parameter

class Person {
	// name is private member variable
	public constructor(private name: string) {}
	public getName():string {
		return this.name;
	}
}

const person = new Person("Jane");
console.log(person.getName());


//readOnly
// Similar to arrays, the readonly keyword can prevent class members from being changed

class Person{
	private readonly name: string;
	public constructor(name: string) {
		// name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor
		this.name = name;
	}
	public getName(): string {
		return this.name;
	}
}


const person = new Person("Jane");
console.log(person.getName());

// Inheritance: implements
// interfaces can be used to define the type a class must follow trough the implements keyword

interface Shape {
	getArea: () => number;
}

class Rectangle implements Shape {
	public constructor(protected readonly width: number, protected readonly height: number) {}
	public getArea(): number {
		return this.width * this.height;
	}
}


// a class can implement multiple intefaces by listing each one after impements, separated by a comma like so: class Rectangle implements Shape ...


// Inheritance: Extends
// Class can extend eachothe through the extends keyword. A class can only exted one other class

interface Shape{
	getArea: () => number;
}

class Rectangle implements Shape {
	public constructor(protected readonly width: number, protected readonly height: number) {}
	public getArea(): number {
		return this.width * this.height;
	}
}

class Square extends Rectangle {
	public constructor(width: number) {
		super(width, width);
	}
	// getArea gets inherited from Rectangle
}


//Override
// When a class extends another class, it can replace the members of the parent xlass with the same name
//Mewer versions of TypeScript allow explicitly marking this with the override keyword

