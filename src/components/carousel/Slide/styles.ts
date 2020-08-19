import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  slide: {
    // paddingHorizontal: 20,
    paddingBottom: 10,
    // paddingTop: 20,
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    // height:  200,
    height:  Dimensions.get('window').height
  },
  slideText: {
    width: '100%',
    // textAlign: 'center',
    fontSize: 20,
    lineHeight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f3f3'
  }
});

export default styles;