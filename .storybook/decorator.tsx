import { MemoryRouter, Route, Routes } from 'react-router-dom';
import type { Decorator } from '@storybook/react';

export const reactRouterDecorator: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};
