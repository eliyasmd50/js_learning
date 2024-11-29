const mongoose = require("mongoose");

// to create a separate schema for address
const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number, 
        min: 1,
        max: 100,
        validate: {// to validate the input entered from the user
            validator: v => v%2 === 0,
            message: props => `${props.value} is not an Even number`
        }
    },
    email: {
        type: String,
        minLength: 10,// to check whether the email has minimum number of length to 10
        required: true,
        lowercase: true,
        // uppercase: true
    } ,
    createdAt: {
        type: Date,
        immutable: true,// to control it is immutav=ble after created
        default:() => Date.now() //executing as an anonymous function
    },
    updatedAt: {
        type: Date,
        default:() => Date.now()
    },
    bestFriend:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address: addressSchema
})

// to create a methods in schema to call the method and control it
userSchema.methods.sayHi = function() {
    console.log(`Hi my name is ${this.name} amd my age is ${this.age}`);
}

// to find the record by searching the whole model in the Db using statics
// can be applied in the whole collection
userSchema.statics.findByName = function(name) {
    return this.where({ name: new RegExp(name, "i")});
}

// to apply this after a query in a search query
userSchema.query.byName = function(name) {
    return this.where({ name: new RegExp(name, "i")});
}

// to create a key value pair in a virtual way but not saving in the Db
// since it is virtual it is not taking space in the Db and avoiding data duplicates
userSchema.virtual("namedEmail").get(function() {
    return `${this.name} <${this.email}> `;
})

// use a middleware to update some funstions pre is do the function before and post if do the function after  ideology
userSchema.pre("save", function(next) {
    this.updatedAt = Date.now();
    next();
})

// post middleware to call a function in this we can't use the this keyword since it is saved
userSchema.post("save", function(doc, next) {
    doc.sayHi();
    next();
})

module.exports = mongoose.model("User", userSchema);