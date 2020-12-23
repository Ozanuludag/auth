/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

const App = () => {
  /**
   * const firebaseConfig = {
    apiKey: 'AIzaSyC4rChiUqlBwSSnrL1p-6V8ezm9uUw6Owc',
    authDomain: 'authentication-47edb.firebaseapp.com',
    projectId: 'authentication-47edb',
    storageBucket: 'authentication-47edb.appspot.com',
    messagingSenderId: '231776881427',
    appId: '1:231776881427:web:ab0c481c48dbd1891d68e6',
    measurementId: 'G-9QWKJQTTEK',
  };
   */

  return (
    <View>
      <Header headerText="Authentication" />
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
