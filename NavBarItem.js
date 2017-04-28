import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class NavBarItem extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render() {
    let topBarItemHolderNative = styles.topBarItemHolderAndroid;
    if (Platform.OS === 'ios') {
      topBarItemHolderNative = styles.topBarItemHolderIOS;
    }
    return (
      <View
        ref={component => this._root = component}
        style={[styles.topBarItemHolder, topBarItemHolderNative, this.props.style]}
      >
        {this.props.children}
      </View>
    );
  }
}

NavBarItem.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};
