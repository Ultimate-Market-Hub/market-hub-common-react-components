import React, { type PropsWithChildren } from 'react';
import classnames from 'classnames';

type TCardProps = PropsWithChildren<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

export const Card = React.forwardRef<HTMLDivElement, TCardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classnames(
          'box-border flex w-full flex-grow flex-col rounded-4 bg-primary-white shadow-md',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
