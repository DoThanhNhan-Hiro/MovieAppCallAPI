import React from 'react';
import {TransitionPresets} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {Platform, StyleSheet, View} from 'react-native';
import Home from '../screens/Home';
import SearchPost from '../screens/SearchPost';
import ScreenItemPicker from '../components/PickerBase/screenItemPicker';
import DetailPost from '../screens/DetailPost';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './Tabbar';
import {background} from '../utilities/data';
enableScreens();

const rootStackBottom = createBottomTabNavigator();
function BottomNavigation() {
  const TransitionPreset =
    Platform.OS === 'ios' ? TransitionPresets.ModalSlideFromBottomIOS : {};
  const navigationOptions = {
    headerShown: false,
    ...TransitionPreset,
    gestureResponseDistance: {
      vertical: 800,
    },
  };
  return (
    <rootStackBottom.Navigator
      tabBar={props => (
        <View style={styles.navigatorContainer}>
          <TabBar {...props} />
        </View>
      )}
      initialRouteName={'Home'}
      screenOptions={navigationOptions}>
      <rootStackBottom.Screen component={Home} name="Home" />
      <rootStackBottom.Screen component={SearchPost} name="SearchPost" />
      {/* <rootStackBottom.Screen
        component={ScreenItemPicker}
        name="ScreenItemPicker"
      /> */}
      <rootStackBottom.Screen name="DetailPost" component={DetailPost} />
    </rootStackBottom.Navigator>
  );
}

export default BottomNavigation;
const styles = StyleSheet.create({
  navigatorContainer: {
    backgroundColor: background,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
});
