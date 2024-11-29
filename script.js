const mongoose = require("mongoose");
const User = require('./User');
const createRecord = require('./createRecord');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/testDB");
        // await createRecord(); // create data
        // const user = await User.findById("6748a1ff0760bf30e6dd155f");// by using ID
        // const user = await User.find({ name: "Eliyas"});// to find all the data from the Db which is matched Eliyas name
        // const user = await User.findOne({ name: "Mohamed" }); // to find the first record which is matched this query
        // const user = await User.exists({ name: "Mohamed" }); // to find the data which is exists in the Db returns ID of the data
        // const user = await User.where("name").equals("Eliyas").where("age").gt(26); // where caluse to find the exact data
        // const user = await User.where("age").equals(26).where("name").equals("Eliyas"); // query data based on the selection
        // const user = await User.where("name").equals("Mohamed").limit(2); // to limit the data for the first 2 documnets
        // const user = await User.where("name").equals("Mohamed").limit(10).select("age");// within all the query selectors we can select the particualr fields
        // let user = await User.where("name").equals("Mohamed").limit('2').select('age');
        // user[0].bestFriend = "67488f7d1be6624e7eb1d8fd";
        // await user[0].save();

        // const user = await User.where("name").equals("Mohamed").limit(2);// to get all the datas from the queries
        // const user = await User.where("name").equals("Mohamed").limit(1).populate("bestFriend"); // to populate the data for the related fields to execute the schemas

        // to pass the data to a function which is created in the model file for a particular instance
        // const user = await User.findOne({ name: "Mohamed" });
        // await user.sayHi();

        // to create a function which is query for all users which they are matched by the name
        // const user = await User.findByName("Mohamed");

        // it will apply after the query params but not the directly apply to a schema lke scripts
        // const user = await User.find().byName("Eliyas");

        // calling the virtual functions in schema will give the key value pair like it
        // const user = await User.findOne({name: "Mohamed", email: "eliyas@gmail.com"});
        // console.log(user.namedEmail);

        // to use the middleware in mongo to check or update a filed at the time before execution
        const user = await User.findOne({ name: "Eliyas"});
        user.email = "eliyas@gmail.com";
        user.save(); // updating the updatedAt fields in the middleware in the Schema file
        console.log(user);
    } catch (error) {
        console.log(error.message);
    }
}

connectDB();
