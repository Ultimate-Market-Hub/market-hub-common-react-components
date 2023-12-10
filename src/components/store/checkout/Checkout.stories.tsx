import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import MobileOrderSummaryOverlay from './MobileOrderSummaryOverlay';
import MultiStep from './MultiStep';
import SingleStepSidebar from './SingleStepSidebar';
import SplitWithOrderSummary from './SplitWithOrderSummary';
import SummarySidebar from './SummarySidebar';

export default {
  title: 'Components/Store/Checkout',
  component: MobileOrderSummaryOverlay,
  argTypes: {},
} as Meta<typeof MobileOrderSummaryOverlay>;

const Template: StoryFn<typeof MobileOrderSummaryOverlay> = () => (
  <MobileOrderSummaryOverlay />
);

const Template2: StoryFn<typeof MultiStep> = () => <MultiStep />;

const Template3: StoryFn<typeof SingleStepSidebar> = () => (
  <SingleStepSidebar />
);

const Template4: StoryFn<typeof SplitWithOrderSummary> = () => (
  <SplitWithOrderSummary />
);

const Template5: StoryFn<typeof SummarySidebar> = () => <SummarySidebar />;

export const MobileOrder = Template.bind({});
export const MultiStepEx = Template2.bind({});
export const SingleStep = Template3.bind({});
export const SplitWithSummary = Template4.bind({});
export const SummarySidebarEx = Template5.bind({});
