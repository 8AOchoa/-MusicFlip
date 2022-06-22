const mongoose = require("mongoose");

const SongsSchema = {
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [3, "Name must be at least 3 characters"],
    },
    type: {
        type: String,
        required: [true, "type is required"],
        minLength: [3, "Type must be at least 3 characters"],
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minLength: [3, "Type must be at least 3 characters"],
    },
    // skill1: {
    //     type: String,
    //     required: [true, "type is required"],
    //     minLength: [3, "Type must be at least 3 characters"],
    // },
    // skill2: {
    //     type: String,
    //     required: [true, "type is required"],
    //     minLength: [3, "Type must be at least 3 characters"],
    // },
    // skill3: {
    //     type: String,
    //     required: [true, "type is required"],
    //     minLength: [3, "Type must be at least 3 characters"],
    // },
};

module.exports = mongoose.model("Song", SongsSchema);