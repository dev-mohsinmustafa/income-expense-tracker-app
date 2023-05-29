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



const PaymentSuccessfully = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <Header title="Bill PaymentSuccessfully" image1={require("../../assets/images/back.png")}
                image2={require("../../assets/images/dot.png")}

            />



            <View style={styles.container2}>


            <View style={styles.container3}>
                    <View>
                        <Image
                            // style={{ width:80, height:80}}
                            style={{alignSelf:'center'}}
                            source={require("../../assets/images/payment.png")}
                        />
                        <View style={styles.incomeContainer}>
                            <Text style={styles.income}>Payment Successfully</Text>

                        </View>
                        <View>
                            <Text style={styles.dollar}>Youtube Premium</Text>

                        </View>
                    </View>

                </View>



            


               

             


         

                <View style={styles.button}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate("BillDetails")}
                        style={styles.buttonShadow}>
                        <Button title="Share Receipt" color="#69AEA9" backgroundColor="#FFFFFF"
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
        borderRadius: 20,
    },

    
    container3: {
        // backgroundColor: "red",
        flex: 0.38,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25



    },
    incomeContainer: {
        borderRadius: 40,
        backgroundColor: "rgba(249, 91, 81, 0.1)",
        // backgroundColor: "rgba(67, 136, 131, 0.1)",
        marginTop: 12
    },
    income: {
        color: "#F95B51",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(14),
        textAlign: 'center',
    },
    dollar: {
        color: "#000000",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(24),
        textAlign: 'center',
        paddingTop: 8
    },









    button: {
        marginTop: 103,

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



export default PaymentSuccessfully