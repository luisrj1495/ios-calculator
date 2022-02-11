import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Calculator from './src/screens/Calculator';

import {appStyles} from './src/theme/app';

const App = () => {
  return (
    <SafeAreaView style={appStyles.container}>
      <StatusBar backgroundColor="black" animated barStyle="light-content" />
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
