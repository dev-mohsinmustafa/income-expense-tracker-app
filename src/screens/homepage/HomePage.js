import React from 'react'
import { Alert, View, Text, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import Card from '../../components/card/Card'


import ratios from '../../styles/ratios';

let {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} = ratios;
import { useIsFocused, useNavigation } from '@react-navigation/native';



const HomePage = () => {
  const isFocused = useIsFocused()
  console.log(isFocused, 'focused')
  const navigation = useNavigation()

  return (
    <View style={styles.homeContainer}>


      <ImageBackground
        style={{
          width: widthPixel(414), height: widthPixel(357), resizeMode: 'cover'

        }}
        source={require("../../assets/images/home.png")}
      >
        <View style={{ flex: 2 }}>
          <View style={styles.topContainer}>
            <Text style={styles.text1}>Good afternoon,</Text>

            <Image
              style={styles.alarmImage}
              source={require("../../assets/images/alarm.png")}
            />

          </View>

          <View style={styles.alarmImageContainer}>
            <Text style={styles.text2}>Enjelin Morgeana</Text>

          </View>


          <View style={[styles.cardContainer,]}>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.balanceText}>Total Balance</Text>
              <Image
                style={{
                  alignSelf: 'center',
                  marginLeft: 8
                  // marginTop: widthPixel(26),
                  // marginLeft: heightPixel(112)

                }}
                source={require("../../assets/images/total.png")}
              />

            </View>
            {/* <View style={{ marginLeft: pixelSizeHorizontal(197) }}> */}
              <Image
                style={{}}
                source={require("../../assets/images/dot.png")}
              />
            {/* </View> */}

          </View>

          <View style={{ flex: 0.5,     }}>
            <Text style={styles.cardText1}>$ 2,548.00</Text>
          </View>


          <View style={[styles.cardContainer2,]}>
            <Text style={styles.cardText2}>Income</Text>

            <Text style={styles.cardText3}>Expenses</Text>


          </View>
          <Image
            style={{ width: widthPixel(24), height: widthPixel(24), marginTop: widthPixel(-22), marginLeft: widthPixel(38) }}

            source={require("../../assets/images/frame1.png")}
          />

          <Image
            style={{ width: widthPixel(24), height: widthPixel(24), marginTop: widthPixel(-25), marginRight: widthPixel(125), alignSelf: 'flex-end', }}

            source={require("../../assets/images/frame2.png")}
          />

          <View style={[styles.cardContainer4,]}>
            <Text style={styles.cardText4}>$ 1,840.00</Text>
            <Text style={styles.cardText5}>$ 284.00</Text>
          </View>
        </View>


      </ImageBackground>





      <View style={[styles.textContainer,]}>
        <Text style={styles.text3}> Transactions History</Text>
        <Text style={styles.text4}>See all </Text>
      </View>


      <ScrollView style={{ flex: 1, }}>
        <Card title1="Upwork" title2="Today" title3="+ $ 850.00" color="#25A969" color1="#000000" color2="#666666" image={require("../../assets/images/upwork.png")}
          width={50} height={50}
        />
        <Card title1="Transfer" title2="Yesterday" title3="- $ 85.00" color="#F95B51" color1="#000000" color2="#666666" image={require("../../assets/images/transfer.png")}
          width={50} height={50}
        />
        <Card title1="Paypal" title2="Jan 30, 2022" title3="+ $ 1,406.00" color="#25A969" color1="#000000" color2="#666666" image={require("../../assets/images/paypal.png")}
          width={50} height={51}
        />
        <Card title1="Youtube" title2="Jan 16, 2022" title3="- $ 11.99" color="#F95B51" color1="#000000" color2="#666666" image={require("../../assets/images/youtube.png")}
          width={50} height={51}
        />
      </ScrollView>





      <View style={[styles.textContainer, { flex: 0.3, }]}>
        <Text style={styles.text3}> Send Again</Text>
        <Text style={styles.text4}>See all </Text>
      </View>


      <View style={[styles.imageContainer, { flex: 1, }]}>
        <Image
          style={{ width: widthPixel(62), height: widthPixel(62), }}
          source={require("../../assets/images/image1.png")}
        />

        <Image
          style={{ width: widthPixel(62), height: widthPixel(62), }}
          source={require("../../assets/images/image2.png")}
        />

        <ImageBackground
          style={{ width: widthPixel(62), height: widthPixel(62), }}
          source={require("../../assets/images/image3.png")}
        >
          <Pressable onPress={() => navigation.navigate('AddButton')}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:18 }}>
              <Image
                // style={{ width: widthPixel(75), height: widthPixel(75) }}
                source={require("../../assets/images/plus.png")}
              />
            </View>

          </Pressable>

        </ImageBackground>
        <Image
          style={{ width: widthPixel(62), height: widthPixel(62), }}
          source={require("../../assets/images/image4.png")}
        />
        <Image
          style={{ width: widthPixel(62), height: widthPixel(62), }}
          source={require("../../assets/images/image5.png")}
        />

      </View>









      {/* <Navbar /> */}


      {/* <View style={styles.navContainer}>
      </View> */}

    </View>
  )
}




