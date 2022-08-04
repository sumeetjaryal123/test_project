import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  textInput: {paddingHorizontal: 8, paddingVertical: 18, fontSize: 16},
  searchIcon: {height: 22, width: 22},
  container: {
    borderColor: Colors.PrimaryColor,
    borderRadius: 44,
    borderWidth: 1,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
