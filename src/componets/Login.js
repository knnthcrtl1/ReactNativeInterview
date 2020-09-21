import React from "react";
import {SafeAreaView, View, Text, Pressable} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Login = (props) => {
    let {navigation} = props;

    const login = () => {
        navigation.navigate("ListProductPage");
    }

    return (
        <SafeAreaView>
            <ScrollView>      
                <Pressable onPress={login}>
                    <Text>Login</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login;