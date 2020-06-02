import {Dimensions, Platform} from 'react-native';
let headerHeight = Platform.OS === 'android' ? 46 : 66;
let footerHeight = 55;

const Constants = {
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get('window').height - headerHeight,
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
};

export default Constants;
