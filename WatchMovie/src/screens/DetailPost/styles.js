import {Dimensions, StyleSheet} from 'react-native';
import {background} from '../../utilities/data';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: background,
    flex: 1,
  },
  backgroundImgae: {
    height: (width * 14) / 16,
    width: width,
    // borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMaker: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255,255,255,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
  viewItem: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    width: 60,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
});
