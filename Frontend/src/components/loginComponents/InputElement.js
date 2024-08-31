import React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
//LOGIN PAGE
const InputElement = ({email, password, setEmail, setPassword}) => {
  return (
    <View>
      <Text style={styles.inputTitle}>Email</Text>
      <TextInput
        style={styles.inputValue}
        placeholder="Your email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.inputTitle}>Password</Text>
      <TextInput
        style={styles.inputValue}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputTitle: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 12,
    marginHorizontal:20
  },
  inputValue: {
    borderWidth: 1,
    paddingHorizontal: 16,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 2,
    marginHorizontal: 20,
  },
});

export default InputElement;