import {StyleSheet} from 'react-native';

export const theme = {
  gray: {
    btn: {
      backgroundColor: '#9B9B9B',
    },
    text: {
      color: 'black',
      fontWeight: '500',
    },
  },
  default: {
    btn: {
      backgroundColor: '#2D2D2D',
    },
    text: {
      color: 'white',
    },
  },
  orange: {
    btn: {
      backgroundColor: '#FF9427',
    },
    text: {
      color: 'white',
    },
  },
};

export const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    padding: 20,
    flex: 1,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: '400',
  },
});
