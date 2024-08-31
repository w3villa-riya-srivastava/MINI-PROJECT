import { Divider, Image } from '@rneui/base';
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
import {Icon} from '@rneui/themed';

const EditProfile = () => {
  const [number, onChangeNumber] = React.useState('');
  const pressHandler = () => {
    alert("Verified Successfuly!");
    };    
return (
    <ScrollView contentContainerStyle={{flex:1}}>
    <View style={{marginHorizontal:20, marginTop:20}}>
        <View style={{display:"flex", flexDirection: "row"}}>
        <View style={{alignItems: "center"}}>
        <Icon type="ant-design" name = "arrowleft" size={26}/>
        </View>
        <Text style={{fontSize: 22, fontWeight:"bold", color:"black"}}> Profile</Text>
        </View>
    
      {/* Profile Pic  */}
    
        <View style={{display:"flex", flexDirection: "row", marginTop:20}}>
        
        <View style={{flex:4, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/images/profile.webp')} style={{height:80,width:80, borderRadius: 50, alignItems: "center"}}></Image>
        </View>
    
        <View style={{flex:6, borderColor:"gray", borderLeftWidth:1, justifyContent: 'center', alignItems:'center'}}>
          <TouchableOpacity>
          <Text style={styles.title}>Jasmine</Text>
          </TouchableOpacity>
          <Text style={{marginHorizontal:20, color:"black", fontSize:16}}>Basic User</Text>
        </View>
        </View>
        
        </View>
      </ScrollView>
);
};
const styles = StyleSheet.create({
  text1: {
    padding:16,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  design:{
  display:"flex", 
  borderColor:"grey", 
  borderTopWidth:1, 
  flexDirection:"row", 
  justifyContent:"space-between"
  },
  title:{
    fontSize: 28,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
    marginHorizontal:20
  }
});

export default EditProfile;
