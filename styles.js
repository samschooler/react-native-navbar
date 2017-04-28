import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  topBarHolder: {
    height: 64,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  topBarHolderAndroid: {
    justifyContent: 'center',
    height: 55,
    borderBottomWidth: 0,
    elevation: 4.5,
  },
  topBar: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
  },
  topBarItemHolderHolder: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  topBarItemHolder: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  topBarItemHolderAndroid: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
  },
  topBarFlexItemHolder: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  topBarTitle: {
    fontSize: 18,
    color: '#3B3B3B',
    minWidth: 150,
    textAlign: 'center',
  },
  topBarTitleAndroid: {
    fontSize: 20,
    color: '#3B3B3B',
  },
});
