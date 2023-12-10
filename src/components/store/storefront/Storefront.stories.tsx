import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import ImageTilesFeatureSections from './ImageTilesFeatureSections';
import OverlappingImagesPlusPerks from './OverlappingImagesPlusPerks';
import OffersAndTestimonials from './OffersAndTestimonials';
import DarkNavAndFooter from './DarkNavAndFooter';
import { reactRouterDecorator } from '../../../../.storybook/decorator';

export default {
  title: 'Components/Store/Store front',
  component: ImageTilesFeatureSections,
  decorators: [reactRouterDecorator],
  argTypes: {},
} as Meta<typeof ImageTilesFeatureSections>;

const Template: StoryFn<typeof ImageTilesFeatureSections> = () => (
  <ImageTilesFeatureSections />
);

const Template2: StoryFn<typeof OverlappingImagesPlusPerks> = () => (
  <OverlappingImagesPlusPerks />
);

const Template3: StoryFn<typeof OffersAndTestimonials> = () => (
  <OffersAndTestimonials />
);

const Template4: StoryFn<typeof DarkNavAndFooter> = () => <DarkNavAndFooter />;

export const ImageTiles = Template.bind({});
export const Overlapping = Template2.bind({});
export const Offers = Template3.bind({});
export const Dark = Template4.bind({});
