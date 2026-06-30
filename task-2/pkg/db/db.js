const mongoose = require("mongoose");

const { getSection } = require("./../config/index");
const { MONGO_USERNAME, MONGO_PASSWORD, collection } = getSection("db");

const dbURI = `mongodb+srv://${db.MONGO_USERNAME}:${db.MONGO_PASSWORD}@cluster0.qkcdruf.mongodb.net/${db.collection}?appName=Cluster0`;

async function connectDB() {
    try {
        mongoose.connect(URI);
        console.log("Connection to MongoDB established");
    } catch (error) {
        console.log("Error:", error);
    }
}

module.exports = connectDB;