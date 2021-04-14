import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../componets/Login";
import ListProduct from "../componets/ListProduct";

const AppRootNav = createStackNavigator();


export const AppRoot = () => (
    <AppRootNav.Navigator
        initialRouteName='LoginPage'
    >
        <AppRootNav.Screen
            name="LoginPage"
            component={Login}
            options={{
                headerShown: false
            }}
        ></AppRootNav.Screen>
        <AppRootNav.Screen
            options={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#0087E1',
                },
                headerTintColor: '#fff',
            }}
            name="ListProductPage"
            component={ListProduct}
        ></AppRootNav.Screen>
    </AppRootNav.Navigator>
)

