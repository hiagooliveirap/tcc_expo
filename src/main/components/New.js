import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { faCentercode } from '@fortawesome/free-brands-svg-icons';

export default function New({item, navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('ItemProduto', {item})} style={styles.container}>
      <Image
        source={item.img}
        style={styles.cover}
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.nome}</Text>

        <View style={styles.dot}></View>
        <View>
          <Text style={styles.badge}>Novo</Text>
        </View>
      </View>

      <Text style={styles.description}>
        {item.description}
      </Text>

      <View style={styles.footer}>
        <View style={{ width: '80%' }}>
          <Text style={styles.price}>{item.valor}</Text>
        </View>
        <View style={{ width: '20%' }}>
          <Ionicons name='ios-add-circle' size={24} color='black' />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#fff',
    height: 250,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginRight: 30,
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
    fontSize: 12,
    color: '#4f4a4as',    
  },
  badge: {
    color: '#1BAC4B',
    fontSize: 9,
    fontFamily: 'Poppins_600SemiBold',
    width: 40,
    paddingTop: 3,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#E8F7ED',
  },
  description: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 9,
    color: '#4f4a4a',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    width: '100%',
  },
});