import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
//SIGNUP PAGE
const CustomInputElement = ({inputTitle, placeholder, value, setValue, isSecure, keyboardType, onBlur}) => {
  return (
    <View>
      <Text style={styles.inputTitle}>{inputTitle}</Text>
      <TextInput
        style={styles.inputValue}
        placeholder={placeholder}
        value={value}
        onChangeText={text => setValue(text)}
        secureTextEntry={isSecure}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onBlur={onBlur}
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
      marginHorizontal: 20
    },
  });

export default CustomInputElement;
