import React, { Component } from 'react';
import { Platform, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class NavBarTouchableItem extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render() {
    let topBarItemHolderNative = styles.topBarItemHolderAndroid;
    if (Platform.OS === 'ios') {
      topBarItemHolderNative = styles.topBarItemHolderIOS;
    }
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={this.props.underlayColor}
        ref={component => this._root = component}
        style={[styles.topBarItemHolder, topBarItemHolderNative, this.props.style]}
      >
        {this.props.children}
      </TouchableHighlight>
    );
  }
}

NavBarTouchableItem.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
  underlayColor: PropTypes.string,
  onPress: PropTypes.func,
};
