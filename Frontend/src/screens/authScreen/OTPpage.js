import React, {useRef, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';

const OTPpage = () => {
  const textRef = useRef()
    const [number, onChangeNumber] = useState('');
    const pressHandler = () => {
      alert("Verified Successfuly!");
      };  
      
      // console.log("textRef", textRef?.current?.focus())
  return (
    <ScrollView contentContainerStyle={{flex:1}}>
        <ImageBackground
      source={require('../../assets/images/app-background.jpg')}
      style={{zIndex: -1, flex:1}}>
      <View style={{flex:0.2}}>
        <Text style={styles.text1}>Let's Sign you in.</Text>
        <Text style={styles.text2}>Welcome.</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.text3}>We've sent a verification code to verify your mobile number.</Text>
      <View style={styles.otp}>
      <TextInput
        ref={textRef}
        style={styles.inputValue}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputValue}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputValue}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.inputValue}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
      </View>
      <Text style={styles.text3}>Didn't get code yet?</Text>
      <Text style={[styles.text3, {marginTop:4, color:'black'}]}>Resend OTP?</Text>

      <TouchableOpacity onPress={pressHandler}>
          <View style={styles.signinButton}>
            <Text style={{color: 'white', fontSize: 22, padding: 5}}>
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
    marginHorizontal:20
  },
  text2: {
    fontSize: 28,
    color: 'white',
    marginTop: 15,
    marginHorizontal:20
  },
  container:{
    marginTop:25,
    borderTopRightRadius: 30, 
    borderTopLeftRadius: 30, 
    backgroundColor: 'white', 
    zIndex: 1,
    flex:0.8
  },
  title:{
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    marginHorizontal:20
  },
  text3:{
    fontSize: 16,
    marginTop: 12,
    marginHorizontal: 20,
    textAlign: 'center'
  },
  otp:{
    zIndex:1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginHorizontal:60
  },
  inputValue: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 15,
    width: 60,  
  },
  signinButton: {
    backgroundColor: 'black',
    height: 50,
    borderwidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:20,
    marginTop:20
  },
});

export default OTPpage;
