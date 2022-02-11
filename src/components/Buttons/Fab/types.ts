import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';

import {theme} from './styles';

export type FabPropsType = {
  title: string;
  onPress: (ev: GestureResponderEvent) => void;
  color?: keyof typeof theme;
  style?: StyleProp<ViewStyle>;
};
