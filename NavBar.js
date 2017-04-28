import React from 'react';
import { View, Platform } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const NavBar = (props) => {
  let topBarHolderNative = styles.topBarHolderAndroid;
  let topBarNative = styles.topBarAndroid;
  if (Platform.OS === 'ios') {
    topBarHolderNative = styles.topBarHolderIOS;
    topBarNative = styles.topBarIOS;
  }
  return (
    <View style={[styles.topBarHolder, topBarHolderNative]}>
      <View style={[styles.topBar, topBarNative, props.style]}>
        {props.children}
      </View>
    </View>
  );
};

NavBar.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

export const NavButtonTextStyle = {
  fontSize: 13,
  color: '#3B3B3B',
};

export default NavBar;
