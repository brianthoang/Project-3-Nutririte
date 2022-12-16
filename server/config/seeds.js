const db = require('./connection');
const { User, Recipe, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Mediterranean' },
        { name: 'Latin' },
        { name: 'Asian' },
        { name: 'Tex-Mex' },
        { name: 'European' },
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const recipes = await Recipe.insertMany([
        {
            name: 'apple',
            description:
                'apple',
            image: '',
            category: categories[0]._id,
            price: 1.00,
            quantity: 1000
        },
        {
            name: 'orange',
            description:
                'orange',
            image: '',
            category: categories[0]._id,
            price: 1.00,
            quantity: 1000
        },
        {
            name: 'peach',
            description:
                'peach',
            image: '',
            category: categories[0]._id,
            price: 1.00,
            quantity: 1000
        }
    ]);


    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Salman',
        lastName: 'Danesh',
        email: 'SalmanDanesh@testemail.com',
        password: 'password1234',
        orders: [
            {
                recipes: [recipes[0]._id, recipes[0]._id, recipes[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Kevin',
        lastName: 'NG',
        email: 'Kevinng@testemail.com',
        password: 'password4321'
    });

    console.log('users seeded');

    process.exit();

})

    
