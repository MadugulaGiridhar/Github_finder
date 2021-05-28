import React, { Fragment } from 'react';
import User from '../users/Users';
import Search from '../users/Search';

export const Home = () => {
  return (
    <Fragment>
      <Search />
      <User />
    </Fragment>
  );
};

export default Home;
