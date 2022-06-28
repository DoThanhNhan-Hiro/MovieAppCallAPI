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
    // marginTop: 10,
  },
  text2: {
    fontSize: 24,
    fontWeight: '400',
    color: white,
  },
  touch: {
    height: ((width - 40) * 10) / 16,
    width: width - 40,
    marginTop: 16,
  },
  line: {
    height: ((width - 40) * 10) / 16,
    width: width - 40,
    marginTop: 16,
    borderRadius: 20,
  },
  image: {
    height: ((width - 40) * 10) / 16,
    width: width - 40,
    borderRadius: 20,
  },
  viewPotision: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    height: 68,
    width: width / 1.7,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  viewTouch: {
    height: 68,
    width: width / 1.7,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  viewLine: {
    height: 38,
    width: 38,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: white,
    marginBottom: 4,
    fontSize: 12,
  },
  textDes: {
    color: white,
    marginBottom: 4,
    fontSize: 17,
  },
});
