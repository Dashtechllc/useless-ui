import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';

const meta = {
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'gradient '],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Button {...args}>Холбогдох</Button>,
  args: {
    type: 'gradient',
    size: 'medium',
  },
};
