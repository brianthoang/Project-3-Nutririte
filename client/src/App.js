import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home.js";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";
// import Profile from "./pages/Profile.js";
// import Mealprep from "./pages/Mealprep.js";
// import Recipes from "./pages/Recipes.js";
// import Signup from "./pages/Signup.js";
import Login from "./components/Login/index.js";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',

});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Routes>
                <Route 
                  path="/"
                  element={<Home />}
                />
                <Route 
                  path="/login"
                  element={<Login />}
                />
                {/* <Route 
                  path="/signup"
                  element={<Signup />}
                />
                <Route 
                  path="/profile"
                  element={<Profile />}
                />
                <Route 
                  path="/mealprep"
                  element={<Mealprep/>}
                />
                <Route 
                  path="/recipes"
                  element={<Recipes />}
                /> */}
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }

  export default App;