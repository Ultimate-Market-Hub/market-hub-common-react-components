import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import ColourAndSize from './ColourAndSize';
import ColourSelectorAndDescription from './ColourSelectorAndDescription';
import ColourSizeAndDetails from './ColourSizeAndDetails';
import LargeSizeSelector from './LargeSizeSelector';

export default {
  title: 'Components/Store/Product Quick Overviews',
  component: ColourAndSize,
  argTypes: {},
} as Meta<typeof ColourAndSize>;

const Template: StoryFn<typeof ColourAndSize> = () => <ColourAndSize />;

const Template2: StoryFn<typeof ColourSelectorAndDescription> = () => (
  <ColourSelectorAndDescription />
);

const Template3: StoryFn<typeof ColourSizeAndDetails> = () => (
  <ColourSizeAndDetails />
);

const Template4: StoryFn<typeof LargeSizeSelector> = () => (
  <LargeSizeSelector />
);

export const ColorSize = Template.bind({});
export const SelectorAndDescription = Template2.bind({});
export const SizeAndDetails = Template3.bind({});
export const SizeSelectorLarge = Template4.bind({});
