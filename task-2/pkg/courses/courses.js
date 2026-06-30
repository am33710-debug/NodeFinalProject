const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    academyId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Academy",
        required: true,
    },
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema, "courses");

const createCourse = async (data) => {
    const newCourse = new Course(data);
    return await newCourse.save();
};

const updateCourse = async (_id, data) => {
    return await Course.updateOne({ _id }, data);
};

const deleteCourse = async (_id) => {
    return await Course.deleteOne({ _id });
};

const getAllCourses = async () => {
    return await Course.find().populate("academyId");
};

const getCourseById = async (_id) => {
    return await Course.findOne({ _id }).populate("academyId");
};

const getCoursesByAcademy = async (academyId) => {
    return await Course.find({ academyId });
};

module.exports = { createCourse, updateCourse, deleteCourse, getAllCourses, getCourseById, getCoursesByAcademy };