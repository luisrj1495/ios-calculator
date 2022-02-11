import {useRef, useState} from 'react';

// Utils
import {operations} from './utils/operations';

// Types
import {OperationsType, UseCalculatorStateType} from './types';

export const useCalculator = () => {
  const [state, setState] = useState<UseCalculatorStateType>({
    current: '0',
    prev: '',
  });
  const operation = useRef<OperationsType | null>(null);

  const clean = () => {
    setState({prev: '', current: '0'});
    operation.current = null;
  };

  const addNumber = (value: string) => {
    const hasDot = state.current.includes('.');
    const startWithZero = state.current === '0' || state.current === '-0';

    if (startWithZero && value == '0') return;
    if (hasDot && value === '.') return;

    if (startWithZero && value != '0' && value != '.') {
      setState(prev => ({
        ...prev,
        current: value,
      }));
      return;
    }

    setState(prev => ({
      ...prev,
      current: prev.current + value,
    }));
  };

  const changeSymbol = () => {
    if (state.current[0] === '-')
      setState(prev => ({...prev, current: prev.current.replace('-', '')}));
    else setState(prev => ({...prev, current: '-' + prev.current}));
  };

  const deleteNumber = () => {
    if (state.current === '0') return;
    const length = state.current.length;
    const isNegative = state.current.includes('-');

    setState(prev => ({
      ...prev,
      current:
        length === 1 || (length === 2 && isNegative)
          ? '0'
          : prev.current.substring(0, prev.current.length - 1),
    }));
  };

  const setOperation = (value: OperationsType) => {
    if (state.current == '0') return;
    operation.current = value;
    const endsWithDot = state.current.endsWith('.');

    setState(prev => ({
      ...prev,
      current: '0',
      prev: endsWithDot ? prev.current.replace('.', '') : prev.current,
    }));
  };

  const calculate = () => {
    if (!operation.current) return;

    const current = String(
      operations[operation.current](+state.prev, +state.current),
    );

    setState({
      current,
      prev: '',
    });
    operation.current = null;
  };

  return {
    clean,
    addNumber,
    calculate,
    changeSymbol,
    deleteNumber,
    setOperation,
    current: state.current,
    prevValue: state.prev,
  };
};
