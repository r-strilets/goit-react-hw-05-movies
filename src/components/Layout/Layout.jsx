import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <header>
        <Suspense>
          <Navigation />
        </Suspense>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
