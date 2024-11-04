import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages';
import { RegistrationPage } from './pages';
import { DepartmentsPage } from './pages';

import { AdministrationPage } from './pages';
import { NoPermissionsPage } from './pages';

import { RoutesPaths } from './constants/commonConstants';

import './styles/globalStyles.scss';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutesPaths.Login} element={<LoginPage />} />
      <Route path={RoutesPaths.Registration} element={<RegistrationPage />} />
      <Route path={RoutesPaths.Departments} element={<DepartmentsPage />} />
      <Route path={RoutesPaths.Administration} element={<AdministrationPage />} />
      <Route path={RoutesPaths.NoPermissions} element={<NoPermissionsPage />} />
      <Route path={'*'} element={<LoginPage />} />
    </Routes>
  );
};
