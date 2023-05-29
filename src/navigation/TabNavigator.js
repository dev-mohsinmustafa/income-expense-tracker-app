import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/homepage/HomePage';
import Statistic from '../screens/statistic/Statistic';
import Wallet from '../screens/wallet/Wallet';
import Profile from '../screens/profile/Profile';
import { COLORS } from "../theme/theme";

import AddButton from '../components/addButton/AddButton';

const Tab = createBottomTabNavigator();


const getIconColor = focused => ({
    tintColor: focused ? COLORS.primary : COLORS.white
});



const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}

            initialRouteName='HomePage'>
            <Tab.Screen name='HomePage' component={HomePage}
                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/Vector.png")}
                            />
                        </View>
                    )
                }}

            />
            <Tab.Screen name='Statistic' component={Statistic}
                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/bar-chart.png")}
                            />
                        </View>
                    )
                }}

            />
            {/* <Tab.Screen name='AddButton' component={HomePage}
                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarButton: () => (
                        <AddButton />
                    ),

                }}

            /> */}

            <Tab.Screen name='Wallet' component={Wallet}

                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/wallet.png")}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Profile' component={Profile}

                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/user.png")}
                            />
                        </View>
                    )
                }}
            />



        </Tab.Navigator>







    )
}


const styles = StyleSheet.create({
    tabBar: {
        // position: 'absolute',
        padding: 0,
        // left: 16,
        // right:16,
        // bottom: 22,
        height: 80,
        // borderRadius: 16,
        backgroundColor: "white",
        borderTopColor: "transparent",
        shadowColor: "#69AEA9",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        
        boxShadow: "0px -2px 25px rgba(0, 0, 0, 0.04)",
        // backgroundColor:"red"
    },
    tabIconContainer: {
        position: 'absolute',
        // top:12,
        alignItems: 'center',
        justifyContent: 'center'
    }
    , tabIcon: {
        width: 36,
        height: 36

    }
})

export default TabNavigator