const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    category: {
        type: String,
        enum: ["Setting", "Advanced", "Rules"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Setting = mongoose.model("Setting", settingSchema);
module.exports = Setting;
