import {render, screen} from '@testing-library/react';
import {describe, expect, test} from 'vitest';
import {Icon} from './icon';
import React from 'react';

const testSVG = '/src/test/test.svg';
const testPNG = '/src/test/test.png';

describe('general', () => {
  test('should render svg icon', () => {
    render(<Icon src={testSVG} type={'svg'}/>);
    
    const svg = screen.getByRole('img');
    expect(svg).toBeInstanceOf(SVGElement);
    
    const u = svg.firstChild as HTMLElement;
    expect(u.getAttribute('href')).toEqual('/src/test/test.svg');
  });

  test('should render svg icon with alt text', () => {
    render(<Icon src={testSVG} type={'svg'} altText={'test svg'}/>);
    const title = screen.getByText('test svg')
    const svg = screen.getByRole('img');

    expect(title).toBeDefined();
    expect(svg.getAttribute('aria-labelledby')).toEqual(title.id)
  });

  test('should render svg icon with custom role', () => {
    render(<Icon src={testSVG} type={'svg'} role={'document'}/>);
    const svg = screen.getByRole('document');
    
    expect(svg).toBeDefined();
  });

  test('should render img icon', () => {
    const {container} = render(<Icon src={testPNG} type={'img'}/>);
    const img = container.firstChild as HTMLElement;

    expect(img).toBeInstanceOf(HTMLImageElement);
    expect(img?.getAttribute('src')).toEqual('/src/test/test.png');
  });

  test('should render img icon with alt text', () => {
    render(<Icon src={testPNG} type={'img'} alt={'test img'}/>);
    const img = screen.getByAltText('test img');
    
    expect(img).toBeDefined();
    expect(img.getAttribute('alt')).toEqual('test img');
  });

  test('should render small icon', () => {
    render(<Icon src={testPNG} type={'img'} alt={'test img'} size={'small'}/>);
    const img = screen.getByAltText('test img');

    expect(img.className).contains('small');
  });

  test('should render medium icon', () => {
    render(<Icon src={testPNG} type={'img'} alt={'test img'} size={'medium'}/>);
    const img = screen.getByAltText('test img');

    expect(img.className).contains('medium');
  });

  test('should render large icon', () => {
    render(<Icon src={testPNG} type={'img'} alt={'test img'} size={'large'}/>);
    const img = screen.getByAltText('test img');

    expect(img.className).contains('large');
  });

  test('should render icon with custom size', () => {
    render(<Icon src={testPNG} type={'img'} alt={'test img'} size={'large'} width={50} height={50}/>);
    const img = screen.getByAltText('test img') as HTMLImageElement;

    expect(img.className).toEqual('');
    expect(img.height).toEqual(50);
    expect(img.width).toEqual(50);
  });

  test('should throw error when using unknown size', () => {
    expect(() => {
      // @ts-ignore -> test using unsupported size
      render(<Icon src={testPNG} type={'img'} alt={'test img'} size={'test'}/>)
    }).toThrow(new Error('[Icon] unsupported size'));
  });
});