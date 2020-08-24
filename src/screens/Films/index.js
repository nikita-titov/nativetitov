/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

const Films = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    // check session_id in Async storage
    props.navigation.navigate('Auth');
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/img/backgroundFilm.png')}
      style={styles.image}>
      <View style={styles.center}>
        <Text style={styles.title}>
          Найдем любой {'\n'}
          фильм на ваш {'\n'}
          вкус
        </Text>
        <Searchbar
          placeholder="Поиск фильмов"
          style={styles.search}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height,
    paddingTop: 150,
  },
  search: {
    marginBottom: 10,
    marginTop: 24,
    width: Dimensions.get('window').width / 1.3,
    backgroundColor: 'rgba(40, 44, 63, 0.9)',
    color: 'rgba(40, 44, 63, 0.9)',
    height: 56,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    marginBottom: 33,
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
    marginBottom: 22,
    fontFamily: 'Roboto-Bold',
    fontWeight: 'normal',
  },
  image: {
    flex: 1,
    backgroundColor: '#191A25',
    resizeMode: 'cover',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    paddingLeft: 16,
  },
});

export default Films;
