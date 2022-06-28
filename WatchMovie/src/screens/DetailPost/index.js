import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {endColor, firstColor, returnImage, white} from '../../utilities/data';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaskedView from '@react-native-community/masked-view';
import HeaderDetail from './HeaderDetail';
import InfoPost from './InfoPost';
import DesPost from './DesPost';
import RelatedMovies from './RelatedMovies';
import {goBack, navigate} from '../../navigations/NavigationService';
const {width, height} = Dimensions.get('window');
const DetailPost = ({navigation, route}) => {
  const [dataDetailChoose, setDataDetailChoose] = useState(
    route?.params?.dataDetail,
  );
  useEffect(() => {
    setDataDetailChoose(route?.params?.dataDetail);
  }, [route?.params?.dataDetail]);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{uri: returnImage(dataDetailChoose?.poster_path)}}
        style={styles.backgroundImgae}>
        <View style={styles.viewMaker}>
          <MaskedView
            style={styles.viewItem}
            maskElement={
              <FontAwesome5
                name={'play'}
                size={24}
                color={white}
                style={{alignSelf: 'center', marginTop: 18}}
              />
            }>
            <LinearGradient colors={[firstColor, endColor]} style={{flex: 1}} />
          </MaskedView>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', top: 10, left: 20}}
          onPress={() => goBack()}>
          <MaterialIcons
            name={'arrow-back-ios'}
            size={24}
            color={white}
            style={{alignSelf: 'center', marginTop: 18}}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <HeaderDetail dataDetailChoose={dataDetailChoose} />
        <InfoPost dataDetailChoose={dataDetailChoose} />
        <DesPost dataDetailChoose={dataDetailChoose} />
        <RelatedMovies
          dataDetailChoose={dataDetailChoose}
          onChooseItem={val => {
            setDataDetailChoose(val);
          }}
        />
      </View>
      <View style={{height: 50}}></View>
    </ScrollView>
  );
};
export default DetailPost;
