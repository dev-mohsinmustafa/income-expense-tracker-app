import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'

import ratios from '../../styles/ratios';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import { useNavigation } from '@react-navigation/native';


let
    {
        widthPixel,
        heightPixel,
        fontPixel,
        pixelSizeVertical,
        pixelSizeHorizontal,
    } = ratios;



const BillDetails = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <Header title="Bill Details" image1={require("../../assets/images/back.png")}
                image2={require("../../assets/images/dot.png")}

            />



            <View style={styles.container2}>



                <View style={styles.container3}>
                    <View>
                        <Image
                            style={{ borderRadius: 40, }}
                            source={require("../../assets/images/youtube.png")}
                        />
                    </View>

                    <View style={styles.youtubeContainer}>
                        <Text style={styles.youtube}>Youtube Premium</Text>
                        <Text style={styles.feb}> Feb 28, 2022</Text>
                    </View>
                </View>




                <View style={styles.container6}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.price}>Price</Text>
                        <Text style={styles.price}>Fee </Text>

                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.dollars}>$ 11.99</Text>
                        <Text style={styles.dollars}>$ 1.99</Text>

                    </View>


                </View>


                <View style={styles.horizontalLine}>

                </View>


                <View style={styles.container7}>
                    <Text style={styles.total}>Total</Text>
                    <Text style={styles.total$}>$ 13.98</Text>
                </View>


                <View style={styles.containerText}>
                    <Text style={styles.select}>Select payment method</Text>
                </View>

                <View style={{ backgroundColor:"pink"}}>
                    <View style={styles.container4}>
                        <Image
                            source={require("../../assets/images/debit.png")}
                        />

                        <View style={{ paddingLeft: 15 }}>
                            <Text style={styles.bank}>Debit Card</Text>
                            {/* <Text style={styles.para1}>Connect your bank account to deposit & fund</Text> */}
                        </View>

                        <Image
                            style={{ marginLeft: widthPixel(126) }}
                            source={require("../../assets/images/radio.png")}
                        />
                    </View>



                    <View style={styles.container5}>
                        <View style={{ paddingLeft: 32 }}>
                            <Image
                                source={require("../../assets/images/logo-paypal.png")}
                            />
                        </View>

                        <View style={{ paddingLeft: 25 }}>
                            <Text style={styles.microdeposits}>Paypal</Text>
                            {/* <Text style={styles.para2}>Connect you paypal account</Text> */}
                        </View>
                        <View>
                            <Image
                            style={{ marginLeft: widthPixel(157), }}

                                source={require("../../assets/images/ellipse.png")}
                            />
                        </View>
                    </View>
                </View>


                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("BillPayment")}
                        style={styles.buttonShadow}>
                        <Button title="Pay now" color="#FFFFFF" backgroundColor="#69AEA9"
                            borderRadius={40} borderWidth={1} borderColor="#549994"
                        />

                    </TouchableOpacity>
                </View>















            </View>









        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "red"
    },

    container2: {
        flex: 5,
        backgroundColor: "#FFFFFF",
        // width: "80%",
        // height: 500,
        // marginLeft: 10,
        // marginRight:10,
        // marginHorizontal: widthPixel(28),
        // marginTop: -120,
        // borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },


    container3: {
        backgroundColor: "red",
        height: heightPixel(48),
        marginHorizontal: pixelSizeHorizontal(20),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        flex: 0.2
    },
    youtubeContainer: {
        paddingLeft: 15
    },
    youtube: {
        color: "#000000",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(18),
        // paddingBottom:8
    },
    feb: {
        color: "#666666",
        fontFamily: "Inter-Regular",
        fontSize: fontPixel(14),
        // marginTop: 8

    },
    container4: {
        backgroundColor: 'rgba(67, 136, 131, 0.1)',
        borderRadius: 20,
        marginHorizontal: widthPixel(35),
        flexDirection: 'row',
        height: heightPixel(100),
        alignItems: 'center',
        marginTop: 20,
        // justifyContent: 'space-between',
        paddingHorizontal: pixelSizeHorizontal(20)

    },
    bank: {
        color: "#438883",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(18),
    },
    para1: {
        maxWidth: heightPixel(149),
        color: "#438883",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(12),
    },
    horizontalLine: {
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginHorizontal: pixelSizeHorizontal(30),

        backgroundColor: "green",
        marginTop: 20
        // flex: 0.04,
    },

    container6: {
        backgroundColor: "blue",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        flex: 0.3,
        marginTop: 21

    },
    price: {
        color: "#666666",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
        paddingBottom: 12
    },
    dollars: {
        color: "#000000",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
        paddingBottom: 12

    },

    container7: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        backgroundColor: "red",
        flex: 0.10,
        marginTop: 21
    },
    total: {
        color: "#666666",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
    },
    total$: {
        color: "#000000",
        fontFamily: "Inter-Bold",
        fontSize: fontPixel(16),
    },
    containerText: {
        paddingLeft: widthPixel(30),
        flex: 0.1,
        marginTop: 42,
        backgroundColor: "yellow"
    },
    select: {
        color: "#000000",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(18),
    },
    container5: {
        backgroundColor: "#FAFAFA",
        borderRadius: 20,
        marginHorizontal: widthPixel(35),
        flexDirection: 'row',
        height: heightPixel(100),
        alignItems: 'center',
        marginTop: 15
    },
    microdeposits: {
        color: "#888888",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(18),
    },
    para2: {
        color: "#888888",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(12),
    },
    button: {
        marginTop: 30,

    },
    buttonShadow: {
        // backgroundColor:"red",
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }





})



export default BillDetails