import React from "react";
import {SafeAreaView, View, Text, Pressable, ScrollView} from "react-native";


const Login = (props) => {
    let {navigation} = props;

    const submitLogin = async () => {                
        navigation.navigate("ListProductPage");
    }

    return (
        <SafeAreaView>
            <ScrollView>      
                <Pressable onPress={submitLogin}>
                    <Text>Login</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Login;