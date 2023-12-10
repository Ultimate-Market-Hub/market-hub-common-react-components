import { type Meta, type StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import { expect, fn, userEvent, within } from '@storybook/test';

const meta = {
  component: TextField,
  title: 'Components/Atoms/TextField',
  args: {
    id: 'input-id',
    onChange: fn(),
  },
} satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox')).toHaveAttribute('id', 'input-id');
    await userEvent.type(canvas.getByRole('textbox'), 'hello world');
    await expect(args.onChange).toHaveBeenCalled();
  },
} satisfies Story;

export const WithTestId = {
  //@ts-ignore
  args: { 'data-testid': 'this is a testId' },
} satisfies Story;

export const WithHint = {
  args: { hint: 'this is a hint' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole('note')).toHaveTextContent('this is a hint');
  },
} satisfies Story;

export const WithLabel = {
  args: { label: 'this is a label' },
} satisfies Story;

export const WithRequired = {
  args: {
    ...WithLabel.args,
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByLabelText(/this is a label/);
    await expect(label).toBeRequired();
  },
} satisfies Story;

export const WithError = {
  args: {
    error: 'this is an error',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole('alert')).toHaveTextContent(
      'this is an error'
    );

    await step('hint is not shown', async () => {
      await expect(canvas.queryByRole('note')).not.toBeInTheDocument();
    });
  },
} satisfies Story;

export const WithLoading = {
  args: {
    isLoading: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByRole('textbox')).toHaveAttribute('readOnly');
  },
} satisfies Story;
