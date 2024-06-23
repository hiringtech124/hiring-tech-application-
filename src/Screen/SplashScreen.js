import React from 'react';
import { View, Image, ImageBackground, StyleSheet } from 'react-native';
import { wpx,hpx,wp } from '../../component/responsive';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
          <Image
            source={require('../Assets/splash.png')}
            resizeMode="contain"
            style={styles.mainIcon}
          />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F7FAF8',
  },
  mainIcon: {
    width: '100%',
  },
});

export default SplashScreen;
