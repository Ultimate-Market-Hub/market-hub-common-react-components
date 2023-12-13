import type { Decorator } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { SlideOverProvider } from '../src/context/SlideOverContext';

export const reactRouterDecorator: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

export const withSlideOverProvider: Decorator = (Story) => (
  <SlideOverProvider>
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  </SlideOverProvider>
);
