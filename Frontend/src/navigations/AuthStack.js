import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/authScreen/SignUpScreen';
import OTPpage from '../screens/authScreen/OTPpage';
import EmailVerify from '../screens/authScreen/EmailVerify';
import SigninScreen from '../screens/authScreen/SigninScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="SignIn" component={SigninScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OtpVerification" component={OTPpage} />
      <Stack.Screen name="EmailVerification" component={EmailVerify} />
    </Stack.Navigator>
  );
}

export default AuthStack