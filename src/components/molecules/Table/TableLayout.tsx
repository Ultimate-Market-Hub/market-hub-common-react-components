import React from 'react';

export const TableLayout = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col">
    <div className="grid min-w-full gap-4 py-4 align-middle md:px-4 lg:px-6">
      {children}
    </div>
  </div>
);
