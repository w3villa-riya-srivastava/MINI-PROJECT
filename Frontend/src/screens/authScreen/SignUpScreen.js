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
import CustomInputElement from '../../components/loginComponents/CustomInputElement';
import {useNavigation} from '@react-navigation/native';
import {Icon, Divider} from '@rneui/themed';

const SignUpScreen = () => {
  // email is current state and setEMail is function which is used to update the email state

  const [email, setEmail] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const [isEmailError, setIsEmailError] = useState(false);

  const pressHandler = () => {
    if (!email) {
      setIsEmailError(true);
    }
    const data = {
      email: email,
      mobileno: mobileno,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log('data', data);
    setEmail('');
    setMobileno('');
    setPassword('');
    setConfirmPassword('');
    // alert("We've sent an confirmation email to your email address and an OTP on your mobile number.");
  };

  const onBlur = () => {
    if (!email) {
      setIsEmailError(true);
    }
  };
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/images/app-background.jpg')}
        style={{zIndex: -1, flex: 1}}>
        <View style={{flex: 0.17}}>
          <Text style={styles.text1}>Let's Sign you Up.</Text>
          <Text style={styles.text2}>Welcome.</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
          <CustomInputElement
            inputTitle="Email"
            placeholder="Your Email"
            value={email}
            setValue={setEmail}
            isSecure={false}
            onBlur={onBlur}
          />
          {isEmailError && (
            <Text style={{textAlign: 'right', color: 'red'}}>
              Please enter an email
            </Text>
          )}
          <CustomInputElement
            inputTitle="Mobile Number"
            placeholder="Your Mobile Number"
            value={mobileno}
            setValue={setMobileno}
            isSecure={false}
            keyboardType="numeric"
          />
          <CustomInputElement
            inputTitle="Password"
            placeholder="Create Password"
            value={password}
            setValue={setPassword}
            isSecure={true}
          />
          <CustomInputElement
            inputTitle="Confirm Password"
            placeholder="Retype Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            isSecure={true}
          />
          <TouchableOpacity onPress={pressHandler}>
            <View style={styles.signinButton}>
              <Text style={{color: 'white', fontSize: 22, padding: 5}}>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{color: 'black', marginTop: 12, alignItems: 'center'}}>
                Already have an account? {''}
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  Login
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Separator */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Divider color="black" style={{marginBottom: 8, width: 125}} />
            <Text style={{marginTop: 8}}> or login with </Text>
            <Divider color="black" style={{marginBottom: 8, width: 125}} />
          </View>

          {/* Social Signin  */}

          <View
            style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20}}>
            <TouchableOpacity
              onPress={() => {
                console.log('Facebook logged in');
              }}>
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
            <TouchableOpacity
              onPress={() => {
                console.log('Google logged in');
              }}>
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
    marginHorizontal: 20,
  },
  text2: {
    fontSize: 28,
    color: 'white',
    marginTop: 15,
    marginHorizontal: 20,
  },
  container: {
    marginTop: 25,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    zIndex: 1,
    flex: 0.83,
  },
  title: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    marginHorizontal: 20,
  },
  signinButton: {
    backgroundColor: 'black',
    height: 50,
    borderwidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
});
export default SignUpScreen;
