import React, {useState} from 'react';
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

const Dashboard = () => {
  const [number, onChangeNumber] = React.useState('');
  const pressHandler = () => {
    alert("Verified Successfuly!");
    };    
return (
  <ScrollView contentContainerStyle={{flex:1}}>
      <ImageBackground
    source={require('../../assets/images/app-background.jpg')}
    style={{zIndex: -1, flex:1}}>
    <View style={{flex:0.2}}>
      <Text style={styles.text1}>Welcome to Dashboard!</Text>
      <Text style={styles.text2}>Jasmine</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>Create Your Profile</Text>
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
  //normal text
  text3:{
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
    marginHorizontal:20,
    marginTop:20
  }
});

export default Dashboard;
