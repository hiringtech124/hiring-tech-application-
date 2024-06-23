import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={()=>{
            props.navigation.closeDrawer()
        }}>
        <Image
        source={require('../Assets/dashboard/cross.png')}
        style={{
            width:18,
            height:18,
            resizeMode:'contain',
            alignSelf:'flex-end',
            marginRight:20,
            marginTop:20
        }}
        />
        </TouchableOpacity>
       
      <View style={styles.profileContainer}>
        <Image 
          source={require('../Assets/dashboard/Profile.png')} // Replace with actual profile image URL
          style={styles.profileImage}
          resizeMode='contain'
        />
        <Text style={styles.profileName}>Aman Kapil</Text>
        <Text style={styles.profilePhone}>Amankapil123@gmail.com</Text>
      </View>
      {/* <DrawerItemList {...props} /> */}
      <View style={{
        width:207,
        backgroundColor:'#ABE0F8',
        height:1,
        marginHorizontal:32,
        marginVertical:16
      }}
      />
      <Text style={{
        fontSize:16,
        fontWeight:'500',
        color:'#175574',
        marginLeft:16,
        marginTop:12
      }}>
      My Resume
      </Text>
      <Text style={styles.textStyle}>
      Preferences
      </Text>
      <Text style={styles.textStyle}>
      Manage account
      </Text>
      <Text style={styles.textStyle}>
      Report a complaint
      </Text>
      <Text style={styles.textStyle}>
     Safety Tips
      </Text>
      <Text style={styles.textStyle}>
      About Hiring tech
      </Text>
      <Text style={styles.textStyle}>
      Logout
      </Text>
     
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color:'#062B43'
  },
  profilePhone: {
    fontSize: 10,
    color: '#17557480',
    fontWeight:'500'
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f00',
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textStyle:{
    fontSize:16,
        fontWeight:'500',
        color:'#175574',
        marginLeft:16,
        marginTop:20
  }
});

export default CustomDrawer;
