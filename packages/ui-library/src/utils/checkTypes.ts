import type {Status} from '../components/common/types';

export function isStatus(value: unknown): value is Status {
  return typeof value === 'string' && ['info', 'success', 'warning', 'error'].includes(value);
}