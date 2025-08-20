import {describe, expect, test} from 'vitest';
import {render} from '@testing-library/react';
import {Accordion} from './accordion';
import {Details} from '../details';
import React from 'react';

describe('accordion', () => {
  test('should render accordion', () => {
    const {container} = render(
      <Accordion>
        <Details summary={'Testing'}>Hello World</Details>
        <Details summary={'test'}>Hello world</Details>
      </Accordion>
    );

    const accordion = container.getElementsByClassName('accordion')[0];
    expect(accordion).toBeDefined();
    expect(accordion.children.length).toEqual(2);
  });

  test('should throw error when using invalid child', () => {
    expect(() => {
      render(<Accordion><span>TEST</span><span>test</span></Accordion>)
    }).toThrowError(`<Accordion> received an invalid child. Expected <Details />, but got: span.`);

    expect(() => {
      // @ts-expect-error -> test invalid child elements
      render(<Accordion>test <span>test</span></Accordion>)
    }).toThrowError(`<Accordion> received an invalid child. Expected <Details />, but got: string.`);
  });
});