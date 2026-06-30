const { Validator } = require("node-input-validator");

const validate = async (data, schema) => {
    const validator = new Validator(data, schema);
    const error = await validator.check();
    
    if(!error) 
        throw {
            code: 400,
            error: "Client error"
        }
}

module.exports = { validate };