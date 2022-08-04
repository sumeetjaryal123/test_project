import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {screenSize} from '../../utils/constant';

export const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  profileContainer: {alignItems: 'center'},
  image: {
    borderWidth: 4,
    borderColor: Colors.PrimaryColor,
    borderRadius: screenSize.width * 0.25,
    height: screenSize.width * 0.25,
    width: screenSize.width * 0.25,
  },
  nameText: {color: Colors.White, fontSize: 16, marginTop: 8},
});
