import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput, Image,TouchableOpacity,ScrollView} from "react-native"
const Signup = ({route}) =>{
    
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    const [isVisiblejob,setIsVisibleJob] = useState(true)
    const [isVisibleHire,setIsVisibleHire] = useState(false)
    const navigation = useNavigation() 
    const {item} = route?.params
    

    return(
        <View style={[styles.container]} >
            <ScrollView>
            <View style={[styles.headerViewStyle]}>
            <Text style={[styles.headerFirstText]}>
            Welcome Back To
            </Text> 
            <Text style={[styles.headerSecondText]}>
            Hiring Tech
            </Text>
            </View>
            {item==1?
            <View style={{
                alignItems:'center',
                marginTop:20
            }}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'600',
                    color:'#000000'
                }}>
                Candidate Login
                </Text>
            </View>
            :<View style={{
                alignItems:'center',
                marginTop:20
            }}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'600',
                    color:'#000000'
                }}>
                Hr Login
                </Text>
            </View>}
            <View style={[styles.emailInputViewStyle]}>
                <Text style={[styles.TextInputlabelStyle]}>
                Email Or Phone Number
                </Text>
                <TextInput
                placeholder="Enter Email Address"
                onChangeText={(txt)=>{setEmail(txt)}}
                style={[styles.inputStyle]}

                />
            </View>
            <View style={[styles.passwordInputViewStyle]}>
                <Text style={[styles.TextInputlabelStyle]}>
                Password
                </Text>
                <TextInput
                placeholder="Enter Password"
                onChangeText={(txt)=>{setPassword(txt)}}
                style={[styles.inputStyle]}

                />
            </View>

            <View style={[styles.rememberViewStyle]}>
                <Image
                source={(require("../Assets/check_box.png"))}
                style={[styles.ImageStyle]}
                />
                <Text style={[styles.rememberTextStyle]}>
                Remember Me
                </Text>
            </View>

          
            <TouchableOpacity
           style={{
            height:40,
            marginHorizontal:20,
            backgroundColor:'#C7C7C7',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:30,
            borderWidth:1,
            borderColor:'#000000',
            marginTop:50
           }}
           >
            <Text style={{
                fontSize:15,
                fontWeight:'500',
                color:'#000000'
            }}>
          Login
            </Text>
           </TouchableOpacity>
           <View style={{
            height:40,
            marginHorizontal:20,
            backgroundColor:'#C7C7C7',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:30,
            borderWidth:1,
            borderColor:'#000000',
            marginTop:20,
            flexDirection:'row'
           }}>
            <Image
            source={require("../Assets/Icon.png")}
            style={{
                width:24,
                height:20,
                marginRight:6
            }}
            />
              <TouchableOpacity
           style={{
            
           }}
           >
            <Text style={{
                fontSize:15,
                fontWeight:'500',
                color:'#000000'
            }}>
         Continue with Google
            </Text>
           </TouchableOpacity>
           </View>

            <View style={[styles.signupViewStyle]}>
                <Text style={[styles.alreadyTextStyle]}>
                Already Have An Account? 
                </Text>
               {item==1? <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("CandidateRegistration")
                }}
               >
                <Text style={[styles.signupTextStlye]}>
               Register
                </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate("HrRegistration")
                }}
                >
                <Text style={[styles.signupTextStlye]}>
               Sign Up
                </Text>
                </TouchableOpacity>
                }
                
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    headerViewStyle:{
        marginTop:60,
        alignItems:'center'
    },
    headerFirstText:{
        fontSize:24,
        fontWeight:'400',
        color:'#000000'
    },
    headerSecondText:{
        fontSize:36,
        fontWeight:'600',
        color:'#0038FF'
    },
    emailInputViewStyle:{
        marginTop:50,
        marginHorizontal:20,

    },
    passwordInputViewStyle:{
        marginTop:32,
        marginHorizontal:20,

    },
    inputStyle:{
        borderWidth:1,
        borderRadius:20,
       borderColor:'#0038FF80',
       paddingLeft:20
    },
    rememberViewStyle:{
        marginHorizontal:20,
        marginTop:60,
        alignItems:'center',
        flexDirection:'row',
        alignSelf:'center'
    },
    ImageStyle:{
        width:24,
        height:24,
        resizeMode:'contain'
    },
    rememberTextStyle:{
        fontSize:14,
        fontWeight:'400',
        color:'#000000',
        marginLeft:5
    },
    buttonViewStyle:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:40,
        alignItems:'center'
    },
    buttonStyle:{
        backgroundColor:'#000959',
        width:94,
        height:56,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16
    },
    buttonTextStyle:{
        fontSize:16,
        fontWeight:'600',
        color:'#A2CEF4'
    },
    orViewStyle:{
        marginHorizontal:40
    },
    orTextStyle:{
        fontSize:16,
        fontWeight:'500',
        color:'#000000'

    },
    googleIconStyle:{
        width:56,
        height:56,
        resizeMode:'contain'
    },
    signupViewStyle:{
        marginTop:40,
        alignItems:'center',
        marginBottom:20
    },
    alreadyTextStyle:{
        fontSize:16,
        fontWeight:'600',
        color:'#000000'
    },
    signupTextStlye:{
        fontSize:16,
        fontWeight:'500',
        color:'#68B3F4'
    },
    TextInputlabelStyle:{
        fontSize:12,
        fontWeight:'400',
        color:'#000000',
        opacity:0.5
    }
  });
export default Signup