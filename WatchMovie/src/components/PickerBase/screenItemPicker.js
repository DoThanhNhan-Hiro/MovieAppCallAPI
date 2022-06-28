import React, {memo} from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const ScreenItemPicker = ({navigation, route}) => {
  return <SafeAreaView style={styles.safeView}></SafeAreaView>;
};
export default memo(ScreenItemPicker);

const styles = StyleSheet.create({
  safeView: {backgroundColor: 'white', flex: 1},
});
