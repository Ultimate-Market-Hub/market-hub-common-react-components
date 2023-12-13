/// <reference types="react" />
export interface FeaturedSectionProps {
    withImage: boolean;
    withBranding: boolean;
    heading: string;
    description: string;
    buttonLabel: string;
    buttonRoute: string;
}
export declare const FeaturedSection: ({ withImage, withBranding, heading, description, buttonLabel, buttonRoute, }: FeaturedSectionProps) => import("react").JSX.Element;
