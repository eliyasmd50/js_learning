require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3500;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//DB connect
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/");
    } catch (e) {
        console.log(e);
    }
}
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Schema creation 
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
})

const Usermodel = mongoose.model('Users', userSchema);


//routes
app.get('/users', async (req, res) => {
    const users = await Usermodel.find();
    if (!users) return res.sendStatus(204).json({ "message": `No Employee Data` });
    console.log(users);
    res.json(users);
})


//server listen with DB connection
mongoose.connection.once('open', (err) => {
    if (err) console.log("DB Not connected");
    console.log("DB connected")
    app.listen(PORT, () => console.log(`server listening on the port ${PORT}`));
})

