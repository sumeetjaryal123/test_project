import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {screenSize} from '../../utils/constant';

export const styles = StyleSheet.create({
  container: {
    marginRight: 18,
    marginVertical: 30,
    alignItems: 'center',
  },
  imageContainer: {
    height: screenSize.width * 0.6,
    width: screenSize.width * 0.4,
    alignItems: 'center',
  },
  backgroundBorder: {borderRadius: 18},
  playContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginTop: screenSize.width * 0.15,
    backgroundColor: Colors.BlackOpacity05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  play: {height: 44, width: 44},
  nameContainer: {
    backgroundColor: Colors.BlackOpacity05,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    borderRadius: 5,
  },
  nameText: {
    color: Colors.White,
    paddingHorizontal: 16,
    paddingVertical: 3,
    fontSize: 22,
  },
  infoContainer: {
    position: 'absolute',
    backgroundColor: Colors.Black,
    borderRadius: 45,
    padding: 8,
    bottom: -25,
  },
  info: {height: 33, width: 33},
});
