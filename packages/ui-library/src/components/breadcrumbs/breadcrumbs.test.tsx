import {describe, expect, test, vi} from 'vitest';
import {render} from '@testing-library/react';
import {Breadcrumbs} from './breadcrumbs';
import React from 'react';

describe('general', () => {
  test('should render breadcrumbs', () => {
    const {container} = render(<Breadcrumbs><div>test</div><div>testing</div></Breadcrumbs>);

    const breadcrumbs = container.getElementsByClassName('breadcrumbs')[0];
    expect(breadcrumbs).toBeDefined();
    expect(breadcrumbs.children.length).toEqual(3);
  });

  test('should render breadcrumbs in dark mode', () => {
    const {container} = render(<Breadcrumbs dark><div>test</div><div>testing</div></Breadcrumbs>);

    const breadcrumbs = container.getElementsByClassName('breadcrumbs dark')[0];
    expect(breadcrumbs).toBeDefined();
  });

  test('should render highlighted breadcrumbs', () => {
    const {container} = render(<Breadcrumbs highlightLast><div>test</div><div>testing</div></Breadcrumbs>);

    const breadcrumbs = container.getElementsByClassName('breadcrumbs highlight')[0];
    expect(breadcrumbs).toBeDefined();
  });
  
  test('should render collapsed breadcrumbs', () => {
    const {container} = render(
      <Breadcrumbs>
        <div>test</div>
        <div>testing</div>
        <div>foo</div>
        <div>bar</div>
        <div>lorem</div>
        <div>ipsum</div>
      </Breadcrumbs>);

    const hidden = container.getElementsByClassName('hiddenEntries')[0];
    expect(hidden).toBeDefined();
  });

  test('should render collapsed breadcrumbs with invalid config', () => {
    const consoleMock = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    
    const {container} = render(
      <Breadcrumbs beforeCollapse={5} afterCollapse={5}>
        <div>test</div>
        <div>testing</div>
        <div>foo</div>
        <div>bar</div>
        <div>lorem</div>
        <div>ipsum</div>
      </Breadcrumbs>);

    const breadcrumbs = container.getElementsByClassName('breadcrumbs')[0];
    expect(breadcrumbs.children.length).toEqual(11);
    
    expect(consoleMock).toHaveBeenCalledOnce();
    expect(consoleMock).toHaveBeenCalledWith('<Breadcrumbs/> received an invalid collapse configuration. Expected (beforeCollapse + afterCollapse) < allEntries, but got: 10 >= 6.');
  });
});