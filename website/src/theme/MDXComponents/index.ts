import MDXComponents from '@theme-original/MDXComponents';
import AssignableProps from '@site/src/components/Props';
import IconInput, {TooltipInput} from '@site/src/components/Input';
import {CustomButton, CustomInput, useClickOutsideRef} from '../../uil-bundle/ui-library.modern.mjs';

export default {
  ...MDXComponents,
  AssignableProps,
  IconInput,
  TooltipInput,
  CustomButton,
  CustomInput,
  useClickOutsideRef,
};