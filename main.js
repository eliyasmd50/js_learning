//local and session storage is a web storage API

//
const myArr = ["eat", "sleep", "code", "repeat"];
const myObject = {
    name: "Eliyas",
    hobbies: ["eat", "sleep", "code", "repeat"],
    logName: function () {
        console.log(this.name);
    }
}



localStorage.setItem("mySessionStore", JSON.stringify(myArr));
const storeLength = localStorage.length;
const mySessionData = JSON.parse(localStorage.getItem("mySessionStore"));
console.log(storeLength);