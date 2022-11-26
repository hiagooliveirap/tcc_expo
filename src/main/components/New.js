import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { faCentercode } from '@fortawesome/free-brands-svg-icons';
import { faBorderNone } from '@fortawesome/free-solid-svg-icons';

export default function New({ item, navigation, id }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ItemProduto', { item, id })} style={styles.container}>
      <Image
        source={{uri: item.proImagem}}
        style={styles.cover}
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.proNome}</Text>

        <View style={styles.dot}></View>
        <View>
          <Text style={styles.badge}>Novo</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{ width: '80%' }}>
          <Text style={styles.price}>R$ {item.proPreco}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#FFF',
    height: 230,
    width: 200,
    // elevation: 2,
    borderRadius: 10,
    borderWidth: 0,
    padding: 15,
    marginRight: 12,
    marginLeft: 2,
    marginBottom: 5,
  },
  cover: {
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 17,
    color: '#4f4a4as',
  },
  badge: {
    color: '#1BAC4B',
    fontSize: 12,
    fontFamily: 'Poppins_600SemiBold',
    width: 50,
    paddingTop: 3,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#E8F7ED',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    width: '100%',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});