import React from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';

const Favorites = (props) => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Избранное</Text>
      <Text style={styles.subText}>Вы не добавили ни одного фильма</Text>
      <Text style={styles.findFilm}>Найти любимые фильмы</Text>
      <Image
        style={styles.img}
        source={require('../../assets/img/Favorites.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height,
    paddingTop: 65,
    backgroundColor: '#191A25',
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 43,
    alignSelf: 'flex-start',
    color: '#E7EDFF',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto-Bold',
  },
  subText: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 20,
    alignSelf: 'flex-start',
    color: '#E7EDFF',
    marginBottom: 14,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
  },
  findFilm: {
    color: '#6C63FF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
  },
  img: {
    alignSelf: 'center',
    marginTop: 100,
  },
});

export default Favorites;
