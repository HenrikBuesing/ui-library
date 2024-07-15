import MDXComponents from '@theme-original/MDXComponents';
import AssignableProps from '@site/src/components/Props';
import DefaultInput , {TooltipInput, IconInput, DisabledInput} from '@site/src/components/Input';
import SuccessModal, {ErrorModal, WarningModal, MultiLineModal, CallbackModal, QuestionExample} from '@site/src/components/modal';
import {CustomButton, CustomInput, useClickOutsideRef} from '../../uil-bundle/ui-library.modern.mjs';

export default {
  ...MDXComponents,
  AssignableProps,
  IconInput,
  TooltipInput,
  DefaultInput,
  DisabledInput,
  CustomButton,
  CustomInput,
  SuccessModal,
  WarningModal,
  ErrorModal,
  MultiLineModal,
  CallbackModal,
  QuestionExample,
  useClickOutsideRef,
};