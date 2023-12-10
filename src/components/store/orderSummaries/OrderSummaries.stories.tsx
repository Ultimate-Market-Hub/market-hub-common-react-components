import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import LargeImagesProgressBar from './LargeImagesProgressBar';
import ProgressBar from './ProgressBar';
import SimpleFullDetails from './SimpleFullDetails';
import SplitImage from './SplitImage';

export default {
  title: 'Components/Store/Order Summaries',
  component: LargeImagesProgressBar,
  argTypes: {},
} as Meta<typeof LargeImagesProgressBar>;

const Template: StoryFn<typeof ProgressBar> = () => <ProgressBar />;

const Template2: StoryFn<typeof SimpleFullDetails> = () => (
  <SimpleFullDetails />
);

const Template3: StoryFn<typeof SplitImage> = () => <SplitImage />;

const Template4: StoryFn<typeof LargeImagesProgressBar> = () => (
  <LargeImagesProgressBar />
);

export const Progress = Template.bind({});
export const Simple = Template2.bind({});
export const Split = Template3.bind({});
export const LargeImagesProgress = Template4.bind({});
