const { createCourse, updateCourse, deleteCourse, 
    getAllCourses, getCourseById, getCoursesByAcademy } = require("../pkg/course/course");

const createCou = async (req, res) => {
    try {
        const { name, description, academyId } = req.body;
        const course = await createCourse({ name, description, academyId });
        return res.status(201).send(course);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const getAllCous = async (req, res) => {
    try {
        const courses = await getAllCourses();
        return res.status(200).send(courses);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const getCou = async (req, res) => {
    try {
        const course = await getCourseById(req.params.id);
        if (!course) return res.status(404).send("Course not found");
        return res.status(200).send(course);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const getCousByAca = async (req, res) => {
    try {
        const courses = await getCoursesByAcademy(req.params.academyId);
        return res.status(200).send(courses);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const updateCou = async (req, res) => {
    try {
        const updated = await updateCourse(req.params.id, req.body);
        if (updated.matchedCount === 0) return res.status(404).send("Course not found");
        return res.status(200).send("Course updated");
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const deleteCou = async (req, res) => {
    try {
        const deleted = await deleteCourse(req.params.id);
        if (deleted.deletedCount === 0) return res.status(404).send("Course not found");
        return res.status(200).send("Course deleted");
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = { createCou, getAllCous, getCou, getCousByAca, updateCou, deleteCou };