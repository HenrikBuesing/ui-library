import styles from "../popup.module.scss";

export default function getAlignment(alignment: Alignment) {
  const h = alignment.horizontal, v = alignment.vertical;

  return h === 'center' && v === 'center' ? [styles.centerXY] : [
    h === 'center' ? styles.centerX : styles[h],
    v === 'center' ? styles.centerY : styles[v]
  ];
}

type Alignment = { vertical: 'top' | 'center' | 'bottom', horizontal: 'left' | 'center' | 'right' };
