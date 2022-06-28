import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {
  background,
  getDataTotal,
  gray,
  renderVote,
  returnImage,
  white,
} from '../../utilities/data';
import {useSelector} from '../../redux/reducers';

const RelatedMovies = ({onChooseItem}) => {
  const myMovieReducers = useSelector(state => state.myMovieReducers);
  const [dataTotal, setDataTotal] = useState(myMovieReducers?.dataMovie);
  const [dataTotalDetail, setDataTotalDetail] = useState(
    myMovieReducers?.dataDetail,
  );
  const renderItemRelate = ({item, index}) => {
    const itemDetail = renderVote(item, dataTotalDetail);
    return (
      <TouchableOpacity
        style={{width: 142 * 1.3, marginRight: 8}}
        onPress={() => onChooseItem(itemDetail)}>
        <Image
          source={{uri: returnImage(itemDetail?.poster_path)}}
          style={styles.image}
        />
        <Text style={styles.title}>{itemDetail?.original_title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.fontRelated}>Related Movies</Text>
      <FlatList
        data={getDataTotal(dataTotal, dataTotalDetail)}
        renderItem={renderItemRelate}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default RelatedMovies;
const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    paddingVertical: 20,
    // borderBottomWidth: 0.5,
    borderColor: gray,
  },
  image: {
    height: 106 * 1.2,
    width: 142 * 1.2,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 12,
    color: white,
    fontWeight: '400',
    marginBottom: 12,
    marginTop: 6,
    marginHorizontal: 6,
  },
  fontRelated: {
    fontSize: 16,
    color: white,
    fontWeight: '600',
    marginBottom: 12,
  },
});
