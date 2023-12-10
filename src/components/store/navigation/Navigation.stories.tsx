import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import SimpleMenu from './SimpleMenu';
import CenterLogoFeaturedCategories from './CenterLogoFeaturedCategories';
import ImageGrid from './ImageGrid';
import FeaturedCategoriesHeader from './FeaturedCategoriesHeader';

export default {
  title: 'Components/Store/Navigations',
  component: SimpleMenu,
  argTypes: {},
} as Meta<typeof SimpleMenu>;

const Template: StoryFn<typeof SimpleMenu> = () => <SimpleMenu />;

const Template2: StoryFn<typeof CenterLogoFeaturedCategories> = () => (
  <CenterLogoFeaturedCategories />
);

const Template3: StoryFn<typeof ImageGrid> = () => <ImageGrid />;

const Template4: StoryFn<typeof FeaturedCategoriesHeader> = () => (
  <FeaturedCategoriesHeader />
);

export const Simple = Template.bind({});
export const FeaturedCategories = Template2.bind({});
export const Grid = Template3.bind({});
export const CategoriesHeader = Template4.bind({});
