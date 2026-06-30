const facultyCreate = {
    name: "required|string",
    address: "required|string"
};

const facultyUpdate = {
   name: "string",
   address: "string" 
};

module.exports = { facultyCreate, facultyUpdate };