import {fireEvent, render} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
import {describe, expect, test, vi} from 'vitest';
import React from 'react';
import {Tag} from './tag';

describe('tag', () => {
  test('should render filled tag', () => {
    const {container} = render(<Tag color={'info'} variant={'filled'} label={'test'}/>);
    const tag = container.getElementsByClassName('tag filled')[0];
    
    expect(tag).toBeDefined();
  });

  test('should render outlined tag', () => {
    const {container} = render(<Tag color={'info'} variant={'outlined'} label={'test'}/>);
    const tag = container.getElementsByClassName('tag outlined')[0];

    expect(tag).toBeDefined();
  });

  test('should render dark mode tag', () => {
    const {container} = render(<Tag color={'info'} variant={'filled'} dark label={'test'}/>);
    const tag = container.getElementsByClassName('tag dark')[0];

    expect(tag).toBeDefined();
  });

  test('should render tag with children', () => {
    const {container} = render(<Tag color={'info'} variant={'filled'}>Testing</Tag>);
    const tag = container.getElementsByClassName('tag filled')[0];

    expect(tag.textContent).toEqual('Testing');
  });

  test('should render custom filled tag', () => {
    const {container} = render(<Tag color={'#19bfa9'} variant={'filled'} label={'test'}/>);
    const tag = container.getElementsByClassName('tag')[0] as HTMLDivElement;

    // result returns rgb so the provided hex has to be converted to compare
    const rgb = `rgb(${parseInt('19', 16)}, ${parseInt('bf', 16)}, ${parseInt('a9', 16)})`;

    expect(tag.style.backgroundColor).toEqual(rgb);
    expect(tag.style.color).toEqual('rgb(0, 0, 0)');
  });

  test('should render custom outlined tag', () => {
    const {container} = render(<Tag color={'#0f2ba1'} variant={'outlined'} label={'test'}/>);
    const tag = container.getElementsByClassName('tag')[0] as HTMLDivElement;

    // result returns rgb so the provided hex has to be converted to compare
    const rgb = `rgb(${parseInt('0f', 16)}, ${parseInt('2b', 16)}, ${parseInt('a1', 16)})`;

    expect(tag.style.borderColor).toEqual(rgb);
    expect(tag.style.color).toEqual(rgb);
  });

  test('should render onDelete tag', () => {
    const fn = vi.fn();
    
    const {container} = render(<Tag color={'#4f90d3'} variant={'outlined'} label={'test'} onDelete={() => {fn()}}/>);
    const delIcon = container.getElementsByClassName('delIcon')[0];

    expect(delIcon).toBeDefined();
    expect((delIcon as SVGSVGElement).attributes.getNamedItem('fill')?.value).toEqual('#4f90d3');
    
    fireEvent.click(delIcon);
    expect(fn).toHaveBeenCalled();
  });

  test('should render onDelete tag with status color', () => {
    const fn = vi.fn();

    const {container} = render(<Tag color={'warning'} variant={'outlined'} label={'test'} onDelete={() => {fn()}}/>);
    const delIcon = container.getElementsByClassName('delIcon')[0];

    expect((delIcon as SVGSVGElement).attributes.getNamedItem('fill')?.value).not.toBeDefined();
  });

  test('should render onDelete tag with white icon', () => {
    const fn = vi.fn();

    const {container} = render(<Tag color={'info'} variant={'filled'} label={'test'} onDelete={() => {fn()}}/>);
    const delIcon = container.getElementsByClassName('delIcon')[0];

    expect((delIcon as SVGSVGElement).attributes.getNamedItem('fill')?.value).toEqual('white');
  });

  test('should render onDelete warning tag', () => {
    const fn = vi.fn();

    const {container} = render(<Tag color={'warning'} variant={'filled'} label={'test'} onDelete={() => {fn()}}/>);
    const delIcon = container.getElementsByClassName('delIcon')[0];

    expect((delIcon as SVGSVGElement).attributes.getNamedItem('fill')?.value).toEqual('black');
  });

  test('should render onDelete tag with custom color', () => {
    const fn = vi.fn();
    
    const {container} = render(<Tag color={'#0f2ba1'} variant={'filled'} label={'test'} onDelete={() => {fn()}}/>);
    const delIcon = container.getElementsByClassName('delIcon')[0];

    expect((delIcon as SVGSVGElement).attributes.getNamedItem('fill')?.value).toEqual('#ffffff');
  });

  test('should render onDelete tag with custom icon', () => {
    const fn = vi.fn();

    const {container} = render(<Tag color={'warning'} variant={'filled'} label={'test'} onDelete={() => {fn()}} deleteIcon={<div className={'test'}>test</div>}/>);
    const delIcon = container.getElementsByClassName('test')[0];
    
    fireEvent.click(delIcon);
    
    expect(fn).toHaveBeenCalled();
  });

  test('should render link tag', () => {
    const {container} = render(<Tag color={'info'} variant={'filled'} label={'test'} href={'https://google.com/'}/>);
    const tag = container.getElementsByClassName('tag filled')[0] as HTMLLinkElement;

    expect(tag.href).toEqual('https://google.com/');
  });

  test('should render link tag with children', () => {
    const {container} = render(<Tag color={'info'} href={'https://google.com'} variant={'filled'}>Testing</Tag>);
    const tag = container.getElementsByClassName('tag filled')[0];

    expect(tag.textContent).toEqual('Testing');
  });

  test('should render onClick tag', async () => {
    const fn = vi.fn();
    const user = userEvent.setup();

    const {container} = render(<Tag color={'info'} variant={'outlined'} label={'test'} onClick={() => {fn()}}/>);
    const tag = container.getElementsByClassName('tag')[0];

    await user.tab();
    expect(tag.matches(':focus')).toBe(true);

    await user.keyboard(' ');
    expect(fn).toHaveBeenCalled();
  });

  test('should render elevated tag', () => {
    const {container} = render(<Tag color={'info'} variant={'filled'} elevated label={'test'}/>);
    const tag = container.getElementsByClassName('tag elevated')[0];

    expect(tag).toBeDefined();
  });
});