const mongoose = require("mongoose");

const academySchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
}, { timestamps: true });

const Academy = mongoose.model("Academy", academySchema, "academies");

const createAcademy = async (data) => {
    const newAcademy = new Academy(data);
    return await newAcademy.save();
};

const updateAcademy = async (_id, data) => {
    return await Academy.updateOne({ _id }, data);
};

const deleteAcademy = async (_id) => {
    return await Academy.deleteOne({ _id });
};

const getAllAcademies = async () => {
    return await Academy.find();
};

const getAcademyById = async (_id) => {
    return await Academy.findOne({ _id });
};

module.exports = { createAcademy, updateAcademy, deleteAcademy, getAllAcademies, getAcademyById };