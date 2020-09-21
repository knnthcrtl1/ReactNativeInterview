import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../componets/Login";
import ListProduct from "../componets/ListProduct";

const AppRootNav = createStackNavigator();
export const AppRoot = () => (
    <AppRootNav.Navigator>
        <AppRootNav.Screen name="LoginPage" component={Login}></AppRootNav.Screen>
        <AppRootNav.Screen name="ListProductPage" component={ListProduct}></AppRootNav.Screen>
    </AppRootNav.Navigator>    
)

