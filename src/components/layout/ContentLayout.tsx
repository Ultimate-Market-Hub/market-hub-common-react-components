import { Outlet } from 'react-router-dom';

export const ContentLayout = () => (
  <section className="h-full w-full min-w-0 flex-1 bg-white">
    <Outlet />
  </section>
);
