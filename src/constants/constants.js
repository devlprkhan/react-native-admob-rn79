import {Platform} from 'react-native';

//* Fonts
export const BOLD = 'TTCommons-Bold';
export const SEMI_BOLD = 'TTCommons-DemiBold';
export const MEDIUM = 'TTCommons-Medium';
export const REGULAR = 'TTCommons-Regular';
export const LIGHT = 'TTCommons-Light';

//* Others
export const PRIMARY = 'primary';
export const SECONDARY = 'secondary';
export const TERTIARY = 'tertiary';
export const QUATERNARY = 'quaternary';
export const UNDERLINE = 'underline';

export const LARGE = 'large';
export const SMALL = 'small';

export const DESIGN_WIDTH = 375;
export const DESIGN_HEIGHT = 812;

export const ACTIVE_OPACITY = 0.6;
export const IMG_PLACEHOLDER =
  'https://firebasestorage.googleapis.com/v0/b/bolonow-7b2c0.appspot.com/o/Public%2Fimg_placeholder.png?alt=media&token=cfc28746-e782-451c-aebd-94816c947988';

export const DATE = 'date';
export const TIME = 'time';
export const DATETIME = 'datetime';

export const IOS = 'ios';
export const ANDROID = 'android';

export const ROW = 'row';
export const COLUMN = 'column';
export const ROW_REVERSE = 'row-reverse';

export const MIN_ZOOM_LEVEL_MAP = 15;
export const MAX_ZOOM_LEVEL_MAP = 9.8;

export const APP_NAME = 'TruHive';
export const APP_DOMAIN_NAME = 'https://www.truhive.com';
export const APP_ADS_ID =
  Platform.OS === 'ios'
    ? 'ca-app-pub-1940380438583180/6139695067'
    : 'ca-app-pub-1940380438583180/7324083522';

export const USER_IMG_PLACEHOLDER = require('../assets/images/PersonPlaceHolder.png');
export const NO_IMG_PLACEHOLDER = require('../assets/images/NoImagePlaceHolders.png');

export const AD_INTERVAL = 7;
export const MIN_POSTS_FOR_AD = 5;
export const MAX_ADS_PER_FEED = 4;

//* Screens Names
export const Screens = {
  Home: 'Home',
  NativeAD: 'Native AD Screen',
  Dummy: 'Dummy Screen',
};
