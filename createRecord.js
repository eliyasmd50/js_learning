const User = require('./User');

const createRecord = async () => {
    try {
        let user = await User.create({
            name: "Mohamed", 
            age: 25,
            email: "eliyas@gmail.com",
            hobbies: ["Playing Football", "Coding"],
            address: {
                city:"Chennai"
            }
        });
        console.log(user);
        user.createdAt = Date.now(); // checking if the value is immutable or not
        user.updatedAt = Date.now();
        setTimeout(() => {
            user.save();
            console.log(user);
        }, 3000 ); // to save in the Db
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = createRecord;
