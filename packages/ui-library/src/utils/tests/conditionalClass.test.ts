import {describe, expect, test} from 'vitest';
import cls from '../conditionalClass';

describe('general', () => {
  test('should generate classes', () => {
    const test = cls(['foo', 'bar', 'baz']);

    expect(test).toEqual('foo bar baz');
  });

  test('should generate classes with nested array', () => {
    const test = cls(['test', ['foo', 'bar', 'baz']]);

    expect(test).toEqual('test foo bar baz');
  });

  test('should generate conditional classes', () => {
    const a = true;
    const b = false;

    const test = cls([a && 'foo', b && 'bar', 'baz']);

    expect(test).toEqual('foo baz');
  });

  test('should filter out invalid classes', () => {
    const test = cls(['foo', true, false, undefined, null, []]);

    expect(test).toEqual('foo');
  });
});