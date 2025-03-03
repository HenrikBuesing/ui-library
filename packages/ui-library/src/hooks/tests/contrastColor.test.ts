import {expect, test} from "vitest";
import {useContrastColor} from "@hooks/useContrastColor";

const white = '#ffffff'
const black = '#000000'

test('should return white', () => {
  const darkRed = useContrastColor('#570a13');
  const darkGreen = useContrastColor('#074211');
  const darkBlue = useContrastColor('#000260');

  expect(darkRed).toEqual(white);
  expect(darkGreen).toEqual(white);
  expect(darkBlue).toEqual(white);
});

test('should return black', () => {
  const lightRed = useContrastColor('#fd6d7e');
  const lightGreen = useContrastColor('#a1faad');
  const lightBlue = useContrastColor('#96bcef');

  expect(lightRed).toEqual(black);
  expect(lightGreen).toEqual(black);
  expect(lightBlue).toEqual(black);
});

test('should accept short hex', () => {
  const color = useContrastColor('#000');

  expect(color).toEqual(white);
});

test('should accept long hex', () => {
  const color = useContrastColor('#000000');

  expect(color).toEqual(white);
});

test('should throw invalid hex error', () => {
  expect(() => {
    useContrastColor('#12');
  }).toThrow(new Error(`[useContrastColor] invalid hex color: #12`));

  expect(() => {
    useContrastColor('#zzz');
  }).toThrow(new Error(`[useContrastColor] invalid hex color: #zzz`));

  expect(() => {
    useContrastColor('abc');
  }).toThrow(new Error(`[useContrastColor] invalid hex color: abc`));

  expect(() => {
    useContrastColor('#abcdef7');
  }).toThrow(new Error(`[useContrastColor] invalid hex color: #abcdef7`));
});