import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
import {View,Text,StyleSheet,TextInput, Image,TouchableOpacity} from "react-native"
const Signup = () =>{
    
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    const [isVisiblejob,setIsVisibleJob] = useState(true)
    const [isVisibleHire,setIsVisibleHire] = useState(false)
    const navigation = useNavigation()

    return(
        <View style={[styles.container]} >

            <View style={[styles.headerViewStyle]}>
            <Text style={[styles.headerFirstText]}>
            Welcome Back To
            </Text> 
            <Text style={[styles.headerSecondText]}>
            Hiring Tech
            </Text>
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginHorizontal:20,
                marginTop:20
                
            }}>
                <TouchableOpacity
                style={{
                    height:56,
                    backgroundColor:isVisiblejob?'#000959':"#ffffff",
                    borderRadius:16,
                    alignItems:'center',
                    justifyContent:'center',
                    width:166
                }}
                onPress={()=>{
                    setIsVisibleJob(false)
                    setIsVisibleHire(true)
                }}
                >
                    <Text style={{
                        fontSize:16,
                        fontWeight:'600',
                        color:isVisiblejob?'#C1E0FB':"#000959"
                    }}>
                    Find A Job
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{
                    height:56,
                    backgroundColor:isVisibleHire?'#000959':"#ffffff",
                    borderRadius:16,
                    alignItems:'center',
                    justifyContent:'center',
                    width:166
                }}
                onPress={()=>{
                    setIsVisibleJob(true)
                    setIsVisibleHire(false)
                }}
                >
                    <Text style={{
                        fontSize:16,
                        fontWeight:'600',
                        color:isVisibleHire?'#C1E0FB':"#000959"
                    }}>
                    Hire An Employe
                    </Text>
                </TouchableOpacity>
            </View>

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

            <View style={[styles.buttonViewStyle]}>
                <TouchableOpacity style={[styles.buttonStyle]}
                onPress={()=>{
                    navigation.navigate("Login")
                }}
                >
                    <Text style={[styles.buttonTextStyle]}>
                    Sign Up
                    </Text>
                </TouchableOpacity>

                <View style={[styles.orViewStyle]}>
                    <Text style={[styles.orTextStyle]}>
                        Or
                    </Text>
                </View>
                <View>
                    <Image
                    source={require("../Assets/Icon.png")}
                    style={[styles.googleIconStyle]}
                    />
                </View>
                
            </View>

            <View style={[styles.signupViewStyle]}>
                <Text style={[styles.alreadyTextStyle]}>
                Already Have An Account? 
                </Text>
                <Text style={[styles.signupTextStlye]}>
                Sign Up
                </Text>
            </View>
            
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
        marginTop:60,
        alignItems:'center'
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