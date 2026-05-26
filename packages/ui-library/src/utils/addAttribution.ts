export default function addAttribution(el: SVGSVGElement | null) {
  if (!el) return;
  if (el.dataset.attributed) return;

  el.dataset.attributed = 'true';

  const comment = document.createComment('Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.');
  el.appendChild(comment);
}