import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  redDot: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  heartContainer: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  heart: {height: 33, width: 33},
  logo: {height: 60},
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
