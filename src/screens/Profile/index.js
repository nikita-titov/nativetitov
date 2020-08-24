/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

// redux and actions
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../actions/actions.js';

const Profile = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.auth);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (store.current_user) {
      setName(store.current_user.name);
      setUsername(store.current_user.username);
    }
  }, []);

  const submit = () => {
    AsyncStorage.getItem('session_id').then((session_id) => {
      dispatch(logout(props.navigation, session_id));
    });
  };

  return (
    <View style={styles.center}>
      <View style={styles.img}>
        <Image
          style={styles.img}
          source={require('../../assets/img/user.png')}
        />
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.email}>{username}</Text>
      <View style={styles.buttonBlock}>
        <Button
          style={styles.button}
          contentStyle={{height: 56}}
          mode="contained"
          color="#2A2E42"
          onPress={submit}>
          <Text style={styles.btnText}>Выйти</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    backgroundColor: '#191A25',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    paddingTop: 151,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 13,
    alignSelf: 'center',
    color: '#E7EDFF',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto-Bold',
  },
  img: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 27,
  },
  email: {
    fontSize: 16,
    lineHeight: 20,
    color: '#656D8A',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Roboto-Bold',
  },
  buttonBlock: {
    paddingLeft: 16,
    paddingRight: 16,
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 190,
  },
  btnText: {
    color: '#6C63FF',
  },
  button: {
    height: 56,
    fontSize: 16,
    color: '#2A2E42',
  },
});

export default Profile;
