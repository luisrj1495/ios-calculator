import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {styles, theme} from './styles';

// Types
import {FabPropsType} from './types';

const Fab: FC<FabPropsType> = ({
  title,
  onPress,
  color = 'default',
  style = {},
}) => {
  const themeSelected = theme[color];

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={StyleSheet.flatten([styles.btn, themeSelected.btn, style])}
      activeOpacity={0.5}>
      <Text style={StyleSheet.flatten([styles.text, themeSelected.text])}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Fab;
