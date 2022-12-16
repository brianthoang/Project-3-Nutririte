const db = require('./connection');
const { User, Recipe } = require('../models');

db.once('open', async () => {
    await Recipe.deletemany({});

    const recipes = await Recipe.insertMany([
        {
            name: '',
            description: '',
            image: '',
            nutrition: ''
        }
    ]);

    console.log('recipes seeded');

    await User.deletemany({});

    await User.create({
        Name: '',
        Email: '',
        Password: '',
        Recipes: [
            {
                products: [ ],
            }
        ]
    });

    console.log('users seeded');

    process.exit();
});
