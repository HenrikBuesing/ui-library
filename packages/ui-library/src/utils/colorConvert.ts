const HEX_COLOR = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

export function hexToRgb(hex: string, component: string) {
  if (!HEX_COLOR.test(hex)) throw new Error(`${component} received an invalid hex color format. Expected '#000' or '#000000', but got: ${hex}`);

  hex = hex.replace('#', '');

  if (hex.length === 3) {
    return [
      parseInt(hex.substring(0, 1), 16),
      parseInt(hex.substring(1, 2), 16),
      parseInt(hex.substring(2, 2), 16),
    ];
  } else {
    return [
      parseInt(hex.substring(0, 2), 16),
      parseInt(hex.substring(2, 4), 16),
      parseInt(hex.substring(4, 6), 16),
    ];
  }
}