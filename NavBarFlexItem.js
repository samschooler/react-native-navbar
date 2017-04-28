import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class NavBarFlexItem extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render() {
    let topBarFlexItemHolderNative = styles.topBarFlexItemHolderAndroid;
    if (Platform.OS === 'ios') {
      topBarFlexItemHolderNative = styles.topBarFlexItemHolderIOS;
    }
    return (
      <View
        ref={component => this._root = component}
        style={[styles.topBarFlexItemHolder, topBarFlexItemHolderNative, this.props.style]}
      >
        {this.props.children}
      </View>
    );
  }
}

NavBarFlexItem.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};
