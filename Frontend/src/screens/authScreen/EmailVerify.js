import React, { useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';

const EmailVerify = () => {

  const pressHandler = () => {
    alert("Verified Failed! Try Again!");
  };
  return (
    <ScrollView contentContainerStyle={{flex:1}}>
      <ImageBackground
        source={require('../../assets/images/app-background.jpg')}
        style={{ zIndex: -1, flex:1}}>
        <View style={{flex:0.2}}>
          <Text style={styles.text1}>Let's Sign you in.</Text>
          <Text style={styles.text2}>Welcome.</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Email Verification</Text>
          <Text style={styles.text3}>We have sent a verification link to your email address. Please click the link to verify your email address.</Text>
          <TouchableOpacity onPress={pressHandler}>
            <View style={styles.signinButton}>
              <Text style={{ color: 'white', fontSize: 22, padding: 5 }}>
                Verify
              </Text>
            </View>
          </TouchableOpacity>

        </View>

      </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginTop: 40,
    marginHorizontal: 20
  },
  text2: {
    fontSize: 28,
    color: 'white',
    marginTop: 15,
    marginHorizontal: 20
  },
  container: {
    marginTop: 25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    zIndex: 1,
    flex: 0.8
  },
  title: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    marginHorizontal: 20
  },
  text3: {
    fontSize: 16,
    marginTop: 12,
    marginHorizontal: 20,
    textAlign: 'center'
  },
  signinButton: {
    backgroundColor: 'black',
    height: 50,
    borderwidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20
  }
});

export default EmailVerify;
