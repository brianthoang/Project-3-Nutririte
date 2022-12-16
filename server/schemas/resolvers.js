const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe, ShoppingCart } = require('../models');
const { signToken } = require('../utils/auth');
// need to work on stripe integration
const stripe = require('stripe')('pk_live_51MFWNjKSUR1M48nBJuIYSPd1eZTRkYGt6TQ6CMUnLF2PiUAeGX44wozgAyfDFEUx8nH1t80VlJ497K9f5ICUbK93003itH1yGr');

// need help on this
const resolvers = {
    Query: {
        user: async (parent, pargs, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'savedRecipes',
                    populate: ''
            });

            user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

            return user;
        }

        throw new AuthenticationError('Not logged in');
    },
    ShoppingCart: async (parent, { _id }, context) => {
        if (context.user) {
            const shoppingCart = await ShoppingCart.findById(_id).populate({
                path: 'recipes',
                populate: ''
            });

            return shoppingCart;
        }

        throw new AuthenticationError('Not logged in');
    },
    checkout: async (parent, args, context) => {
        const url = new URL(context.headers.referer).origin;
        const order = new Order({ products: args.products });
        const line_items = [];

        const { Recipe } = await order.populate('recipes');

        for (let i = 0; i < recipes.length; i++) {
            const recipe = await stripe.recipes.create({
                name: recipe[i].name,
                description: recipe[i].description,
                images: [`${url}/images/${recipe[i].image}`],
            });

            const price = await stripe.prices.create({
                recipe: recipe.id,
                unit_amount: recipe[i].price * 100,
                currency: 'usd',
            });

            line_items.push({
                price: price.id,
                quantity: 1,
                });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url}/`,
            });

            return { session: session.id };
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        

    
