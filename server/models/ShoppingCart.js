const mongoose = require('mongoose');

const { Schema } = mongoose;

const shoppingCartSchema = new Schema({
    Product: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;