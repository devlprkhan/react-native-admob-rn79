import { scale } from '../utils/common';
import {
  BOLD,
  SEMI_BOLD,
  MEDIUM,
  REGULAR,
  LIGHT,
} from '../constants/constants';
import { RAD_0, RAD_1, RAD_2, RAD_3, RAD_4, RAD_R } from './radius';
import { SCALE_0, SCALE_1, SCALE_2, SCALE_3 } from './spacings';
import {
  FONT_SIZE_0,
  FONT_SIZE_S_1,
  FONT_SIZE_1,
  FONT_SIZE_2,
  FONT_SIZE_3,
  FONT_SIZE_4,
  FONT_SIZE_5,
  LINE_HEIGHT_0,
  LINE_HEIGHT_S_1,
  LINE_HEIGHT_1,
  LINE_HEIGHT_2,
  LINE_HEIGHT_3,
  LINE_HEIGHT_4,
} from './typography';
import {
  BACKGROUND,
  TERTIARY,
  BLACK,
  ERROR,
  GRAY,
  GS_1,
  GS_2,
  GS_3,
  PRIMARY,
  PRIMARY_VI,
  PSV_1,
  PSV_2,
  PSV_3,
  PS_1,
  PS_2,
  PS_3,
  SECONDARY,
  WARNING,
  WHITE,
  WHITE_DIM,
  BG_S_1,
  BG_S_2,
  BG_S_3,
  HIGHLIGHT,
  PRIMARY_RGB,
} from './colors';

const theme = {
  palette: {
    primary: PRIMARY,
    primary_vi: PRIMARY_VI,
    secondary: SECONDARY,
    bg: BACKGROUND,
    tertiary: TERTIARY,
    highlight: HIGHLIGHT,

    //? Shades
    primary_s1: PS_1,
    primary_s2: PS_2,
    primary_s3: PS_3,

    primary_vi_s1: PSV_1,
    primary_vi_s2: PSV_2,
    primary_vi_s3: PSV_3,

    gray_s1: GS_1,
    gray_s2: GS_2,
    gray_s3: GS_3,

    bg_s1: BG_S_1,
    bg_s2: BG_S_2,
    bg_s3: BG_S_3,

    white_dim: WHITE_DIM,

    //* Commons
    white: WHITE,
    black: BLACK,
    gray: GRAY,
    transparent: 'transparent',

    //* Others
    error: ERROR,
    warning: WARNING,
  },
  typography: {
    size: {
      heading: {
        h0: FONT_SIZE_S_1,
        h1: FONT_SIZE_0,
        h2: FONT_SIZE_1,
        h3: FONT_SIZE_2,
      },
      body: {
        b1: FONT_SIZE_3,
        b2: FONT_SIZE_4,
        b3: FONT_SIZE_5,
      },
      //TODO: If required define the "BTN, ..." fonts sizes here from Global VAR'S
    },
    line_height: {
      l0: LINE_HEIGHT_S_1,
      l1: LINE_HEIGHT_0,
      l2: LINE_HEIGHT_1,
      l3: LINE_HEIGHT_2,
      l4: LINE_HEIGHT_3,
      l5: LINE_HEIGHT_4,
    },
    type: {
      light: LIGHT,
      reg: REGULAR,
      med: MEDIUM,
      semi: SEMI_BOLD,
      bold: BOLD,
    },
    common: {
      h0: {
        fontFamily: BOLD,
        fontSize: FONT_SIZE_S_1,
        lineHeight: LINE_HEIGHT_S_1,
      },
      h1: {
        fontFamily: BOLD,
        fontSize: FONT_SIZE_0,
        lineHeight: LINE_HEIGHT_0,
      },
      h2: {
        fontFamily: BOLD,
        fontSize: FONT_SIZE_1,
        lineHeight: LINE_HEIGHT_1,
      },
      h3: {
        fontFamily: BOLD,
        fontSize: FONT_SIZE_2,
        lineHeight: LINE_HEIGHT_2,
      },
      b1: {
        fontFamily: REGULAR,
        fontSize: FONT_SIZE_3,
        lineHeight: LINE_HEIGHT_2,
      },
      b2: {
        fontFamily: REGULAR,
        fontSize: FONT_SIZE_4,
        lineHeight: LINE_HEIGHT_3,
      },
      b3: {
        fontFamily: REGULAR,
        fontSize: FONT_SIZE_5,
        lineHeight: LINE_HEIGHT_4,
      },
      b4: {
        fontFamily: SEMI_BOLD,
        fontSize: FONT_SIZE_4,
        lineHeight: LINE_HEIGHT_3,
      },
      b5: {
        fontFamily: LIGHT,
        fontSize: FONT_SIZE_5,
        lineHeight: LINE_HEIGHT_4,
      },
    },
  },
  spacing: {
    low: SCALE_0,
    med: SCALE_1,
    high: SCALE_2,
    max: SCALE_3,
  },
  radius: {
    r0: RAD_0,
    r1: RAD_1,
    r2: RAD_2,
    r3: RAD_3,
    r4: RAD_4,
    r5: RAD_R,
  },
  //TODO: Check if the "scale"  makes an issue while developing the UI use the "mixin" and vise versa
  commonStyling: {
    defShadow: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.22,
      shadowRadius: 9.22,
      elevation: 12,
    },
    dexTextShadow: {
      textShadowColor: '#00000050',
      textShadowOffset: { width: 0, height: 4 },
      textShadowRadius: 6,
    },
    defFlexWithSpc: {
      flex: 1,
      padding: scale(16),
    },
    flex: {
      flex: 1,
    },
    defRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    defCenter: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    defRowSpcBtw: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    defColSpcBtw: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    defColSpcEven: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    defRowSpcEven: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    defFrame: {
      flex: 1,
      padding: 16,
    },
    primaryBtnShadow: {
      shadowColor: '#00000025',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
    },
  },
};

// export const BG = require('../assets/others/Splash.jpg');
export default theme;
