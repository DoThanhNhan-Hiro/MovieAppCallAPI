import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {
  background,
  endColor,
  firstColor,
  getDataTotal,
  gray,
  renderVote,
  returnImage,
  white,
} from '../../utilities/data';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Preview from './Preview';
import Carousel from 'react-native-snap-carousel';
import { useSelector } from '../../redux/reducers';
import { useDispatch } from 'react-redux';
import { getMovieSuccess } from '../../redux/actions/myMovieAction';

const { width, height } = Dimensions.get('window');
const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const myMovieReducers = useSelector(state => state.myMovieReducers);
  const [dataTotal, setDataTotal] = useState([]);
  const [dataTotalDetail, setDataTotalDetail] = useState([]);
  useEffect(() => {
    dispatch(getMovieSuccess());
  }, []);
  useEffect(() => {
    setDataTotal(myMovieReducers?.dataMovie);
    setDataTotalDetail(myMovieReducers?.dataDetail);
  }, [myMovieReducers?.dataDetail, myMovieReducers]);
  const renderItemCarousel = ({ item, index }) => {
    return (
      <Preview
        item={item}
        itemDetail={renderVote(item, dataTotalDetail)}
        onPress={() => {
          navigation.navigate('DetailPost', {
            dataDetail: renderVote(item, dataTotalDetail),
          });
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={background} />
      <View style={styles.containerBody}>
        <Text style={styles.text1}>
          Stream <Text style={styles.text2}>Everywhere</Text>
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailPost', {
              dataDetail: dataTotalDetail[0],
            });
          }}
          style={styles.touch}>
          <LinearGradient colors={['transparent', gray]} style={styles.line}>
            <Image
              source={
                dataTotalDetail[0]?.poster_path
                  ? { uri: returnImage(dataTotalDetail[0]?.poster_path) }
                  : require('../../images/splash.png')
              }
              // resizeMode={'contain'}
              style={styles.image}
            />
            <TouchableOpacity style={styles.viewPotision}>
              <TouchableOpacity style={styles.viewTouch}>
                <LinearGradient
                  colors={[firstColor, endColor]}
                  style={styles.viewLine}>
                  <Entypo name={'controller-play'} size={22} color={white} />
                </LinearGradient>
                <View style={{ marginLeft: 12 }}>
                  <Text style={styles.textTitle}>Continue Watching</Text>
                  <Text style={styles.textDes}>Ready Player one</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      {/* ///Banner */}
      <Carousel
        data={getDataTotal(dataTotal, dataTotalDetail)}
        renderItem={renderItemCarousel}
        sliderWidth={width}
        itemWidth={width - 100}
        layout={'default'}
        activeSlideAlignment={'center'}
        inactiveSlideScale={0.9}
        slideStyle={{ justifyContent: 'center', marginTop: 100 }}
      />
    </View>
  );
};
export default Home;
