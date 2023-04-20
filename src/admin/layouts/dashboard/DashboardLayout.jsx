import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Nav } from './nav';

const Main = () => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
});

export const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Main>
        <Outlet></Outlet>
      </Main>
    </div>
  );
};
