// Built-in modules
const express = require("express");

// DB connection
const connect = require("./pkg/db/db");
connect();

// Configuration
const { getSection } = require("./pkg/config/index");

// App setup (for JSON and EJS compatibility, as well as dynamic parameters in URL)
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


// University Handlers
const {
    createUni,
    getAllUnis, getUni,
    updateUni, deleteUni
} = require("./handlers/universityHandler");

// Faculty Handlers
const {
    createFax,
    getAllFaxs, getFax,
    updateFax, deleteFax
} = require("./handlers/facultyHandler");

// Index Page Handler
const { indexPage } = require("./handlers/uiHandler");


// HTTP Requests (METHODS) - University
app.post("/universities", createUni);
app.get("/universities", getAllUnis);
app.get("/universities/:id", getUni);
app.put("/universities/:id", updateUni);
app.delete("/universities/:id", deleteUni);

// HTTP Requests (METHODS) - Faculty
app.get("/", indexPage); // in the Index Page we can see all faculties and a single one from there
app.post("/faculties/create", createFax);
app.put("/faculties/:id", updateFax);
app.delete("faculties/:id", deleteFax);


// Server Start
app.listen(getSection("port"), () => 
    console.log(`Server opened at port ${getSection("port")}`),
);