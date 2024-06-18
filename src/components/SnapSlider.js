'use client';
import React from 'react';

// External Components
import { Box } from 'theme/components';

const SnapSliderContext = React.createContext();

const useSnapSliderContext = () => React.useContext(SnapSliderContext);

const SnapSliderProvider = ({
  children,
  sliderItemClassName,
  sliderContainerClassName
}) => {
  const [sliderItemsPosition, setSliderItemPosition] = React.useState([]);

  React.useEffect(() => {
    const updateSliderItemsPosition = () => {
      const sliderItems = [
        ...document.querySelectorAll(
          `${
            sliderItemClassName
              ? '.' + sliderItemClassName
              : '.__snap-slider-item'
          }`
        )
      ];

      const sliderItemsXPosition = sliderItems?.map((item) => [
        item.offsetLeft,
        item.offsetLeft + item.offsetWidth
      ]);
      setSliderItemPosition(sliderItemsXPosition);
    };

    // Call the function at the first load
    updateSliderItemsPosition();

    // response to window resize
    const targetNode = document.body;
    const handleResize = () => {
      // it refresh for both height and width resize
      updateSliderItemsPosition();
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(targetNode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SnapSliderContext.Provider
      value={{
        sliderItemsPosition,
        setSliderItemPosition,
        sliderItemClassName,
        sliderContainerClassName
      }}>
      {children}
    </SnapSliderContext.Provider>
  );
};

export const SnapSliderContainer = ({
  sx,
  children,
  // this uniq className required when we have multiple snap slider in a page
  className,
  sliderItemClassName,
  navigationSx,
  containerSx,
  componentClassName,
  ...props
}) => {
  return (
    <SnapSliderProvider
      sliderItemClassName={sliderItemClassName}
      sliderContainerClassName={className}>
      <Box
        className={`__snap-slider ${componentClassName}`}
        sx={{
          mx: [
            'fullWidthMinusMarginPhone',
            'fullWidthMinusMarginTabletPortrait',
            0,
            0
          ],
          gridColumn: ['1/13', '1/25', '1/25', '1/25'],
          position: 'relative',
          ...sx
        }}
        {...props}>
        <Box
          as="ul"
          className={`${className ? className : '__slider-item-container'}`}
          data-snap-slider="offer-slider"
          sx={{
            listStyle: 'none',
            whiteSpace: 'nowrap',
            overflow: 'auto',
            px: [`phonePageMargin`, 'tabletPortraitPageMargin', 0, 0],
            // ? make the shadow still visible
            py: '3rem',
            my: '-3rem',

            // Hide The Scroll Bar
            /* Hide scrollbar for Chrome, Safari and Opera */
            '&::-webkit-scrollbar': {
              display: 'none'
            },
            '-ms-overflow-style': 'none', //IE and Edge
            scrollbarWidth: 'none', // Firefox

            // Snap Scroll Effect
            scrollSnapType: 'x mandatory',
            overscrollBehaviorX: 'contain',
            scrollPadding: [
              `phonePageMargin`,
              'tabletPortraitPageMargin',
              0,
              0
            ],
            position: 'relative',
            ...containerSx
          }}>
          {children}
        </Box>
      </Box>
    </SnapSliderProvider>
  );
};

export const SnapSliderItem = ({ children, sx, index, className }) => {
  const sliderProps = useSnapSliderContext();

  const handleItemClick = () => {
    if (!sliderProps) return;
    const sliderContainer = document.querySelector(
      `${
        sliderProps?.sliderContainerClassName
          ? '.' + sliderProps?.sliderContainerClassName
          : '.__slider-item-container'
      }`
    );
    sliderContainer.scrollTo({
      left: sliderProps?.sliderItemsPosition[index]?.[0],
      behavior: 'smooth'
    });
  };

  return (
    <Box
      className={
        sliderProps?.sliderItemClassName
          ? sliderProps?.sliderItemClassName
          : `__snap-slider-item ${className}`
      }
      as="li"
      onClick={handleItemClick}
      sx={{
        display: 'inline-block',
        scrollSnapAlign: 'start',
        ...sx
      }}>
      {children}
    </Box>
  );
};
