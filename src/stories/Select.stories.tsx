import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components';

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Select {...args} />,
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
    ],
    defaultValue: '2',
    size: 'small',
  },
};
