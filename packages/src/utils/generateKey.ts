export default function generateKey(prefix: string | number) {
  return `${prefix}-${new Date().getTime()}`;
}