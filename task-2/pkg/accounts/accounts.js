const mongoose = require("mongoose");


const accountSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
}, {timestamps: true});

const Account = mongoose.model("Account", accountSchema, "accounts");


// CRUD
const create = async (accountData) => {
    const newAccount = new Account(accountData);
    return await newAccount.save();
    //return await Account.create(accountData)
    //await Account.accounts.insertOne(accountData)
}

const read = async () => {
    return await Account.find();
}

const update = async (_id, accountData) => {
    return await Account.updateOne({ _id }, accountData);
}

const remove = async (_id) => { // we input the key, not the value, so we don't have: {_id: id}
    return await Account.deleteOne({ _id });
}

const getByEmail = async (email) => {
    return await Account.findOne({ email });
}


const loginSchema = new mongoose.Schema({
    email: { // we search for a specific user login attempts by email 
        type: String,
        required: true,
    },
    success: Boolean, // mark true/false for each document and their email is in the DB collection
}, {timestamps: true}); // + timestamps for each login

const loginCounter = mongoose.model("LoginAttempt", loginSchema, "Login Attempt Status");

// CRUD -> new mongoose function: .countDocuments() which scans the collection for documents matching the filters
const countSuccessful = async () => {
    return await loginCounter.countDocuments({ success: true });
}

const countUnsuccessful = async () => {
    return await loginCounter.countDocuments({ success: false });
}


module.exports = { create, read, update, remove, getByEmail, loginCounter, countSuccessful, countUnsuccessful };