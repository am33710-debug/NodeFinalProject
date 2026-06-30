const express = require("express");

const { validate } = require("./../pkg/validator/validator");
const { univeristyCreate, univeristyUpdate } = require("../pkg/universities/validate");

const {
    createUniversity,
    getAllUniverisites, getUniveristy,
    updateUniversity, deleteUniversity
} = require("./../pkg/universities/university");


// Handlers
const createUni = async (req, res) => {
    try {
        await validate(req.body, univeristyCreate);
        const newUni = await createUniversity(req.body);
        return res.status(200).send(newUni);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

const getAllUnis = async (req, res) => {
    try {
        const getAll = await getAllUniverisites();
        return res.status(200).send(getAll);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

const getUni = async (req, res) => {
    try {
        const getOne = await getUniveristy(req.params.id);
        return res.status(200).send(getOne);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

const updateUni = async (req, res) => {
    try {
        await validate(req.body, univeristyUpdate);
        const updateOne = await updateUniversity(req.params.id, req.body);
        return res.status(200).send(updateOne);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

const deleteUni = async (req, res) => {
    try {
        const deleteOne = await deleteUniversity(req.params.id);
        return res.status(200).send(deleteOne);
    } catch (error) {
        console.log("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    createUni,
    getAllUnis, getUni,
    updateUni, deleteUni
};