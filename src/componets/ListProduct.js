import React from "react"
import {SafeAreaView, ScrollView, View, Text} from "react-native"
import { getProducts } from "../api/RestApi"

const ListProduct = () => {

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text>List Product</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ListProduct;