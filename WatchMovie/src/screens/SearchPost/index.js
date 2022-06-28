import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';

import styles from './styles';
import {
  background,
  getDataTotal,
  gray,
  renderVote,
  returnImage,
  white,
} from '../../utilities/data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ItemType from './ItemType';
import {WaterfallList} from 'react-native-largelist';
import {useSelector} from '../../redux/reducers';
const {width, height} = Dimensions.get('window');

const SearchPost = ({navigation, route}) => {
  const screenWidth = Dimensions.get('window').width;
  const myMovieReducers = useSelector(state => state.myMovieReducers); // du lieu sang cac man hinh
  const [dataTotal, setDataTotal] = useState(myMovieReducers?.dataMovie);
  const [dataTotalDetail, setDataTotalDetail] = useState(
    myMovieReducers?.dataDetail,
  );
  const renderItem = (item, index) => {
    const itemDetail = renderVote(item, dataTotalDetail);
    var heightItem = 0;
    if (index % 2 == 0) {
      heightItem =
        ((screenWidth / Math.floor(screenWidth / 150)) * +150) / +100;
    } else
      heightItem =
        ((screenWidth / Math.floor(screenWidth / 150)) * +100) / +100;

    return (
      <TouchableOpacity
        style={{height: heightItem, margin: 5, borderRadius: 4}}
        onPress={() => {
          navigation.navigate('DetailPost', {
            dataDetail: itemDetail,
          });
        }}>
        <Image
          source={{uri: returnImage(itemDetail?.poster_path)}}
          style={{flex: 1, margin: 5, borderRadius: 4}}
        />
        <Text style={{color: white, marginBottom: 10, marginLeft: 4}}>
          {itemDetail?.original_title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={background} />
      <View style={styles.containerBody}>
        <Text style={styles.text2}>Find Movies, Tv series, and more..</Text>
        <View style={styles.viewSearch}>
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome name={'search'} size={22} color={white} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search fim"
            style={styles.textInput}
            placeholderTextColor={gray}
          />
        </View>
        <ItemType />
        <View style={{flex: 1, paddingBottom: 80}}>
          <WaterfallList
            data={getDataTotal(dataTotal, dataTotalDetail)}
            heightForItem={(item, index) => {
              if (index % 2 == 0) {
                return (
                  ((screenWidth / Math.floor(screenWidth / 150)) * +150) / +100
                );
              } else
                return (
                  ((screenWidth / Math.floor(screenWidth / 150)) * +100) / +100
                );
            }}
            numColumns={2}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SearchPost;
