type Param = string | string[] | boolean | null | undefined;

export default function cls(items: Param[]) {
  const str: string[] = [];

  items.forEach(item => {
    if (!item || typeof item === 'boolean') return;

    str.push(...(Array.isArray(item) ? item : [item]));
  });

  return str.join(' ');
}