export function useGetColor(backgroundColor: string) {
  if (backgroundColor.length !== 7) throw new Error('provided hex color must be 7 characters (including #) long');

  backgroundColor = backgroundColor.substring(1, 7);
  const uiColors = [
    parseInt(backgroundColor.substring(0, 2), 16) / 255,
    parseInt(backgroundColor.substring(2, 4), 16) / 255,
    parseInt(backgroundColor.substring(4, 6), 16) / 255
  ];
  const c = uiColors.map(col => {
    return col <= 0.03928? (col / 12.92) : Math.pow((col + 0.055) / 1.055, 2.4);
  });
  const contrast = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);

  return contrast > 0.179 ? '#000000' : '#ffffff';
}