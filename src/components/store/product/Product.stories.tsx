import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import ImageGrid from './ImageGrid';
import FeaturedDetails from './FeaturedDetails';
import TabsAndRelatedProducts from './TabsAndRelatedProducts';
import RelatedProducts from './RelatedProducts';
import ExpandableDetails from './ExpandableDetails';

export default {
  title: 'Components/Store/Product',
  component: ImageGrid,
  argTypes: {},
} as Meta<typeof ImageGrid>;

const Template: StoryFn<typeof FeaturedDetails> = () => <FeaturedDetails />;

const Template2: StoryFn<typeof RelatedProducts> = () => <RelatedProducts />;

const Template3: StoryFn<typeof TabsAndRelatedProducts> = () => (
  <TabsAndRelatedProducts />
);

const Template4: StoryFn<typeof ImageGrid> = () => <ImageGrid />;

const Template5: StoryFn<typeof ExpandableDetails> = () => (
  <ExpandableDetails />
);

export const Progress = Template.bind({});
export const Simple = Template2.bind({});
export const Split = Template3.bind({});
export const LargeImagesProgress = Template4.bind({});
export const Expandable = Template5.bind({});
