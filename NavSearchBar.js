import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import NavBarTouchableItem from './NavBarTouchableItem';

export default class NavSearchBar extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }
  focus() {
    this.SearchInput.focus();
  }
  render() {
    // <Icon name="md-search" size={24} color="#9B9B9B" />
    let topBarHolderNative = styles.topBarHolderAndroid;
    let topBarNative = styles.topBarAndroid;
    if (Platform.OS === 'ios') {
      topBarHolderNative = styles.topBarHolderIOS;
      topBarNative = styles.topBarIOS;
    }
    return (
      <View style={[styles.topBarHolder, topBarHolderNative]}>
        <View style={[styles.topBar, { alignItems: 'center' }, topBarNative, this.props.style]}>
          <NavBarTouchableItem
            style={{ paddingVertical: 5, paddingRight: 10 }}
            onPress={() => this.SearchInput.focus()}
            underlayColor="#ffffff"
          />
          <TextInput
            autoFocus={this.props.autoFocus}
            autoCorrect={false}
            autoCapitalize="words"
            ref={(c) => { this.SearchInput = c; }}
            clearButtonMode="always"
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChangeText={this.props.onChangeText}
            style={[styles.topBarFlexItemHolder, { paddingVertical: 0, fontSize: 16 }]}
            underlineColorAndroid="transparent"
          />
          <NavBarTouchableItem
            style={{ paddingVertical: 10, paddingLeft: 5 }}
            onPress={this.props.onCancel}
            underlayColor="#FFFFFF"
          >
            <Text style={module.exports.NavButtonTextStyle}>CANCEL</Text>
          </NavBarTouchableItem>
        </View>
      </View>
    );
  }
}

NavSearchBar.propTypes = {
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.object,
  onCancel: PropTypes.func,
};
