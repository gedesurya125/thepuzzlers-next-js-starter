import { fullWidthMinusMargins } from '@thepuzzlers/pieces';
import { getOverlapBackgroundWidth } from './getOverlapBackgroundWidth';

export const sizes = {
  phoneSectionBackground: getOverlapBackgroundWidth('max', 0),
  tabletPortraitSectionBackground: getOverlapBackgroundWidth(4.3, 1),
  tabletLandscapeSectionBackground: getOverlapBackgroundWidth(7.1, 2),
  desktopSectionBackground: getOverlapBackgroundWidth(4.7, 3),

  tabletPortraitSectionBackgroundV2: getOverlapBackgroundWidth(3.3, 1),
  tabletLandscapeSectionBackgroundV2: getOverlapBackgroundWidth(4.7, 2),

  tabletPortraitFullScreen: `calc(100% - 2 * ${fullWidthMinusMargins[1]})`,
  tabletLandscapeFullScreen: `calc(100% - 2 * ${fullWidthMinusMargins[2]})`
};

export const space = {
  fullWidthMinusMarginPhone: fullWidthMinusMargins[0],
  fullWidthMinusMarginTabletPortrait: fullWidthMinusMargins[1],
  fullWidthMinusMarginsTabletLandscape: fullWidthMinusMargins[2],
  fullWidthMinusMarginsDesktop: fullWidthMinusMargins[3],

  phonePageMargin: `calc( -1 * ${fullWidthMinusMargins[0]})`,
  tabletPortraitPageMargin: `calc( -1 * ${fullWidthMinusMargins[1]})`,
  tabletLandscapePageMargin: `calc( -1 * ${fullWidthMinusMargins[2]})`,
  desktopPageMargin: `calc( -1 * ${fullWidthMinusMargins[3]})`
};
