import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {background, gray, white} from '../../utilities/data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderDetail = ({dataDetailChoose}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{dataDetailChoose?.original_title}</Text>
      </View>
      <View style={styles.viewFlex}>
        <View style={{flexDirection: 'row', marginRight: 30}}>
          <Ionicons name={'time-outline'} color={white} size={14} />
          <Text style={{fontSize: 12, color: white, marginLeft: 6}}>
            {dataDetailChoose?.runtime ?? 0} minutes
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginRight: 40}}>
          <AntDesign name={'star'} color={white} size={14} />
          <Text style={{fontSize: 12, color: white, marginLeft: 6}}>
            {`${dataDetailChoose?.vote_average ?? 0} (IMDb)`}
          </Text>
        </View>
        <View style={styles.viewText}>
          <Text style={{fontSize: 12, color: white}}>4K</Text>
        </View>
      </View>
    </View>
  );
};
export default HeaderDetail;
const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderColor: gray,
  },
  title: {
    fontSize: 24,
    color: white,
    fontWeight: '900',
  },
  viewFlex: {flexDirection: 'row', marginTop: 16, alignItems: 'center'},
  viewText: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
  },
});
