import type {Meta, StoryObj} from '@storybook/react-vite';
import {DatePicker} from './datePicker';
import React from "react";

const meta = {
  title: 'Inputs/DatePicker',
  component: DatePicker,
  argTypes: {
    dark: {control: 'boolean'},
    disabled: {control: 'boolean'},
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select date',
    value: null,
    locale: 'de-DE',
    onChange: () => {}
  },
  render: (args) => {
    const [value, setValue] = React.useState<Date | null>(args.value);

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  parameters: {
    controls: {exclude: ['dark', 'value', 'dateFormat', 'onChange', 'disabled', 'weekStart']}
  },
};

export const MinDate: Story = {
  args: {
    placeholder: 'Select date',
    value: null,
    min: new Date('2026-04-07'),
    locale: 'de-DE',
    onChange: () => {}
  },
  render: (args) => {
    const [value, setValue] = React.useState<Date | null>(args.value);

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  parameters: {
    controls: {exclude: ['dark', 'value', 'dateFormat', 'onChange', 'disabled', 'weekStart']}
  },
};

export const MaxDate: Story = {
  args: {
    placeholder: 'Select date',
    value: null,
    max: new Date('2026-04-25'),
    locale: 'de-DE',
    onChange: () => {}
  },
  render: (args) => {
    const [value, setValue] = React.useState<Date | null>(args.value);

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  parameters: {
    controls: {exclude: ['dark', 'value', 'dateFormat', 'onChange', 'disabled', 'weekStart']}
  },
};

export const MinAndMaxDate: Story = {
  args: {
    placeholder: 'Select date',
    value: null,
    min: new Date('2026-04-07'),
    max: new Date('2026-04-28'),
    locale: 'de-DE',
    onChange: () => {}
  },
  render: (args) => {
    const [value, setValue] = React.useState<Date | null>(args.value);

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  parameters: {
    controls: {exclude: ['dark', 'value', 'dateFormat', 'onChange', 'disabled', 'weekStart']}
  },
};

export const CustomDateFormat: Story = {
  args: {
    placeholder: 'Select date',
    value: null,
    min: new Date('2026-04-07'),
    max: new Date('2026-04-28'),
    locale: 'de-DE',
    dateFormat: {year: '2-digit', month: 'long', day: 'numeric'},
    onChange: () => {}
  },
  render: (args) => {
    const [value, setValue] = React.useState<Date | null>(args.value);

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  parameters: {
    controls: {exclude: ['dark', 'value', 'dateFormat', 'onChange', 'disabled', 'weekStart']}
  },
};

export const ActiveView: Story = {
  args: {
    placeholder: 'Select date',
    activeView: new Date('2020-01-01'),
    value: null,
    locale: 'de-DE',
    onChange: () => {}
  },
  render: (args) => {
    const [value, setValue] = React.useState<Date | null>(args.value);

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  parameters: {
    controls: {exclude: ['dark', 'value', 'dateFormat', 'onChange', 'disabled', 'weekStart']}
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Select date',
    value: null,
    min: new Date('2026-04-07'),
    max: new Date('2026-04-28'),
    locale: 'de-DE',
    disabled: true,
    onChange: () => {}
  },
  render: (args) => {
    const [value, setValue] = React.useState<Date | null>(args.value);

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  parameters: {
    controls: {exclude: ['dark', 'value', 'dateFormat', 'onChange', 'disabled', 'weekStart']}
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'Select date',
    value: null,
    min: new Date('2026-03-30'),
    max: new Date(),
    onChange: () => {},
    dark: true,
    locale: 'de-DE',
  },
  render: (args) => {
    const [value, setValue] = React.useState<Date | null>(null);

    return (
      <DatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  globals: {
    backgrounds: {value: 'dark'}
  },
  parameters: {
    controls: {exclude: ['dark', 'value', 'dateFormat', 'onChange', 'weekStart']}
  },
};