import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import {background, gray, white} from '../../utilities/data';

const InfoPost = ({dataDetailChoose}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.relaseDate}>Release date</Text>
        <Text style={styles.fontDate}>
          {dataDetailChoose?.release_date
            ? moment(dataDetailChoose?.release_date).format('MMM D, YYYY')
            : ''}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.Gener}>Genre</Text>
        <View>
          <View style={styles.viewAction}>
            <Text style={styles.fontAction}>Action</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default InfoPost;
const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderColor: gray,
    flexDirection: 'row',
  },
  relaseDate: {
    fontSize: 16,
    color: white,
    fontWeight: '600',
    marginBottom: 12,
  },
  fontDate: {
    fontSize: 12,
    color: white,
    fontWeight: '400',
  },
  Gener: {
    fontSize: 16,
    color: white,
    fontWeight: '600',
    marginBottom: 12,
  },
  viewAction: {
    //   flexDirection: 'row',
    paddingHorizontal: 10,
    marginRight: 6,
    paddingVertical: 6,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    width: 60,
  },
  fontAction: {
    fontSize: 12,
    color: white,
    fontWeight: '400',
  },
});
