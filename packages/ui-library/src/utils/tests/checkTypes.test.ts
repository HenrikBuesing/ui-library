import {describe, expect, test} from 'vitest';
import {isStatus} from '@utils/checkTypes';

describe('isStatus', () => {
  test('should return valid status', () => {
    const test = isStatus('info');

    expect(test).toBeTruthy();
  });

  test('should return invalid status', () => {
    const invalidString = isStatus('testing');
    const nonString = isStatus(123);

    expect(invalidString).toBeFalsy();
    expect(nonString).toBeFalsy();
  });
});