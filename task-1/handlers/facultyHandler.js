const express = require("express");

const { validate } = require("./../pkg/validator/validator");
const { facultyCreate, facultyUpdate } = require("./../pkg/faculties/validate");

const {
    createFaculty, 
    getAllFaculties, getFaculty,
    updateFaculty, deleteFaculty
} = require("./../pkg/faculties/faculty");


// Handlers
const createFax = async (req, res) => {
    try {
        await validate(req.body, facultyCreate);
        const newFax = await createFaculty(req.body);
        return res.status(200).send(newUni);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

const getAllFaxs = async (req, res) => {
    try {
        const getAll = await getAllFaculties();
        return res.status(200).send(getAll);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

const getFax = async (req, res) => {
    try {
        const getOne = await getFaculty(req.params.id);
        return res.status(200).send(getOne);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

const updateFax = async (req, res) => {
    try {
        await validate(req.body, facultyUpdate);
        const updateOne = await updateFaculty(req.params.id, req.body);
        return res.status(200).send(updateOne);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

const deleteFax = async (req, res) => {
    try {
        const deleteOne = await deleteFaculty(req.params.id);
        return res.status(200).send(deleteOne);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    createFax,
    getAllFaxs, getFax,
    updateFax, deleteFax
}