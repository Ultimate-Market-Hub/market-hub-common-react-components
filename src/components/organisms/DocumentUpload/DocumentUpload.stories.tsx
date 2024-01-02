import { type Meta, type StoryObj } from '@storybook/react';
import { DocumentUpload } from './DocumentUpload';
import { action } from '@storybook/addon-actions';

const meta = {
  component: DocumentUpload,
  args: {
    onFileUpload: action('onFileUpload'),
    isLoading: false,
    isUploaded: false,
    isError: false,
    maxFileSizeMB: 999,
    allowedFileTypes: [],
  },
} satisfies Meta<typeof DocumentUpload>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground = {} satisfies Story;
