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
import InputElement from '../../components/loginComponents/InputElement';
import { useNavigation } from '@react-navigation/native';
import {Icon, Divider} from '@rneui/themed';

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()

  const pressHandler = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log('data', data);
    setEmail('');
    setPassword('');
  };

  return (
    // Scrollview is used to dismiss the keyboard 
    <ScrollView contentContainerStyle={{flex: 1}}>
      <ImageBackground
      source={require('../../assets/images/app-background.jpg')}
      style={{zIndex: -1, flex: 1}}>
      <View style={{flex: 0.17}}>
        <Text style={styles.text1}>Let's Sign you in.</Text>
        <Text style={styles.text2}>Welcome back.</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <InputElement
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
        <TouchableOpacity onPress={pressHandler}>
          <View style={styles.signinButton}>
            <Text style={{color: 'white', fontSize: 22, padding: 5}}>
              Sign in
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('SignUp')}>
          <Text style={{color: 'black', marginTop: 10, alignItems: 'center'}}>
            Don't have an account? {''} 
            <Text style={{color: 'black', fontWeight:'bold', textDecorationLine: 'underline'}}>
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>

          {/* Separator */}

          <View style={{flexDirection:'row', justifyContent:'center', marginTop:15}}>
          <Divider color='black' style={{marginBottom:8, width:125}} />
          <Text style={{marginTop:8}}>  or login with  </Text>
          <Divider color='black' style={{marginBottom:8, width:125}} />
          </View>

         {/* Social Signin  */}

         <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
            <TouchableOpacity onPress={()=>{console.log("Facebook logged in")}}>
            <Icon
              type="font-awesome"
              name="facebook-official"
              size={42}
              color={'black'}
              marginHorizontal={6}
            />
            </TouchableOpacity>
            {/* <Icon
              type="font-awesome"
              name="facebook"
              size={28}
              color={'white'}
              backgroundColor={'black'}
              height={42}
              width={42}
              borderRadius={21}
              padding={10}
              marginHorizontal={5}
            /> */}
            <TouchableOpacity onPress={()=>{console.log("Google logged in")}}>
            <Icon
              type="font-awesome"
              name="google"
              size={26}
              color={'white'}
              backgroundColor={'black'}
              height={42}
              width={42}
              borderRadius={21}
              padding={8}
              marginHorizontal={6}
            />
            </TouchableOpacity>
          </View>
        
      </View>
      {/* <View>
          <Text style={[styles.common, {fontSize: 18}]}>How are you </Text>
          <Text style={[styles.common, {fontSize: 13}]}>I am good </Text>
        </View> */}
    </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontFamily: 'Roboto-Black',
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
  title:{
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    marginHorizontal:20
  },
  container:{
    marginTop:25,
    borderTopRightRadius: 30, 
    borderTopLeftRadius: 30, 
    backgroundColor: 'white', 
    zIndex: 1,
    flex: 0.83
  },
    // forgot:{
  //   color: 'black',
  //   fontWeight: 'bold',
  //   textAlign: 'right',
  //   marginTop: 10,
  //   textDecorationLine: 'underline',
  //   marginHorizontal:20
  // },
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

export default SigninScreen;
