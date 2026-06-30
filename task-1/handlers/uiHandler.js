const express = require("express");

const { getAllUniversities } = require("../pkg/universities/university");

const { getFacultiesByUniversity, getAllFaculties } = require("../pkg/faculties/faculty");


const indexPage = async (req, res) => {
    const universities = await getAllUniversities();
    const selectedUniId = req.query.universityId || null;

    // if a university is selected in the filter, show only its faculties, otherwise show all
    const faculties = selectedUniId
        ? await getFacultiesByUniversity(selectedUniId)
        : await getAllFaculties();

    return res.render("index", { universities, faculties, selectedUniId });
};

module.exports = { indexPage };