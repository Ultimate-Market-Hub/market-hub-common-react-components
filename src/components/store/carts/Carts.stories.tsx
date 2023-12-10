import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Modal from './Modal';
import PopOver from './PopOver';
import SingleColumn from './SingleColumn';
import SlideOver from './SlideOver';
import TwoColumnWithQuantityDropdown from './TwoColumnWithQuantityDropdown';
import WithExtendedSummary from './WithExtendedSummary';

export default {
  title: 'Components/Store/Carts',
  component: Modal,
  argTypes: {},
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = () => <Modal />;

const Template2: StoryFn<typeof PopOver> = () => <PopOver />;
const Template3: StoryFn<typeof SingleColumn> = () => <SingleColumn />;
const Template4: StoryFn<typeof SlideOver> = () => <SlideOver />;
const Template5: StoryFn<typeof TwoColumnWithQuantityDropdown> = () => (
  <TwoColumnWithQuantityDropdown />
);
const Template6: StoryFn<typeof WithExtendedSummary> = () => (
  <WithExtendedSummary />
);

export const Modals = Template.bind({});
export const PopOvers = Template2.bind({});
export const Single = Template3.bind({});
export const SlideOverEx = Template4.bind({});
export const TwoColumnWithQuantity = Template5.bind({});
export const WithExtended = Template6.bind({});
