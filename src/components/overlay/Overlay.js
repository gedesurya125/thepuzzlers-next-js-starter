'use client';
// Inspired by https://github.com/segmentio/evergreen/blob/9fe04653cb11aff5d2604ba07308957d37a637f2/src/overlay/src/Overlay.js
import React, { memo, useEffect } from 'react';
import { Box } from 'theme/components';
import { Portal } from './Portal';
import safeInvoke from './utils/safeInvoke';
import preventBodyScroll from './utils/preventBodyScroll';

export const Overlay = memo(
  ({
    children,
    containerSx,
    preventBodyScrolling,
    shouldCloseOnBackdropClick,
    shouldCloseOnEscapePress,
    handleClose
  }) => {
    const close = () => {
      safeInvoke(handleClose);
    };

    const onEsc = (event) => {
      if (event.key === 'Escape' && shouldCloseOnEscapePress) {
        close();
      }
    };

    const handleBodyScroll = (preventScroll) => {
      if (preventBodyScrolling) {
        preventBodyScroll(preventScroll);
      }
    };

    useEffect(() => {
      handleBodyScroll(true);
      // TODO: bringFocusInside()
      document.body.addEventListener('keydown', onEsc, false);

      return () => {
        // Allow body to scroll and remove event listeners when component is unmounted
        handleBodyScroll(false);
        // TODO: bringFocusOutside()
        document.body.removeEventListener('keydown', onEsc, false);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleBackdropClick = (event) => {
      if (event.target !== event.currentTarget || !shouldCloseOnBackdropClick) {
        return;
      }

      close();
    };

    return (
      <Portal>
        <Box
          id="overlay-background"
          onClick={handleBackdropClick}
          sx={{
            position: 'fixed',
            zIndex: 20,
            top: 0,
            left: 0,

            // default overlay
            display: 'block',
            width: '100%',
            height: '100%',

            // background color
            bg: 'background.overlay',
            ...containerSx
          }}>
          {children}
        </Box>
      </Portal>
    );
  }
);

Overlay.displayName = 'MemoizedOverlay';
