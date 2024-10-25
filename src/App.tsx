import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages';
import { RegistrationPage } from './pages';
import { DepartmentsPage } from './pages';

import { RoutesPaths } from './constants/commonConstants';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesPaths.Login} element={<LoginPage />} />
      <Route path={RoutesPaths.Registration} element={<RegistrationPage />} />
      <Route path={RoutesPaths.Departments} element={<DepartmentsPage />} />
      <Route path={'*'} element={<LoginPage />} />
    </Routes>
  );
};
