import {hexToRgb} from '@utils/colorConvert';

// as soon as css color-contrast() is widely available this won't be necessary anymore
// for current status see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast and https://caniuse.com/?search=color-contrast()
// UPDATE 26.05.2025: color-contrast has been renamed to contrast-color, docs have been removed until browsers implement the feature

export function useContrastColor(hex: string) {
  const rgb = hexToRgb(hex, 'useContrastColor');
  const srgb = rgb.map(i => i / 255);

  const [R, G, B] = srgb.map((i) => i <= 0.04045 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4)
  const contrast = 0.2126 * R + 0.7152 * G + 0.0722 * B;

  return contrast > 0.179 ? '#000000' : '#ffffff';
}