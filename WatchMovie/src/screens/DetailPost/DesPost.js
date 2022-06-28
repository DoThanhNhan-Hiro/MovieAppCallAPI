import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {background, gray, white} from '../../utilities/data';
const InfoPost = ({dataDetailChoose}) => {
  const [numberLine, setNumberLine] = useState(100);
  useEffect(() => {
    setNumberLine(100);
  }, [dataDetailChoose]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Synopsis</Text>
      <Text style={styles.des}>
        {(dataDetailChoose?.overview ?? '').toString().slice(0, numberLine)}
        <Text onPress={() => setNumberLine(9999999999)} style={styles.title}>
          {numberLine == 100 &&
          (dataDetailChoose?.overview ?? '').toString().length > 100
            ? ' More...'
            : ''}
        </Text>
      </Text>
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
  },
  title: {
    fontSize: 16,
    color: white,
    fontWeight: '600',
    marginBottom: 12,
  },
  des: {
    fontSize: 14,
    color: white,
    fontWeight: '400',
  },
});
