import * as React from 'react';
import {
  // NavigationContainerRef,
  StackActions,
  NavigationAction,
  createNavigationContainerRef,
} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

export function navigate(name, params = {}) {
  navigationRef?.navigate(name, params);
}
export function dispatch(action) {
  navigationRef?.dispatch(action);
}
export function replace(name, params = {}) {
  navigationRef?.dispatch(StackActions.replace(name, params));
}
export function push(name, params = {}) {
  navigationRef?.dispatch(StackActions.push(name, params));
}
export function goBack() {
   navigationRef.current?.goBack();
}
export default {
  navigate,
  dispatch,
  replace,
  push,
  goBack,
};
