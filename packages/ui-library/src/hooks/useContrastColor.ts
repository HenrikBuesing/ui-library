// as soon as css color-contrast() is widely available this won't be necessary anymore
// for current status see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-contrast and https://caniuse.com/?search=color-contrast()

const HEX_COLOR = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

export function useContrastColor(hex: string) {
  if (!HEX_COLOR.test(hex)) throw new Error(`[useContrastColor] invalid hex color: ${hex}`);

  hex = hex.replace('#', '');
  let srgb: number[];

  if (hex.length === 3) {
    srgb = [
      parseInt(hex.substring(0), 16) / 255,
      parseInt(hex.substring(1), 16) / 255,
      parseInt(hex.substring(2), 16) / 255
    ];
  } else {
    srgb = [
      parseInt(hex.substring(0, 2), 16) / 255,
      parseInt(hex.substring(2, 4), 16) / 255,
      parseInt(hex.substring(4, 6), 16) / 255
    ];
  }

  const [R, G, B] = srgb.map((i) => i <= 0.04045 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4)
  const contrast = 0.2126 * R + 0.7152 * G + 0.0722 * B;

  return contrast > 0.179 ? '#000000' : '#ffffff';
}