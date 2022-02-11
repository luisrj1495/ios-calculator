// Types
import {OperationsType} from '../types';

export const operations: {
  [O in OperationsType]: (a: number, b: number) => number;
} = {
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '+': (a, b) => a + b,
};
