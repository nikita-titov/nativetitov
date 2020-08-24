/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {isEmpty} from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

// redux and actions
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../actions/actions.js';
import {useFocusEffect} from '@react-navigation/native';

const Auth = (props) => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.auth);
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [activeBtn, setActiveBtn] = useState(false);

  const colorBtn = activeBtn ? '#FE4E27' : 'rgba(35, 38, 54, 0.9)';
  const colorBtnText = activeBtn ? 'white' : '#656D8A';
  const passIcon = showPass ? 'eye-outline' : 'eye-off-outline';

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('session_id').then((session_id) => {
        if (session_id) {
          props.navigation.navigate('Films');
        } else {
          props.navigation.navigate('Auth');
        }
      });
      return () => {
        setLogin('');
        setPass('');
      };
    }, []),
  );

  useEffect(() => {
    if (!isEmpty(pass) && !isEmpty(login)) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [pass, login]);

  const submit = () => {
    if (!isEmpty(pass) && !isEmpty(login)) {
      dispatch(loginUser(login, pass, props.navigation));
    }
  };

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Добро пожаловать!</Text>
      <Text style={styles.subText}>
        Укажите логин и пароль, которые вы использовали для входа
      </Text>
      <TextInput
        value={login}
        onChangeText={(text) => setLogin(text)}
        style={styles.input}
        label="Логин"
        mode="outlined"
      />
      <TextInput
        right={
          <TextInput.Icon
            style={{paddingTop: 5}}
            color="#656D8A"
            onPress={() => setShowPass(!showPass)}
            name={passIcon}
          />
        }
        value={pass}
        secureTextEntry={showPass}
        onChangeText={(text) => setPass(text)}
        style={styles.input}
        label="Пароль"
        mode="outlined"
      />
      {store.isError && (
        <Text style={styles.error}>Неверный логин или пароль</Text>
      )}
      <View style={styles.buttonBlock}>
        <Button
          style={styles.button}
          contentStyle={{height: 56}}
          mode="contained"
          color={colorBtn}
          onPress={submit}>
          <Text style={{color: colorBtnText}}>Войти</Text>
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
  input: {
    marginBottom: 10,
    marginTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    width: Dimensions.get('window').width,
    backgroundColor: '#191A25',
    color: '#656D8A',
    height: 56,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    marginLeft: 16,
    marginRight: 16,
    alignSelf: 'flex-start',
    color: '#E7EDFF',
    fontWeight: 'bold',
    marginBottom: 32,
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
  buttonBlock: {
    paddingLeft: 16,
    paddingRight: 16,
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: Dimensions.get('window').height / 15,
  },
  button: {
    height: 56,
    fontSize: 16,
    color: '#656D8A',
  },
  error: {
    fontSize: 16,
    color: '#E1172F',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
});

export default Auth;
