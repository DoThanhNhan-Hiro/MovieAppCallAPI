import {Dimensions, StyleSheet} from 'react-native';
import {background, firstColor, white} from '../../utilities/data';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: background,
    // backgroundColor: '#FFF',
    flex: 1,
  },
  containerBody: {
    flex: 1,
    paddingHorizontal: 20,
    // height: width
  },
  text1: {
    fontSize: 24,
    fontWeight: '400',
    color: firstColor,
    marginTop: 50,
  },
  text2: {
    fontSize: 24,
    fontWeight: '400',
    color: white,
    marginTop: 50,
  },
  viewSearch: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 40,
    paddingHorizontal: 16,
  },
  textInput: {
    height: 50,
    justifyContent: 'center',
    width: width - 40 - 22 - 10,
    paddingHorizontal: 12,
    fontSize: 14,
    color: white,
  },
});
