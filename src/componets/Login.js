import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from "react-native";
import LogoSvg from '../assets/logo.svg';

const Login = (props) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    let { navigation } = props;

    const submitLogin = async () => {
        if (username == "user" && password == "iampwd") {
            navigation.navigate("ListProductPage");
            return false;
        } else {
            alert('wrong username or password');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewStyle}>
                <View style={styles.row}>
                    {/* <Pressable onPress={submitLogin}>
                    <Text>Login</Text>
                </Pressable> */}
                    <View style={styles.logoContainer}>
                        <LogoSvg width={159} height={159} />
                    </View>
                    <View>
                        <Text style={styles.loginTitle}>
                            Login
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.loginDescription}>
                            Please login to your account.
                        </Text>
                    </View>
                    <View>
                        <TextInput
                            onChangeText={(text) => setUsername(text)}
                            style={styles.textInputStyle}
                            placeholder='Email Address'
                        />
                    </View>
                    <View>
                        <TextInput
                            onChangeText={(text) => setPassword(text)}
                            style={[styles.textInputStyle, { marginTop: 20 }]}
                            secureTextEntry={true}
                            placeholder='Password'
                        />
                    </View>
                </View>
                <View style={styles.buttonMainContainer}>
                    <TouchableOpacity
                        onPress={submitLogin}
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.buttonText}>
                            Login
                            </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

let defaultBlackColor = '#1D2226';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    scrollViewStyle: {
        backgroundColor: '#ffffff',
        flexGrow: 1,
        justifyContent: 'center',
        padding: 38,
    },
    row: {
        width: '100%',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 18
    },
    loginTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 12,
        color: defaultBlackColor
    },
    loginDescription: {
        fontSize: 18,
        marginBottom: 43,
        color: defaultBlackColor
    },
    textInputStyle: {
        borderBottomWidth: 1,
        color: defaultBlackColor
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    buttonMainContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 20
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        height: 52,
        backgroundColor: '#0087E1',
        justifyContent: 'center',
        borderRadius: 26
    }
});

export default Login;