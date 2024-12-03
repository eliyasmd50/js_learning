//Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number )[];

type PersonalInfo = {
    name?: string,
    age: number,
    isMarried: boolean,
    DOB: stringOrNumberArray// using here string or number array aliasintead of defining the exact type
}

type userId = stringOrNumber;// using the type alias here

//Literal Types
let userName: 'Ross' | 'Chandler' | 'Joey';
userName = 'Chandler';

console.log(userName);

//functsion with return value and type
const add = (a: number, b: number): number => {
    return a + b;
}


//function that does not have a return type which is called a side effect it has a void return type
const logMessage = (message: any): void => {
    console.log(message);
}

logMessage(`Hello!`);
logMessage(add(2, 3));

const subtract = function (c:number, d: number): number {
    return c - d;
}

logMessage(subtract(5, 3));


type mathFunction = (a: number, b: number) => number;// using type aliases here for the definition

// we can use type aliases by using the interface method type definition too it will work the same
// interface mathFunction {
//     (a: number, b: number): number
// }

const multiply: mathFunction = function  (a,b) {
    return a * b;
}

logMessage(multiply(4, 5));

//optional paramaeters Note: it needs to come at the l;ast opf the paramaetres 
const addAll = function (a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a + b+ c;
    }
    return a + b;
}

//default parameters  Note: it wll not work for the type Aliases defenition
const sumAll = function (a: number = 10, b: number, c: number = 2) : number {
    return a + b + c;
}

logMessage(sumAll(2, 3, 2));
logMessage(sumAll(undefined, 3)); // to decalre 10 value explicitly as a default value 
logMessage(addAll(2, 3));
logMessage(addAll(2, 3, 2));

const total = (a:number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}

logMessage(total(10,2, 3));

//never type
const errMsg = (errMsg: string) => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i: number = 0;
    while(true) {
        i++
        if(i > 100) break;
    }
}

// custom type Guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
}

//never function usage
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number';
    return errMsg('this should not happen');
}