import {Dimensions, Platform} from 'react-native';

//* Define your design dimensions (your reference design)
const DESIGN_WIDTH = 390;
const DESIGN_HEIGHT = 844;

//* Utility function to scale dimensions for responsiveness
export const scale = (number, isWidth) => {
  //* Get the device's window dimensions
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  //* Determine the appropriate scaling factor based on the platform (iOS or Android)
  const scaleFactor =
    Platform.OS === 'ios'
      ? deviceWidth / DESIGN_WIDTH
      : deviceWidth / DESIGN_WIDTH;

  //* Calculate the scaled dimension based on whether it's width or height
  return isWidth ? number * scaleFactor : number * scaleFactor;
};
