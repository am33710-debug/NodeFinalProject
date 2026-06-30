const { Validator } = require("node-input-validator");

// POST, PUT will be validated
// Validation is required in order to avoid constant calls to DBs

// Structure:
// data -> request.body, schema -> accountSchema

const accountRegister = { // POST
    username: "required|string",
    email: "required|email",
    password: "required|string",
    confirmPassword: "required|string",
};

const accountLogin = {
    email: "required|email",
    password: "required|string",
}

const accountUpdate = { // PUT - no required here, because we can change anything (flexibility)
    username: "string",
    email: "email",
    password: "string",
}; // if 1 field has required, the program will force you to change that when changing other properties


// Main function - validation
const validateAccount = async (data, schema) => {
    const validator = new Validator(data, schema);
    const error = await validator.check(); // returns boolean if/if not an error exists

    console.log("Error:", error);

    if(!error) throw {
        code: 400,
        error: "Client error",
    };
}

module.exports = { accountRegister, accountLogin, accountUpdate, validateAccount };