import React from 'react';
import SigninScreen from './src/screens/authScreen/SigninScreen';
import SignUpScreen from './src/screens/authScreen/SignUpScreen';
import OTPpage from './src/screens/authScreen/OTPpage';
import EmailVerify from './src/screens/authScreen/EmailVerify';
import Dashboard from './src/screens/dashboardScreen/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigations/AuthStack';
import Profile from './src/screens/dashboardScreen/Profile';
import EditProfile from './src/screens/dashboardScreen/EditProfile';


function App() {
  return (
    // <NavigationContainer>
    //   <AuthStack />
    // </NavigationContainer>
    // <OTPpage/>
    // <EmailVerify/>
    // <Dashboard />
    // <Profile />
    <EditProfile />
  );
}
export default App;

