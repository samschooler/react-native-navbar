import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class NavBarLeft extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  render() {
    return (
      <View
        ref={component => this._root = component}
        style={[styles.topBarItemHolderHolder, { alignItems: 'flex-start' }, this.props.style]}
      >{this.props.children}</View>
    );
  }
}

NavBarLeft.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};
