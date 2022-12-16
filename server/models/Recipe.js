const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Description: {
        type: String,
    },
    Images: {
        type: String,
    },
    Nutrients: {
        type: String,
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
