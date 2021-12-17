import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './router/Home';
import { NavRoutes } from './utils/constants';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={NavRoutes.HOME} element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
