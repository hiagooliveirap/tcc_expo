import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';


export default function SwiperComponent() {
  return (
    <Swiper
      style={styles.wrapper}
      autoplay={true}
      autoplayTimeout={4}
      dotStyle={{
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
      activeDotColor="#FFF"
      activeDotStyle={{
        borderColor: "#000",
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10,
      }}
    >
      <View style={styles.slide}>
        <Image
          source={require('../../../assets/food/banner-1.jpeg')}
          style={styles.imagens}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../../../assets/food/banner-2.jpeg')}
          style={styles.imagens}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require('../../../assets/food/banner-3.jpeg')}
          style={styles.imagens}
        />
      </View>

    </Swiper>

  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: -10,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
    // elevation: 2,

  },
  imagens: {
    width: '90%',
    height: 150,
    borderRadius:20
  }
})

