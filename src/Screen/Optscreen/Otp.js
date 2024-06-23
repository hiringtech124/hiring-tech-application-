import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TextInput, Image,TouchableOpacity } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';

const Otp = () => {
    const navigation = useNavigation()
  const [otp, setOtp] = useState('');

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOtp = () => {
    if (otp.length === 4) {
      Alert.alert('OTP Verified', `Your OTP is ${otp}`);
    } else {
      Alert.alert('Invalid OTP', 'Please enter a 4-digit OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Mobile Number</Text>
      <Text style={[styles.subtitle,{marginTop:8}]}>
      We will send you a confirmation 
      </Text>
      <Text style={styles.subtitle}>
      code
      </Text>
      <View style={{
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center'
      }}>
        <Image
        source={require("../../Assets/flag.png")}
        style={{
            width:32,
            height:32
        }}
        />
        <TextInput
        placeholder='Enter Your Number'
        style={{
            marginLeft:20,
            width:250
        }}
        />
      </View>
      <TouchableOpacity
      style={{
        backgroundColor:'#2BA0D2',
        alignItems:'center',
        justifyContent:'center',
        width:297,
        height:47,
        marginTop:32
      }}
      onPress={()=>{
        navigation.navigate("VerificationCode")
      }}
      >
        <Text style={{
            fontSize:32,
            fontWeight:'700',
            color:'#FFFFFF'
        }}>
            Verify
        </Text>
      </TouchableOpacity>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color:'#000000'
  },
  subtitle:{
    fontSize: 18,
    fontWeight: '400',
    color:'#000000',
    lineHeight:27
    // opacity:0.2
  },
  textInput: {
    // borderWidth: 1,
    borderRadius: 8,
    borderColor: '#000',
    width: 40,
    height: 40,
    textAlign: 'center',
    fontSize: 18,
    marginTop:20,
    marginLeft:20,
    backgroundColor:'#AFAAAA'
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Otp;
