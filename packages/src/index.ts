import styles from './styles.scss';

export {CustomInput, PasswordInput, PasswordRule} from './components/input/index';
export {NotifyModal, QuestionModal} from './components/modal/index';
export {CustomRadio, RadioOption} from './components/radio/index';
export {Checkbox} from './components/checkbox/index';
export {Button} from './components/button/index';
export {Icon} from './components/icon/index';

export {useClickOutsideRef, useContrastColor} from './hooks/index';

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  const node = document.createTextNode(styles);
  style.appendChild(node);
  document.head.appendChild(style);
}