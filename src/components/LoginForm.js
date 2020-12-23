/* eslint-disable no-alert */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import auth from '@react-native-firebase/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onButtonPress = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(onLoginSucces())
      .catch(() => {
        alert('Catch e girildi');
        console.log('Catch e girildi');
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            console.log('Kullanıcı başarı ile oluşturuldu');
          })
          .catch((err) => {
            if (err.code === 'auth/invalid-email') {
              //alert('Geçersiz kullanıcı adı veya şifre!');
              onLoginFail();
            }
          });
      });
    console.log(email + password);
  };

  const onLoginSucces = () => {
    setError('');
    setEmail('');
    setPassword('');
    setLoading(false);
    console.log('Giriş başarılı');
  };

  const onLoginFail = () => {
    setError('Authentication Failed');
    setLoading(false);
    console.log('Authentication Failed');
  };

  const renderButton = () => {
    if (loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={onButtonPress}>Log in </Button>;
  };

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="user@gmail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry={true}
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={(passwd) => setPassword(passwd)}
        />
      </CardSection>
      <CardSection>
        {error ? <Text style={{color: 'red'}}> {error} </Text> : null}
        {renderButton()}
      </CardSection>
    </Card>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
