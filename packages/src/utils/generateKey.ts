export default function generateKey() {
  const m = (Math.random() * 100) + 1;

  return `uil${(performance.now() * m).toString(32)}${(Math.random() * m).toString(16)}`.replace(/\./g, '');
}