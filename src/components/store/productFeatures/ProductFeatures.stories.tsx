import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import ImageGrid from './ImageGrid';
import AlternateSections from './AlternateSections';
import FadingImage from './FadingImage';
import HeaderImageDescription from './HeaderImageDescription';
import SplitImage from './SplitImage';
import SquareImages from './SquareImages';
import TieredImages from './TieredImages';
import WideImages from './WideImages';
import WithTabs from './WithTabs';

export default {
  title: 'Components/Store/Product Features',
  component: ImageGrid,
  argTypes: {},
} as Meta<typeof ImageGrid>;

const Template: StoryFn<typeof ImageGrid> = () => <ImageGrid />;

const Template2: StoryFn<typeof AlternateSections> = () => (
  <AlternateSections />
);

const Template3: StoryFn<typeof FadingImage> = () => <FadingImage />;

const Template4: StoryFn<typeof HeaderImageDescription> = () => (
  <HeaderImageDescription />
);

const Template5: StoryFn<typeof SplitImage> = () => <SplitImage />;
const Template6: StoryFn<typeof SquareImages> = () => <SquareImages />;
const Template7: StoryFn<typeof TieredImages> = () => <TieredImages />;
const Template8: StoryFn<typeof WideImages> = () => <WideImages />;
const Template9: StoryFn<typeof WithTabs> = () => <WithTabs />;

export const Grid = Template.bind({});
export const Alternate = Template2.bind({});
export const Fading = Template3.bind({});
export const ImageDescription = Template4.bind({});
export const Split = Template5.bind({});
export const Square = Template6.bind({});
export const Tiered = Template7.bind({});
export const Wide = Template8.bind({});
export const Tabs = Template9.bind({});
