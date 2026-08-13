import type {Meta, StoryObj} from '@storybook/react-vite';
import {ToastProvider, useToastContext} from './toaster';
import React from 'react';

const meta = {
  title: 'Data-Display/Toaster',
  component: ToastProvider,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ToastProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

function ToastDemo() {
  const {queueToast, closeToast} = useToastContext();

  return (
    <div style={{padding: '2rem', display: 'flex', gap: '1rem'}}>
      <button
        type="button"
        onClick={() => queueToast('Default toast')}
      >
        Default
      </button>

      <button
        type="button"
        onClick={() => queueToast('Information toast', {
          variant: 'info',
        })}
      >
        Info
      </button>

      <button
        type="button"
        onClick={() => queueToast('Success toast', {
          variant: 'success',
        })}
      >
        Success
      </button>

      <button
        type="button"
        onClick={() => queueToast('Warning toast', {
          variant: 'warning',
          dismissible: true,
        })}
      >
        Warning
      </button>

      <button
        type="button"
        onClick={() => queueToast('Error toast', {
          variant: 'error',
          dismissible: true,
        })}
      >
        Error
      </button>

      <button
        type="button"
        onClick={() => closeToast()}
      >
        Close all
      </button>
    </div>
  );
}

export const Default: Story = {
  args: {
    children: <ToastDemo />,
  },
  render: args => (
    <ToastProvider {...args}>
      <ToastDemo />
    </ToastProvider>
  ),
};

export const Limited: Story = {
  args: {
    limit: 2,
    children: <ToastDemo />,
  },
  render: args => (
    <ToastProvider {...args}>
      <ToastDemo />
    </ToastProvider>
  ),
};

export const TopRight: Story = {
  args: {
    alignment: {
      horizontal: 'right',
      vertical: 'top',
    },
    children: <ToastDemo />,
  },
  render: args => (
    <ToastProvider {...args}>
      <ToastDemo />
    </ToastProvider>
  ),
};

export const Persistent: Story = {
  args: {
    timeout: 'persistent',
    limit: 5,
    dismissible: true,
    children: <ToastDemo />,
  },
  render: args => (
    <ToastProvider {...args}>
      <ToastDemo />
    </ToastProvider>
  ),
};