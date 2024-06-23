import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    FlatList,
  } from "react-native";
const Profile = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor:'#ffffff',
        paddingTop:20,
        paddingHorizontal:20
    }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{
            flexDirection:'row',
            alignItems:'center'
        }}>

        <TouchableOpacity
                onPress={()=>{
                    navigation.goBack()
                }}
                >
                <Image
                source={require("../Assets/arrow-left.png")}
                style={{
                    width:24,
                    height:24,
                    resizeMode:'contain'
                }}
                />
                </TouchableOpacity>
        <Text style={{
                    fontSize:24,
                    fontWeight:'500',
                    color:'#000000',
                    
                }}>
                {' '}Job Type
                </Text>
        </View>
               

          <Image
            source={require("../Assets/dashboard/bellIcon.png")}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
          />
        

      </View>

      <View style={{
        alignItems:'center',
        marginTop:16
      }}>
        <View>
           
      
        <Image
        source={require('../Assets/dashboard/Profile.png')}
        style={{
            width:120,
            height:120,
            resizeMode:'contain'
        }}
        />
        </View>
        <Image
            source={require('../Assets/dashboard/Camera.png')}
            style={{
                position:'absolute',
                width:43,
                height:43,
                bottom:55,
                right:'30%'
            }}
            />
        <Text style={{
            fontSize:20,
            fontWeight:'500',
            color:'#062B43',
            marginTop:12
        }}>
        Aman Kapil
        </Text>
        <Text style={{
            fontSize:15,
            fontWeight:'400',
            color:'#17557480'
        }}>
        Amankapil123@gmail.com
        </Text>
      </View>

      <View style={{
        borderWidth:1,
        borderColor:'#EDEDED',
        borderRadius:16,
        marginTop:20
      }}>
        <TextInput
        placeholder="Aman Kapil"
        style={{
            marginLeft:10
        }}
        />
      </View>
      <View style={{
        borderWidth:1,
        borderColor:'#EDEDED',
        borderRadius:16,
        marginTop:20
      }}>
        <TextInput
        placeholder="+375(29)9638433"
        style={{
            marginLeft:10
        }}
        />
      </View>
      <View style={{
        borderWidth:1,
        borderColor:'#EDEDED',
        borderRadius:16,
        marginTop:20
      }}>
        <TextInput
        placeholder="amankapil@gmailcom"
        style={{
            marginLeft:10
        }}
        />
      </View>
      <View style={{
        borderWidth:1,
        borderColor:'#EDEDED',
        borderRadius:16,
        marginTop:20
      }}>
        <TextInput
        placeholder="22 May 1999"
        style={{
            marginLeft:10
        }}
        />
      </View>
      <View style={{
        borderWidth:1,
        borderColor:'#EDEDED',
        borderRadius:16,
        marginTop:20
      }}>
        <TextInput
        placeholder="Male"
        style={{
            marginLeft:10
        }}
        />
      </View>
      <TouchableOpacity
      style={{
        backgroundColor:'#D79442',
        height:56,
        alignItems:'center',
        justifyContent:'center',
        marginTop:32,
        borderRadius:16
      }}
      >
        <Text style={{
            fontSize:16,
            fontWeight:'600',
            color:'#FFFFFF'
        }}>
        Edit Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
