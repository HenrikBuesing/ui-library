import MDXComponents from '@theme-original/MDXComponents';
import AssignableProps from '@site/src/components/Props';
import DefaultInput from '@site/src/components/Input';
import SuccessModal, {
  ErrorModal,
  WarningModal,
  MultiLineModal,
  CallbackModal,
  QuestionExample,
  CustomBody, DarkMode, NoTheme, QuestionTheme, QuestionDark, QuestionCustom
} from '@site/src/components/modal';
import {Button, useClickOutsideRef, Icon} from '@site/src/uil-bundle';
import RadioExample, {
  CheckboxBody,
  CheckboxColor,
  CheckboxLabel,
  RadioColor,
  RadioDisabled,
  CheckboxLabelDark, CheckboxColorDark, CheckboxBodyDark, CheckboxDisabled, CheckboxDisabledDark, RadioExampleDark,
  RadioColorDark, RadioDisabledDark
} from "@site/src/components/check";

export default {
  ...MDXComponents,
  AssignableProps,
  DefaultInput,
  Button,
  SuccessModal,
  WarningModal,
  ErrorModal,
  MultiLineModal,
  CallbackModal,
  CustomBody,
  DarkMode,
  NoTheme,
  QuestionExample,
  QuestionTheme,
  QuestionDark,
  QuestionCustom,
  RadioExample,
  RadioExampleDark,
  useClickOutsideRef,
  CheckboxLabel,
  CheckboxLabelDark,
  CheckboxBody,
  CheckboxBodyDark,
  CheckboxDisabled,
  CheckboxDisabledDark,
  CheckboxColor,
  CheckboxColorDark,
  RadioColor,
  RadioColorDark,
  RadioDisabled,
  RadioDisabledDark,
  Icon,
};