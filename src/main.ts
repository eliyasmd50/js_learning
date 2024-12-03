let myName: string = "Eliyas";
let meaningOfLife: number = 26;
let isLoading : boolean = true;
// let album: any;// it beats the purpose of javascript
let album: number | string | boolean; // union declaration type if we know it is just thos types of data

myName = "Mohamed";
meaningOfLife = 30;
isLoading = false;
album = true;// this will give error because of the union declared as explicitly
album = 1998;
album = "Eliyas";

const sum = (a:number, b:string) => {
    return a + b;
}

const re:RegExp = /\w+/g;// regular Expression declaration