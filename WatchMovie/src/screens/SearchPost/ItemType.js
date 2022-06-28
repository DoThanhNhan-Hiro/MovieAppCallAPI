import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {background, firstColor, white} from '../../utilities/data';

const data = [
  {
    name: 'Movies',
  },
  {
    name: 'Tv Series',
  },
  {
    name: 'Documentary',
  },
  {
    name: 'Sports',
  },
];
const ItemType = ({}) => {
  const useRefList = useRef();
  const [indexItem, setIndexItem] = useState(0);
  const renderItemRelate = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setIndexItem(index);
          useRefList?.current?.scrollToIndex({animated: true, index: index});
        }}
        style={[
          {marginRight: 14},
          indexItem == index && {borderBottomWidth: 2, borderColor: firstColor},
        ]}>
        <Text
          style={[styles.textTitle, indexItem == index && {color: firstColor}]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={useRefList}
        data={data}
        renderItem={renderItemRelate}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default ItemType;

const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    marginVertical: 16,
    // flex: 1,
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
  textTitle: {
    fontSize: 16,
    color: white,
    fontWeight: '400',
    marginBottom: 12,
    marginTop: 6,
    marginHorizontal: 6,
  },
});
