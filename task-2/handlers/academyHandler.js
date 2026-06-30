const { createAcademy, updateAcademy, deleteAcademy, 
    getAllAcademies, getAcademyById } = require("../pkg/academy/academy");

const createAca = async (req, res) => {
    try {
        const { name, address } = req.body;
        const academy = await createAcademy({ name, address });
        return res.status(201).send(academy);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const getAllAcas = async (req, res) => {
    try {
        const academies = await getAllAcademies();
        return res.status(200).send(academies);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const getAca = async (req, res) => {
    try {
        const academy = await getAcademyById(req.params.id);
        if (!academy) return res.status(404).send("Academy not found");
        return res.status(200).send(academy);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const updateAca = async (req, res) => {
    try {
        const updated = await updateAcademy(req.params.id, req.body);
        if (updated.matchedCount === 0) return res.status(404).send("Academy not found");
        return res.status(200).send("Academy updated");
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

const deleteAca = async (req, res) => {
    try {
        const deleted = await deleteAcademy(req.params.id);
        if (deleted.deletedCount === 0) return res.status(404).send("Academy not found");
        return res.status(200).send("Academy deleted");
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
};

module.exports = { createAca, getAllAcas, getAca, updateAca, deleteAca };