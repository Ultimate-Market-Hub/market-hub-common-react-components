import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import ImageHeaderProductGrid from './ImageHeaderProductGrid';
import LargeImagesFilterSidebar from './LargeImagesFilterSidebar';
import PaginatedGrid from './PaginatedGrid';
import TextHeaderSimpleGrid from './TextHeaderSimpleGrid';
import TextHeaderImageGrid from './TextHeaderImageGrid';

export default {
  title: 'Components/Store/Category',
  component: ImageHeaderProductGrid,
  argTypes: {},
} as Meta<typeof ImageHeaderProductGrid>;

const Template: StoryFn<typeof ImageHeaderProductGrid> = () => (
  <ImageHeaderProductGrid />
);

const Template2: StoryFn<typeof LargeImagesFilterSidebar> = () => (
  <LargeImagesFilterSidebar />
);
const Template3: StoryFn<typeof PaginatedGrid> = () => <PaginatedGrid />;
const Template4: StoryFn<typeof TextHeaderSimpleGrid> = () => (
  <TextHeaderSimpleGrid />
);
const Template5: StoryFn<typeof TextHeaderImageGrid> = () => (
  <TextHeaderImageGrid />
);

export const ImageHeaderProductGrids = Template.bind({});
export const PopOvers = Template2.bind({});
export const Single = Template3.bind({});
export const SlideOverEx = Template4.bind({});
export const TwoColumnWithQuantity = Template5.bind({});
