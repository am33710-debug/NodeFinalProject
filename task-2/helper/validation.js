const { Validator } = require("node-input-validator");

const validateAccount = async (data, schema) => {
    const validator = new Validator(data, schema);
    const error = await validator.check(); // returns boolean if/if not an error exists

    console.log("Error:", error);

    if(!error) throw {
        code: 400,
        error: "Client error",
    };
};

module.exports = { validateAccount };