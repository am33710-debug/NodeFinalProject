const univeristyCreate = {
    name: "required|string",
    address: "required|string"
};

const univeristyUpdate = {
    name: "string",
    address: "string"
}

module.exports = { univeristyCreate, univeristyUpdate };