import type { ReactNode } from 'react';

type CardLoaderProps = {
  className?: string;
  children?: ReactNode;
};

export const CardLoader: React.FC<CardLoaderProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={`grow animate-pulse rounded-4 bg-primary-light-grey ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
};
