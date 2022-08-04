import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 12,
    flexDirection: 'row',
    marginHorizontal: 12,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.White,
    padding: 8,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {height: 120, width: 100},
  nameText: {fontSize: 18, color: Colors.Black, marginBottom: 12},
  habitatText: {flex: 1, fontSize: 14, color: Colors.Gray},
  textContainer: {paddingHorizontal: 12, flex: 1},
});
