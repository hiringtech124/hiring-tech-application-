import { useNavigation } from "@react-navigation/native";
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
const Home = () => {
  const navigation = useNavigation();
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const renderItem = ({index}) => {
    return (
      <View
        style={{
          backgroundColor: "#ffffff",
          padding: 15,
          borderWidth: 1,
          marginTop: 16,
          borderRadius: 20,
          borderColor: "#17557433",
          width:320,
          marginLeft:index==0?0:20
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../Assets/dashboard/Mask.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: "500",
                color: "#000000",
                marginLeft: 12,
              }}
            >
              Vacant Land
            </Text>
          </View>
          <Image
            source={require("../../Assets/dashboard/save.png")}
            style={{
              width: 18,
              height: 18,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#175574",
            marginTop: 16,
          }}
        >
          UX/UI Designer Analyst
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            color: "#666666",
            marginTop: 4,
          }}
        >
          7363 California, USA
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "#175574",
            marginTop: 10,
          }}
        >
          ₹ 6 LPA - 12 LPA
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 3,
              backgroundColor: "#ABE0F8",
              borderRadius: 18,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#175574",
              }}
            >
              Fulltime
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 3,
              backgroundColor: "#ABE0F8",
              borderRadius: 18,
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#175574",
              }}
            >
              Remote
            </Text>
          </View>
        </View>
      </View>
    );
  };
  const renderItem1 = ({index}) => {
    return (
        <View
        style={{
          backgroundColor: "#ffffff",
          padding: 15,
          borderWidth: 1,
          marginTop: 16,
          borderRadius: 20,
          borderColor: "#17557433",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../Assets/dashboard/Mask.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <View
              style={{
                marginLeft: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: "#175574",
                }}
              >
                UX/UI Designer Analyst
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: "#175574",
                }}
              >
                Vacant Land · 7363 California, USA
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../Assets/dashboard/save.png")}
              style={{
                width: 18,
                height: 18,
              }}
            />
            <Image
              source={require("../../Assets/dashboard/share.png")}
              style={{
                width: 20,
                height: 20,
                marginLeft: 12,
              }}
            />
          </View>
        </View>

        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            color: "#175574",
            marginTop: 10,
          }}
        >
          ₹ 6 LPA - 12 LPA
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 3,
                backgroundColor: "#ABE0F8",
                borderRadius: 18,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "#175574",
                }}
              >
                Fulltime
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 3,
                backgroundColor: "#ABE0F8",
                borderRadius: 18,
                marginLeft: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                  color: "#175574",
                }}
              >
                Remote
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "600",
              color: "#D79442",
              marginTop: 12,
            }}
          >
            Posted 2 hours ago
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingTop: 24,
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../../Assets/dashboard/Logo.png")}
            style={{
              width: 57,
              height: 25,
              resizeMode: "stretch",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../Assets/dashboard/bellIcon.png")}
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
            <TouchableOpacity
              style={{
                marginLeft: 10,
              }}
              onPress={()=>{
                navigation.openDrawer();
              }}
            >
              <Image
                source={require("../../Assets/dashboard/Profile.png")}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 172,
            borderRadius: 15,
            overflow: "hidden",
            marginTop: 20,
          }}
        >
          <ImageBackground
            source={require("../../Assets/dashboard/welcome.png")}
            style={{
              width: "100%",
              height: 172,
              borderRadius: 15,
            }}
            resizeMode="cover"
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: "#E7E7E7",
                marginLeft: 16,
                marginTop: 20,
              }}
            >
              Wednesday, 5 June 2024
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#FFF7F7",
                marginLeft: 16,
                marginTop: 20,
              }}
            >
              Welcome back,{" "}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#FFF7F7",
                marginLeft: 16,
                marginTop: 4,
              }}
            >
              Aman!
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontWeight: "400",
                color: "#E7E7E7",
                marginTop: 10,
                marginLeft: 16,
              }}
            >
              Ready to Land Your Dream Career? Let's Help!
            </Text>
          </ImageBackground>
        </View>

        <View
          style={{
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#175574",
            }}
          >
            Talent Talks
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ImageBackground
              source={require("../../Assets/dashboard/card1.png")}
              style={{
                width: 170,
                height: 85,
              }}
              resizeMode="contain"
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 12,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={require("../../Assets/dashboard/cardImage1.png")}
                    style={{
                      width: 34,
                      height: 34,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      18
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      Employers
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      Interested in You
                    </Text>
                  </View>
                </View>
                <Image
                  source={require("../../Assets/dashboard/cardarrow1.png")}
                  style={{
                    width: 16,
                    height: 16,
                    marginTop: 10,
                  }}
                />
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../Assets/dashboard/card2.png")}
              style={{
                width: 170,
                height: 85,
              }}
              resizeMode="contain"
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 12,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={require("../../Assets/dashboard/cardImage1.png")}
                    style={{
                      width: 34,
                      height: 34,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      18
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      Pending
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      applications
                    </Text>
                  </View>
                </View>
                <Image
                  source={require("../../Assets/dashboard/cardarrow2.png")}
                  style={{
                    width: 16,
                    height: 16,
                    marginTop: 10,
                  }}
                />
              </View>
            </ImageBackground>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ImageBackground
              source={require("../../Assets/dashboard/card3.png")}
              style={{
                width: 170,
                height: 85,
              }}
              resizeMode="contain"
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 12,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={require("../../Assets/dashboard/cardImage1.png")}
                    style={{
                      width: 34,
                      height: 34,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      18
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      Shortlisted
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      applications
                    </Text>
                  </View>
                </View>
                <Image
                  source={require("../../Assets/dashboard/cardarrow3.png")}
                  style={{
                    width: 16,
                    height: 16,
                    marginTop: 10,
                  }}
                />
              </View>
            </ImageBackground>
            <ImageBackground
              source={require("../../Assets/dashboard/card4.png")}
              style={{
                width: 170,
                height: 85,
              }}
              resizeMode="contain"
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 12,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={require("../../Assets/dashboard/cardImage1.png")}
                    style={{
                      width: 34,
                      height: 34,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 22,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      18
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      Rejected
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "600",
                        color: "#FFFFFF",
                      }}
                    >
                      applications
                    </Text>
                  </View>
                </View>
                <Image
                  source={require("../../Assets/dashboard/cardarrow4.png")}
                  style={{
                    width: 16,
                    height: 16,
                    marginTop: 10,
                  }}
                />
              </View>
            </ImageBackground>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 17,
                color: "#175574",
                fontWeight: "600",
              }}
            >
              Featured Jobs
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#17557480",
              }}
            >
              See all{"  "}
            </Text>
            <Image
              source={require("../../Assets/dashboard/SmallArrow.png")}
              style={{
                width: 4.25,
                height: 8,
                resizeMode: "contain",
              }}
            />
          </View>
        </View>
        <FlatList horizontal={true} data={data} renderItem={renderItem} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 17,
                color: "#175574",
                fontWeight: "600",
              }}
            >
              Recent Posts
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "600",
                color: "#17557480",
              }}
            >
              See all{"  "}
            </Text>
            <Image
              source={require("../../Assets/dashboard/SmallArrow.png")}
              style={{
                width: 4.25,
                height: 8,
                resizeMode: "contain",
              }}
            />
          </View>
        </View>
      
    <FlatList
    data={data}
    renderItem={renderItem1}
    />

       
      </ScrollView>
    </View>
  );
};
export default Home;
