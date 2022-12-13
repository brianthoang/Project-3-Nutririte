import React from 'react';
import { useQuery } from '@apollo/client';

import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <UserForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UserList
              users={users}
              title="Tell me about yourself"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

