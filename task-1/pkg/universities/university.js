const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const University = mongoose.model("University", universitySchema, "universities");

// CRUD
const createUniversity = async (data) => {
    const newUni = new University(data);
    return await newUni.save();
}

const getAllUniverisites = async () => {
    return await University.find();
}

const getUniveristy = async (_id) => {
    return await University.findOne({ _id });
}

const updateUniversity = async (_id, data) => {
    return await University.updateOne({ _id }, data);
}

const deleteUniversity = async (_id) => {
    return await University.deleteOne({ _id });
}

module.exports = {
    createUniversity,
    getAllUniverisites, getUniveristy,
    updateUniversity, deleteUniversity
}