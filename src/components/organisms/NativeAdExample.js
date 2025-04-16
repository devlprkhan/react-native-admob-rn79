import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import {
  NativeAd,
  NativeAdView,
  NativeAsset,
  NativeMediaView,
  NativeAssetType,
  NativeAdEventType,
} from 'react-native-google-mobile-ads';
import {theme} from '../../theme';
import {scale} from '../../utils/common';
import {APP_ADS_ID} from '../../constants/constants';

// Icons
import DiagonalArrowIcon from '../../assets/svgs/DiagonalArrow.svg';
import ShareIcon from '../../assets/svgs/SharePost.svg';
import ThumbsUp from '../../assets/svgs/svgComponents/ThumbsUpOld';
import ThumbsDown from '../../assets/svgs/svgComponents/ThumbsDownOld';
import MessageIcon from '../../assets/svgs/svgComponents/Message';

const adUnitId =
  Platform.OS === 'ios'
    ? 'ca-app-pub-3940256099942544/3986624511'
    : 'ca-app-pub-3940256099942544/2247696110';

const NativeAdExample = ({}) => {
  const [nativeAd, setNativeAd] = useState(null);
  const adRequestOptions = {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['skincare', 'tech', 'fitness', 'books'],

    networkExtras: {
      age: '23-27',
      gender: 'male',
      location: 'Karachi, Pakistan',
    },
  };

  useEffect(() => {
    console.log('[NativeAd] Starting ad load...');

    NativeAd.createForAdRequest(adUnitId, adRequestOptions)
      .then(ad => {
        console.log('[NativeAd] Ad loaded successfully:', ad);
        setNativeAd(ad);
      })
      .catch(error => {
        console.error('[NativeAd] Failed to load ad:', error);
      });
  }, []);

  useEffect(() => {
    if (!nativeAd) {
      console.log('[NativeAd] Waiting for ad to be available...');
      return;
    }

    console.log('[NativeAd] Adding click listener');
    const clickListener = nativeAd.addAdEventListener(
      NativeAdEventType.CLICKED,
      () => console.log('[NativeAd] Ad clicked!'),
    );

    return () => {
      console.log('[NativeAd] Cleaning up ad + listener...');
      nativeAd.destroy();
      clickListener.remove();
    };
  }, [nativeAd]);

  if (!nativeAd) {
    console.log('[NativeAd] No ad yet, returning null');
    return (
      <View style={{padding: 20}}>
        <Text style={{color: '#fff'}}>📢 Loading native ad...</Text>
      </View>
    );
  }
  return (
    <NativeAdView nativeAd={nativeAd} style={styles.card}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.profileLeftSec}>
          {nativeAd.icon && (
            <NativeAsset assetType={NativeAssetType.ICON}>
              <Image source={{uri: nativeAd.icon.url}} style={styles.avatar} />
            </NativeAsset>
          )}
          <View style={styles.profileDetails}>
            <NativeAsset assetType={NativeAssetType.HEADLINE}>
              <Text style={styles.profileName}>{nativeAd.headline}</Text>
            </NativeAsset>
            <Text style={styles.sponsored}>Sponsored</Text>
          </View>
        </View>

        <View style={styles.profileRightSec}>
          <DiagonalArrowIcon height={scale(24)} width={scale(24)} />
        </View>
      </View>

      {/* Description */}
      {nativeAd.body && (
        <NativeAsset assetType={NativeAssetType.BODY}>
          <Text style={styles.description}>{nativeAd.body}</Text>
        </NativeAsset>
      )}

      {/* Media (Image or Video) */}
      <NativeMediaView style={styles.media} resizeMode="cover" />

      {/* CTA */}
      <NativeAsset assetType={NativeAssetType.CALL_TO_ACTION}>
        {/* SDK overrides this */}
        <View style={styles.ctaContainer}>
          <Text style={styles.cta}>Learn More</Text>
        </View>
      </NativeAsset>

      {/* Footer */}
      <View pointerEvents="none" style={styles.footerContainer}>
        <View style={styles.likeDislikeContainer}>
          {/* Like/Dislike */}
          <View style={styles.statsInner}>
            <ThumbsUp color={theme.palette.white} />
            <Text style={styles.statsNumber}></Text>
          </View>
          <View style={styles.seprator} />

          <View style={styles.statsInner}>
            <ThumbsDown color={theme.palette.white} />
            <Text style={styles.statsNumber}></Text>
          </View>
        </View>

        <View style={styles.likeDislikeContainer}>
          <MessageIcon />
          <Text style={styles.footerBTNText}>Comments</Text>
        </View>

        <View style={styles.likeDislikeContainer}>
          <ShareIcon />
          <Text style={styles.footerBTNText}>Share</Text>
        </View>
      </View>
    </NativeAdView>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: scale(20, true),
    paddingTop: theme.spacing.med,
    gap: theme.spacing.low,
  },

  // Header
  headerContainer: {
    ...theme.commonStyling.defRowSpcBtw,
    marginBottom: theme.spacing.low,
  },
  profileLeftSec: {
    ...theme.commonStyling.defRow,
    gap: theme.spacing.med,
    flex: 1,
  },
  profileRightSec: {
    height: scale(24),
    width: scale(24),
    borderRadius: theme.radius.r5,
    ...theme.commonStyling.defCenter,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.palette.white,
  },
  sponsored: {
    marginTop: scale(2),
    color: `${theme.palette.white}70`,
    fontSize: 12,
    fontWeight: '400',
  },
  avatar: {
    width: scale(44),
    height: scale(44),
    borderRadius: theme.radius.r4,
  },

  // Ad Body
  description: {
    fontSize: 16,
    color: theme.palette.white,
  },

  // Media
  media: {
    width: scale(350, true),
    aspectRatio: 16 / 9,
    borderRadius: theme.radius.r0,
    overflow: 'hidden',
    alignSelf: 'center',
  },

  // Footer
  footerContainer: {
    opacity: 0.5,
    ...theme.commonStyling.defRowSpcBtw,
    marginTop: theme.spacing.low - 4,
  },

  likeDislikeContainer: {
    height: scale(24),
    paddingVertical: theme.spacing.low - 4,
    paddingHorizontal: theme.spacing.low,
    backgroundColor: theme.palette.secondary,
    gap: theme.spacing.low - 2,
    borderRadius: theme.radius.r5,
    ...theme.commonStyling.defRow,
  },
  statsInner: {
    gap: theme.spacing.low - 4,
    ...theme.commonStyling.defRow,
  },
  statsNumber: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.palette.white,
  },
  seprator: {
    height: scale(14),
    width: scale(1),
    backgroundColor: theme.palette.gray,
  },
  footerBTNText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.palette.white,
  },

  // CTA Button
  ctaContainer: {
    paddingVertical: theme.spacing.low,
    backgroundColor: theme.palette.secondary,
    borderRadius: theme.radius.r1,
  },
  cta: {
    textAlign: 'center',
    color: theme.palette.white,
    fontSize: 14,
    color: theme.palette.white,
  },
});

NativeAdExample.defaultProps = {
  AD_UNIT_ID: APP_ADS_ID,
};

export default NativeAdExample;
