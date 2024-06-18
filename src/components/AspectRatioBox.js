// This aspect ratio box is created due to safari on ios version lower than 15 didn't support this
// this element support height and width changes
import React from 'react';

// External Components
import { Box } from 'theme/components';

const getHeight = ({ width, aspectRatio }) => {
  return `calc(${width} / ${aspectRatio})`;
};

const getWidth = ({ height, aspectRatio }) => {
  return `calc(${height} * ${aspectRatio})`;
};

const checkForArrayParamsBeforeExecuteCallback = ({
  paramOne,
  paramTwo,
  callback
}) => {
  if (Array.isArray(paramOne) && Array.isArray(paramTwo)) {
    return paramOne.map((paramOneValue, index) =>
      callback(paramOneValue, paramTwo[index])
    );
  }

  if (Array.isArray(paramOne)) {
    return paramOne.map((paramOneValue) => callback(paramOneValue, paramTwo));
  }

  if (Array.isArray(paramTwo)) {
    return paramTwo.map((paramTwoValue) => callback(paramOne, paramTwoValue));
  }

  return callback(paramOne, paramTwo);
};

const getHeights = ({ width, aspectRatio }) => {
  return checkForArrayParamsBeforeExecuteCallback({
    paramOne: width,
    paramTwo: aspectRatio,
    callback: (width, aspectRatio) => getHeight({ width, aspectRatio })
  });
};

const getWidths = ({ height, aspectRatio }) => {
  return checkForArrayParamsBeforeExecuteCallback({
    paramOne: height,
    paramTwo: aspectRatio,
    callback: (height, aspectRatio) => getWidth({ height, aspectRatio })
  });
};

const getAspectRatioStyles = ({ height, width, aspectRatio }) => {
  if (height) return { width: getWidths({ height, aspectRatio }) };
  if (width) return { pt: getHeights({ width, aspectRatio }) };
};

// eslint-disable-next-line react/display-name
export const AspectRatioBox = React.forwardRef(
  ({ sx, aspectRatio, children, ...props }, ref) => {
    const { height, width } = { height: null, width: null, ...sx };

    // if all height or width iw filled return the style and ignore the aspect ratio, it mean user on purpose to make the width and height
    const boxStyles =
      height && width
        ? sx
        : { ...sx, ...getAspectRatioStyles({ height, width, aspectRatio }) };

    return (
      <Box
        ref={ref}
        sx={{
          ...boxStyles,
          position: 'relative'
        }}
        {...props}>
        {children}
      </Box>
    );
  }
);
