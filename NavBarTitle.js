import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class NavBarTitle extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render() {
    let topBarTitleNative = styles.topBarTitleAndroid;
    if (Platform.OS === 'ios') {
      topBarTitleNative = styles.topBarTitleIOS;
    }
    return (
      <View ref={component => this._root = component}>
        <Text style={[styles.topBarTitle, topBarTitleNative, this.props.style]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

NavBarTitle.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};
