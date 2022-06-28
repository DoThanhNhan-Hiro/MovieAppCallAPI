import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
const dataImg = [
  require('../images/home.png'),
  require('../images/Play.png'),
  require('../images/profile.png'),
];
const dataImgForcus = [
  require('../images/HomeForcus.png'),
  require('../images/PlayForcus.png'),
  require('../images/profile.png'),
];
const Tabbar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', flex: 1, height: 70 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            disabled={index == 2}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 16,
            }}>
            <Image
              source={isFocused ? dataImgForcus[index] : dataImg[index]}
              style={{ height: 50, width: 50 }}/>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default Tabbar;
