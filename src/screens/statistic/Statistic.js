import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, ScrollView } from 'react-native'
import ratios from '../../styles/ratios'
import Card from '../../components/card/Card';

let {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} = ratios;

const Statistic = ({ navigation, props }) => {
  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
          style={{ width: 30, height: 30, justifyContent: 'center', }}>
          <Image
            source={require("../../assets/images/back.png")}

          />
        </TouchableOpacity>
        <Text style={styles.statistics}>Statistics</Text>
        <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', }}>
          <Image
            source={require("../../assets/images/download.png")}

          />
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>

        <View style={styles.dayParent}>
          <Text style={styles.day}>Day</Text>

        </View>
        <Text style={styles.week}>Week</Text>
        <Text style={styles.week}>Month</Text>
        <Text style={styles.week}>Year</Text>

      </View>

      <View style={styles.container3}>
        <View style={styles.container3Child}>
          <View style={{ flexDirection: 'row' }}>

            <Text style={styles.expense}>Expense</Text>
            <Image
              style={{ alignSelf: 'center', marginLeft: 15 }}

              source={require("../../assets/images/Icon.png")}
            />
          </View>
        </View>
        <Image
          style={{
            width: "100%",
            resizeMode: 'contain',
            alignItems: 'flex-start'
          }}
          source={require("../../assets/images/graph.png")}
        />



      </View>
      <View style={styles.container35}>
        <Text style={styles.months}>Mar</Text>
        <Text style={styles.months}>Apr</Text>
        <Text style={styles.may}>May</Text>
        <Text style={styles.months}>Jun</Text>
        <Text style={styles.months}>Jul</Text>
        <Text style={styles.months}>Aug</Text>
      </View>

      <View style={styles.container4}>

        <Text style={styles.text}>Top Spending</Text>
        <Image
          source={require("../../assets/images/arrow.png")} />
      </View>
      <View style={styles.container5}>


        <ScrollView>
          <View style={{
            marginTop: 20,
            backgroundColor: "#FBFBFB", borderRadius: 12,
            marginHorizontal: 20,
          }}>

            <Card title1="Starbucks" title2="Jan 12, 2022" title3="- $ 150.00" color="#F95B51" color1="#000000" color2="#666666" image={require("../../assets/images/starbucks.png")}
              width={29} height={30}
            />
          </View>
          <View style={{
            backgroundColor: "#29756F", borderRadius: 12,
            marginHorizontal: 20, marginTop: 15, elevation: 5, shadowColor: "#29756F",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,

          }}>
            <Card title1="Transfer" title2="Yesterday" title3="- $ 85.00" color1="#FFFFFF" color2="#EEEEEE" color="#FBFBFB" image={require("../../assets/images/transfer1.png")}
              width={44} height={30}
            />
          </View>
          <View style={{ backgroundColor: "#FBFBFB", borderRadius: 12, marginHorizontal: 20, marginTop: 15, }}>
            <Card title1="Youtube" title2="Jan 16, 2022" title3="- $ 11.99" color="#F95B51" color1="#000000" color2="#666666" image={require("../../assets/images/youtube1.png")}
              width={35} height={35}
            />

          </View>

          <View style={{ backgroundColor: "#FBFBFB", borderRadius: 12, marginHorizontal: 20, marginTop: 15, }}>
            <Card title1="Youtube" title2="Jan 16, 2022" title3="- $ 11.99" color="#F95B51" color1="#000000" color2="#666666" image={require("../../assets/images/youtube1.png")}
              width={35} height={35}
            />

          </View>



        </ScrollView>
      </View>
      {/* <View style={styles.navContainer}>
      </View> */}

    </View>

  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",

  },
  container1: {
    flex: 1.6,
    backgroundColor: "yellow",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthPixel(30),
    alignItems: 'center',
  },
  statistics: {
    color: "#222222",
    fontFamily: "Inter-SemiBold",
    // fontWeight: 600,
    fontSize: fontPixel(18),
    lineHeight: 21,
  },

  container2: {
    flex: 0.6,
    backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: widthPixel(32),
    alignContent: 'center',
    marginTop:40

  },
  day: {
    color: "white",
    textAlign: 'center',
    fontFamily: "Inter-Regular",
    // fontWeight: 400,
    color: "#FFFFFF",
    fontSize: fontPixel(13),
    lineHeight: 16,

  },
  dayParent: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: "#438883",
    width: 80,
    height: 40,
  },
  week: {
    color: "#666666",
    textAlign: 'center',
    fontFamily: "Inter-Regular",
    // fontWeight: 400,
    fontSize: fontPixel(13),
    lineHeight: 16,
  },
  container3: {
    flex: 4,
    // backgroundColor: "green",
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: widthPixel(20),
    // alignItems: 'flex-end'
    marginTop: 30

  },
  container3Child:
  {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#666666",
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    width: 120,
    height: 40,
  },
  expense: {
    color: "#666666",
    fontFamily: "Inter-Medium",
    // fontWeight: 500,
    fontSize: fontPixel(14),
    lineHeight: 16,
  },
  container35: {
    flex: 0.3,
    // backgroundColor: "yellow",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthPixel(20),
    alignItems: 'flex-end',

  },
  months: {
    color: "#666666",
    fontFamily: "Inter-Regular",
    // fontWeight: 400,
    fontSize: fontPixel(14),
    lineHeight: 17,
  },
  may: {
    color: "#438883",
    fontFamily: "Inter-Regular",
    // fontWeight: 400,
    fontSize: fontPixel(14),
    lineHeight: 17,
  },
  container4: {
    flex: 0.6,
    // backgroundColor: "gray",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthPixel(22),
    alignItems: 'center',
    marginTop: 60
  },
  text: {
    fontFamily: "Inter-SemiBold",
    color: "#222222",
    // fontWeight: 600,
    fontSize: fontPixel(18),
    lineHeight: 21,
    // paddingTop:6,
    marginTop: 6,

  },
  container5: {
    flex: 4,
    // backgroundColor: "pink",

  },

  navContainer: {
    flex: 1.5,
    // backgroundColor: "red",


  }

})

export default Statistic;

