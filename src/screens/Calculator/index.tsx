import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

import Fab from '../../components/Buttons/Fab';

// Hooks
import {useCalculator} from './hooks/useCalculator';

export const Calculator = () => {
  const {
    addNumber,
    clean,
    calculate,
    changeSymbol,
    deleteNumber,
    current,
    prevValue,
    setOperation,
  } = useCalculator();

  return (
    <View style={styles.calculatorBox}>
      <Text
        accessibilityRole="text"
        accessibilityLabel="previous value"
        style={styles.resultSmall}>
        {prevValue}
      </Text>
      <Text
        accessibilityRole="header"
        accessibilityLabel="current value"
        style={styles.resultTitle}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {current}
      </Text>

      <View style={styles.row}>
        <Fab title="C" color="gray" onPress={() => clean()} />
        <Fab title="+/-" color="gray" onPress={() => changeSymbol()} />
        <Fab title="del" color="gray" onPress={() => deleteNumber()} />
        <Fab title="÷" color="orange" onPress={() => setOperation('/')} />
      </View>

      <View style={styles.row}>
        <Fab title="7" onPress={() => addNumber('7')} />
        <Fab title="8" onPress={() => addNumber('8')} />
        <Fab title="9" onPress={() => addNumber('9')} />
        <Fab title="x" color="orange" onPress={() => setOperation('*')} />
      </View>

      <View style={styles.row}>
        <Fab title="4" onPress={() => addNumber('4')} />
        <Fab title="5" onPress={() => addNumber('5')} />
        <Fab title="6" onPress={() => addNumber('6')} />
        <Fab title="-" color="orange" onPress={() => setOperation('-')} />
      </View>

      <View style={styles.row}>
        <Fab title="1" onPress={() => addNumber('1')} />
        <Fab title="2" onPress={() => addNumber('2')} />
        <Fab title="3" onPress={() => addNumber('3')} />
        <Fab title="+" color="orange" onPress={() => setOperation('+')} />
      </View>

      <View style={styles.row}>
        <Fab style={{flex: 4}} title="0" onPress={() => addNumber('0')} />
        <Fab title="." onPress={() => addNumber('.')} />
        <Fab title="=" color="orange" onPress={() => calculate()} />
      </View>
      <Text style={styles.sign}>Made by Luis 🧑🏼‍🚀</Text>
    </View>
  );
};

export default Calculator;
