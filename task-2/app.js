const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

const connect = require("./pkg/db/db");
connect();

const { getSection } = require("./pkg/config/index");

const { Register, Login } = require("./handlers/authHandler");

//const { createAca, getAllAcas, getAca, updateAca, deleteAca } = require("./handlers/academyHandler");
const { createCou, getAllCous, getCou, getCousByAca, updateCou, deleteCou } = require("./handlers/courseHandler");

const app = express();
app.use(express.json());

app.use(
    jwt({
        secret: getSection("jwt_secret"),
        algorithms: ["HS256"],
    }).unless({
        path: ["/auth/register", "/auth/login"],
    }),
);

// Auth
app.post("/auth/register", Register);
app.post("/auth/login", Login);


// Course
app.post("/courses", createCou);
app.get("/courses", getAllCous);
app.get("/courses/:id", getCou);
app.get("/academies/:academyId/courses", getCousByAca); // all courses for one academy
app.put("/courses/:id", updateCou);
app.delete("/courses/:id", deleteCou);

app.listen(getSection("port"), () =>
    console.log(`Server opened at port ${getSection("port")}`),
);