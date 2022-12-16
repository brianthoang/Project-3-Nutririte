const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }

    type Recipe {
        _id: ID
        name: String
        description: String
        image: String
        category: Category
        quantity: Int
        price: Float
    }   

    type ShoppingCart {
        _id: ID
        recipes: [Recipe]
        purchaseDate: String
    }

    type User {
        _id: ID
        Name: String
        email: String
        password: String
        shoppingCart: [ShoppingCart]
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        categories: [Category]
        recipes(category: ID, name: String): [Recipe]
        recipe(_id: ID!): Recipe
        user: User
        shoppingCart(_id: ID!): ShoppingCart
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
      }
    `;

module.exports = typeDefs;
