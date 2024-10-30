export function useContrastColor(hexColor: string) {
  if (hexColor.includes("#")) {
    hexColor = hexColor.replace('#', '');
  }

  if (hexColor.length < 3 || hexColor.length > 6) {
    throw new Error('Invalid hex color, allowed values are (#)FFF or (#)FFFFFF');
  }

  let rgb: number[];

  if (hexColor.length === 3) {
    rgb = [
      parseInt(hexColor.substring(0), 16) / 255,
      parseInt(hexColor.substring(1), 16) / 255,
      parseInt(hexColor.substring(2), 16) / 255
    ];
  } else {
    rgb = [
      parseInt(hexColor.substring(0, 2), 16) / 255,
      parseInt(hexColor.substring(2, 4), 16) / 255,
      parseInt(hexColor.substring(4, 6), 16) / 255
    ];
  }

  const c = rgb.map(col => {return col <= 0.03928? (col / 12.92) : Math.pow((col + 0.055) / 1.055, 2.4);});
  const contrast = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);

  return contrast > 0.179 ? '#000000' : '#ffffff';
}