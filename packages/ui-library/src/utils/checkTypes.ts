import type {Size, Status} from '../components/common/types';

export function isStatus(value: unknown): value is Status {
  return typeof value === 'string' && ['info', 'success', 'warning', 'error'].includes(value);
}

export function isSize(value: unknown): value is Size {
  return typeof value === 'string' && ['small', 'medium', 'large'].includes(value);
}