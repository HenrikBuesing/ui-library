export default function generateKey(prefix: string | number) {
  const id = String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '');

  return `${prefix}-${id}`;
}