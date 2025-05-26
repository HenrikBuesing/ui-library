import global from '../components/common/styles/global.module.scss';
import type {Size} from '../components/common/types';

export default function getFontsize(size: Size) {
  let fontsize: string;
  
  switch (size) {
    case 'small':
      fontsize = global.fontSmall;
      break;
    case 'medium':
      fontsize = global.fontMedium;
      break;
    case 'large':
      fontsize = global.fontLarge;
      break;
    default:
      throw new Error(`Error: unsupported size. Expected 'small', 'medium' or 'large', but got: ${String(size)}`);
  }
  
  return fontsize;
} 