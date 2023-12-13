import React, { type PropsWithChildren } from 'react';
type TCardProps = PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const Card: React.ForwardRefExoticComponent<Omit<TCardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
