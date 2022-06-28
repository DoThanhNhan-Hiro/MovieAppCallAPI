import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import { firstColor, returnImage, white } from '../../utilities/data';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');
const Preview = ({ item, onPress, active, itemDetail }) => {
  return (
    <TouchableOpacity
      style={[styles.videoContainer]}
      onPress={() => onPress(item)}>
      <View style={[styles.imageContainer, styles.shadow]}>
        {itemDetail?.id ? (
          <Image
            style={[styles.videoPreview, active ? {} : { height: 336 }]}
            source={{ uri: returnImage(itemDetail?.poster_path) }}
          />
        ) : null}
      </View>
      <View style={styles.viewPostion}>
        <Text style={styles.textPostion} numberOfLines={1}>
          {itemDetail?.original_title}
        </Text>
      </View>
      <View style={styles.viewIMDb}>
        <Text style={styles.textIDMb} numberOfLines={1}>
          IMDb
        </Text>
        <View style={styles.viewVote}>
          <AntDesign name={'star'} color={firstColor} size={20} />
          <Text style={styles.textVote} numberOfLines={1}>
            {itemDetail?.vote_average}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Preview;

const styles = StyleSheet.create({
  videoContainer: {
    height: 336,
    width: width - 100,
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 20,
  },
  videoPreview: {
    width: width - 100,
    height: 336,
    borderRadius: 20,
    resizeMode: 'cover',
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  viewPostion: {
    position: 'absolute',
    bottom: 20,
    width: width - 150,
    marginHorizontal: 20,
    borderRadius: 20,
    height: 60,
    backgroundColor: 'rgba(128,128,128, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPostion: {
    fontSize: 18,
    color: white,
    fontWeight: '900',
  },
  viewIMDb: {
    position: 'absolute',
    top: 20,
    width: 70,
    borderRadius: 20,
    height: 56,
    backgroundColor: 'rgba(128,128,128, 0.8)',
    justifyContent: 'center',
    marginLeft: 16,
    right: 20,
  },
  textIDMb: {
    fontSize: 10,
    color: white,
    marginLeft: 16,
    textAlign: 'left',
    marginBottom: 4,
  },
  textVote: {
    fontSize: 16,
    color: white,
    marginLeft: 4,
    fontWeight: 'bold',
  },
  viewVote: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
