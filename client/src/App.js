import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';

import { Login } from "./components/Login.js";
import { Register } from "./components/Register.js";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
  });
  

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
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
 const [currentForm, setCurrentForm] = useState('login');

   const toggleForm = (forName) => {
            setCurrentForm(forName);
        }
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
                <Route 
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
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
  
  export default App;
  

//     return (
        // <div className="App">
        //     {
        //         currentForm === "login" ?  <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/> 
        //     } 
        // </div>
//     );