const styles = StyleSheet.create({

  homeContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  topContainer: {
    // backgroundColor:"red",
    // marginTop: 100,
    flexDirection: "column",
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: widthPixel(74),
    flex: 0.2,
    // backgroundColor: "red",
    flexDirection: "row"

  },
  alarmImageContainer: {
    marginLeft: widthPixel(24),
    flex: 0.4,
    // backgroundColor: "gray",
    marginTop: 8
  },
  alarmImage: {
    width: widthPixel(40), height: heightPixel(40),
    // alignSelf: 'center',
    // marginRight: 22,
    // marginTop: 60
  },
  text1: {
    // backgroundColor:"green",
    color: "#FFFFFF",
    fontFamily: "Inter-Medium",
    // fontWeight: 500,
    fontSize: fontPixel(14),
    lineHeight: 17,
    // paddingTop: 74,
  },
  text2: {
    // backgroundColor:"green",
    // marginLeft: 22,
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
    // fontWeight: 600,
    fontSize: fontPixel(20),
    lineHeight: 24

  },
  balanceText: {
    alignSelf: 'flex-start',
    // marginTop: widthPixel(-20),
    // marginLeft: widthPixel(40),
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
    // fontWeight: 600,
    fontSize: fontPixel(16),
    lineHeight: 19
  }
  ,


  cardContainer: {
    marginTop: heightPixel(58),
    flexDirection: 'row',
    marginHorizontal: 40,
    alignItems: "center",
    flex: 0.3,
    // backgroundColor:"red",
    justifyContent:'space-between'



  },
  cardText1: {

    // marginTop: heightPixel(8),
    marginLeft: widthPixel(40),
    color: "#FFFFFF",
    fontFamily: "Inter-Bold",
    // fontWeight: 700,
    fontSize: fontPixel(30),
    lineHeight: 37,
  },

  cardContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: heightPixel(33),


  },
  cardText2: {
    color: "#D0E5E4",
    fontFamily: "Inter-Medium",
    // fontWeight: 500,
    fontSize: fontPixel(18),
    lineHeight: 20,
    marginLeft: widthPixel(48),

  },
  cardText3: {
    color: "#D0E5E4",
    fontFamily: "Inter-Medium",
    // fontWeight: 500,
    fontSize: fontPixel(18),
    lineHeight: 20,
    marginRight: widthPixel(20),

  },


  cardContainer4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: heightPixel(8),
    paddingBottom: 30,
    flex: 0.3,
    // backgroundColor:"pink"


  },
  cardText4: {
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
    // fontWeight: 600,
    fontSize: fontPixel(20),
    lineHeight: 25,
  },

  cardText5: {
    color: "#FFFFFF",
    fontFamily: "Inter-SemiBold",
    // fontWeight: 600,
    fontSize: fontPixel(20),
    lineHeight: 25,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 31,
    flex: 0.3,



  },
  text3: {
    color: "#222222",
    fontFamily: "Inter-SemiBold",
    // fontWeight: 600,
    fontSize: fontPixel(18),
    lineHeight: 22,
    // marginTop: 31
  },
  text4: {
    color: "#666666",
    fontFamily: "Inter-Regular",
    // fontWeight: 400,
    fontSize: fontPixel(14),
    lineHeight: 17,
    // marginTop: 31

  },

  imageContainer: {
    marginTop: widthPixel(15),
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginBottom: heightPixel(9),


  },
  // navContainer: {
  // flex: 1,

  // width: widthPixel(414), height: heightPixel(80),
  // backgroundColor: "red",
  // flexDirection: "row",
  // justifyContent: 'center',
  // alignItems: 'center',
  // alignItems: 'flex-end',
  // justifyContent: 'space-around',
  // justifyContent: 'space-between',
  // paddingBottom: widthPixel(24),
  // }

})

export default HomePage;