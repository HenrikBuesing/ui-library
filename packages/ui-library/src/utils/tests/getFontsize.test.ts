import {describe, expect, test} from 'vitest';
import getFontsize from "@utils/getFontsize";

describe('general', () => {
  test('should return fontSmall', () => {
    expect(getFontsize('small')).toEqual('fontSmall');
  });

  test('should return fontMedium', () => {
    expect(getFontsize('medium')).toEqual('fontMedium');
  });

  test('should return fontLarge', () => {
    expect(getFontsize('large')).toEqual('fontLarge');
  });

  test('should return fontLarge', () => {
    expect(getFontsize('large')).toEqual('fontLarge');
  });

  test('should throw error', () => {
    expect(() => {
      // @ts-expect-error -> test invalid size
      getFontsize('unknown');
    }).toThrow(new Error(`Error: unsupported size. Expected 'small', 'medium' or 'large', but got: unknown`));
  });
});