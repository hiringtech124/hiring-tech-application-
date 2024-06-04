import React,{useState} from "react";
import {View,Text,FlatList, Image,TouchableOpacity,TextInput} from "react-native"
const Countryname = () =>{
    const [isVisible,setISVisible] = useState(false)
    const [filteredData, setFilteredData] = useState(
        [
        {
            "id": 1,
            "country": "United States"
        },
        {
            "id": 2,
            "country": "Canada"
        },
        {
            "id": 3,
            "country": "Mexico"
        },
        {
            "id": 4,
            "country": "Brazil"
        },
        {
            "id": 5,
            "country": "United Kingdom"
        },
        {
            "id": 6,
            "country": "Germany"
        },
        {
            "id": 7,
            "country": "France"
        },
        {
            "id": 8,
            "country": "Japan"
        },
        {
            "id": 9,
            "country": "Australia"
        },
        {
            "id": 10,
            "country": "India"
        },
        {
            "id": 11,
            "country": "China"
        },
        {
            "id": 12,
            "country": "Russia"
        },
        {
            "id": 13,
            "country": "South Africa"
        },
        {
            "id": 14,
            "country": "Italy"
        },
        {
            "id": 15,
            "country": "Spain"
        },
        {
            "id": 16,
            "country": "Argentina"
        },
        {
            "id": 17,
            "country": "Egypt"
        },
        {
            "id": 18,
            "country": "Saudi Arabia"
        },
        {
            "id": 19,
            "country": "South Korea"
        },
        {
            "id": 20,
            "country": "Turkey"
        }
    ]);
    const [data, setData] = useState([
        {
            "id": 1,
            "country": "United States"
        },
        {
            "id": 2,
            "country": "Canada"
        },
        {
            "id": 3,
            "country": "Mexico"
        },
        {
            "id": 4,
            "country": "Brazil"
        },
        {
            "id": 5,
            "country": "United Kingdom"
        },
        {
            "id": 6,
            "country": "Germany"
        },
        {
            "id": 7,
            "country": "France"
        },
        {
            "id": 8,
            "country": "Japan"
        },
        {
            "id": 9,
            "country": "Australia"
        },
        {
            "id": 10,
            "country": "India"
        },
        {
            "id": 11,
            "country": "China"
        },
        {
            "id": 12,
            "country": "Russia"
        },
        {
            "id": 13,
            "country": "South Africa"
        },
        {
            "id": 14,
            "country": "Italy"
        },
        {
            "id": 15,
            "country": "Spain"
        },
        {
            "id": 16,
            "country": "Argentina"
        },
        {
            "id": 17,
            "country": "Egypt"
        },
        {
            "id": 18,
            "country": "Saudi Arabia"
        },
        {
            "id": 19,
            "country": "South Korea"
        },
        {
            "id": 20,
            "country": "Turkey"
        }
    ]);
   
    
    const renderItem = ({item}) =>{
        return(
            <View style={{ 
                flexDirection:'row',
                alignItems:'center',
                marginVertical:10
                
                }}>
               {isVisible? 
               <TouchableOpacity
               onPress={()=>setISVisible(!isVisible)}
               >
                <Image  
                source={require("../Assets/circleinactive.png")}
                style={{
                    width:24,
                    height:24,
                    resizeMode:'contain'
                }}
                />

                </TouchableOpacity>
                :
                <TouchableOpacity
                onPress={()=>setISVisible(true)}
                >
                <Image  
                source={require("../Assets/circleactive.png")}
                style={{
                    width:24,
                    height:24,
                    resizeMode:'contain'
                }}
                />
                </TouchableOpacity>}
                <Text style={{
                    fontSize:16,
                    fontWeight:'500',
                    color:'#000000',
                    marginLeft:20
                }}>
                    {item.country}
                </Text>
            </View>

        )
    }
    const searchfilter = (searchText) => { 
        if (!data) {
            console.error("Data is undefined or null");
            return;
        }
        const filteredData1 = filteredData.filter((value) => {
            const searchStr = searchText.toLowerCase();
            const countryname = value.country.toLowerCase().includes(searchStr);
            return countryname;
        });
        
        setData(filteredData1);
    };
    return(
        <View style={{
            flex:1,
            backgroundColor:'#ffffff'
        }}>
            <View style={{
                marginHorizontal:24,
                flex:1
            }}>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginTop:40,
                
            }}>
                <Image
                source={require("../Assets/arrow-left.png")}
                style={{
                    width:24,
                    height:24,
                    resizeMode:'contain'
                }}
                />
                <Text style={{
                    fontSize:24,
                    fontWeight:'500',
                    color:'#000000',
                    marginLeft:10
                }}>
                Your Country
                </Text>
            </View>

            <View style={{
                marginVertical:32,
                flexDirection:'row',
                backgroundColor:'#C9C9C933',
                borderColor:'#D1D1D1',
                borderWidth:1,
                borderRadius:16,
                paddingLeft:10
            }}>
                <Image
                source={require("../Assets/search.png")}
                style={{
                    width:24,
                    height:24,
                    resizeMode:'contain',
                    alignSelf:'center'
                }}
                />
                <TextInput
                placeholder="Search For A Country"
                onChangeText={(text) => {
                    if (text != "") {
                      searchfilter(text);
                    } else {
                      setData(filteredData);
                    }
                  }}
                style={{
                    marginLeft:10
                }}
                
                />

            </View>
            <View style={{
                flex:1
            }}>
            <FlatList
            data={data}
            renderItem={renderItem}
            />
            </View>
            <View style={{
                height:108
            }}>
            <TouchableOpacity
            style={{
                backgroundColor:isVisible?'#C9C9C933':'#000959',
                height:56,
                alignItems:'center',
                justifyContent:'center',
                marginTop:12,
                borderRadius:16
            }}
            >
                <Text style={{
                    fontSize:16,
                    fontWeight:'600',
                    color:isVisible?'#000000':'#A2CEF4'
                }}>
                  Next
                </Text>
            </TouchableOpacity>
            </View>
           
            
            </View>
           
           
        </View>
    )
}
export default Countryname