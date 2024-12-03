let stringArr = ['hi', 'i am', 'Cristianooo'];
let address = ['No', 17, 'vallal pari street', 'MGR nagar', 'chennai', 78];
let mixedData = ['Eliyas', 26, true];

stringArr[0] = '40';
stringArr.push('42');

address[0] = 'Number';
address.unshift(600078);

mixedData = address

//Array declaration
let test = [];
let brand:string[] = [];

brand.push("Benz");
console.log(brand);

//tuple is like assigning the value in a strict mode 
let myBrand: [string, number, boolean] = ['Eliyas', 26, true];
let myBus = ['Mohamed', 1998, true];

myBus = myBrand;//we cant assign the tuple element which is defined in the strict characters

myBrand[1] = 26;// we can't assign the variable to a tuple which has only three values undefined 

//objects
let myObj: object;
myObj = [];
console.log(myObj);
console.log(typeof myObj);

myObj = {}
myObj = brand;//we can assign an array to an Object type since array is also an object in javascript

const exampleObj = {
    prop1: "Eliyas",
    prop2: true
}

exampleObj.prop2 = false

//custom type declaration like a predefined properties we can't redefine these peroperties
// type PersonalInfo = {
//     name: string,
//     age: number,
//     isMarried?: boolean, // it can be optional either we can give this prop or not
//     DOB: (number | string)[]
// }


// this is also one of the custom type declaration which is work same as the type decalaration 
interface PersonalInfo  {
    name?: string,
    age: number,
    isMarried: boolean, // it can be optional either we can give this prop or not
    DOB: (number | string)[]
}


let person1: PersonalInfo = {
    name: "Eliyas",
    age: 26,
    isMarried: false,
    DOB: [1, "october",1950]
}

let person2: PersonalInfo = {
    name: "Eju",
    age: 26,
    isMarried: false,
    DOB: [17, "december",1378]
}

person1 = person2 // we can assign the value if it is not the same type declaration but should contain the same props


let person3: PersonalInfo = {
    age: 26,
    isMarried: true,
    DOB: [17, "december",1378]
}

person1 = person3;// like this we can assign without a prop if we use ? mark

//using custom type declartion in a function 
const greetPerson = (personInfo: PersonalInfo) => {
    if(personInfo.name) {
        return `Hello ${personInfo.name.toUpperCase()}!`;
    }
    return "Hello!"
}

console.log(greetPerson(person2));// passing the object which has the same type declaration

//enum is not just the type level addition it is adding a fetuse in the typescript
enum Grade {
    U = 11,// if we are setting a value of the first element it will enumurate based on the value
    A,
    B = 21,
    C,
    D,
    E
}

console.log(Grade.E);