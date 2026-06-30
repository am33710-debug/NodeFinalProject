const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    universityId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Univeristy",
        required: true,
        max: 1
    }
}, {timestamps: true});

const Faculty = mongoose.model("Faculty", facultySchema, "faculties");

// CRUD
const createFaculty = async (data) => {
    const newFaculty = new Faculty(data);
    return await newFaculty.save();
}

const getAllFaculties = async () => {
    return await Faculty.find().populate("universityId");
    // populate ни го влече целиот University документ наместо само ObjectId
}

const getFaculty = async (_id) => {
    return await Faculty.findOne({ _id }).populate("universityId");
}

const updateFaculty = async (_id, data) => {
    return await Faculty.updateOne({ _id }, data);
}

const deleteFaculty = async (_id) => {
    return await Faculty.deleteOne({ _id });
}

const getFacultiesByUniversity = async (universityId) => {
    return await Faculty.find({ universityId });
};

module.exports = { 
    createFaculty, 
    getAllFaculties, getFaculty,
    updateFaculty, deleteFaculty,
    getFacultiesByUniversity
}