type Param = string | boolean | null | undefined;

export default function cls(items: Param[]) {
  let str = '';
  
  items.forEach(item => {
    if (item === null || item === undefined || item === false) return;

    if (str !== '') str += ' ';
    str += item;
  });

  return str;
}