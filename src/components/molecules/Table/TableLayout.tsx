import React from 'react';

export const TableLayout = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-14 lg:-mx-16">
      <div className="grid min-w-full gap-12 py-8 align-middle md:px-12 lg:px-16">
        {children}
      </div>
    </div>
  </div>
);
