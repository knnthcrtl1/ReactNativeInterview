import React, { useState } from "react"
import { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, View, Text, StatusBar, StyleSheet, Image, ActivityIndicator } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { getProducts } from "../api/RestApi"


let fujifilm = require('../assets/Fujifilm.png');
let canonEosR = require('../assets/canon-eos-r.png');
let fujifilm2 = require('../assets/fujifilm-2.png');
let canonEos = require('../assets/canon-eos.png');
let sony = require('../assets/sony.png');

const ListProduct = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        setIsLoading(true);
        fetchProduct();
    }, [])

    const fetchProduct = async () => {
        try {
            let res = await getProducts();
            setData(res);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    function getVehicleImage(code) {
        switch (code) {
            case 0: { return <Image source={fujifilm} resizeMode={'cover'} /> }
            case 1: { return <Image source={canonEosR} resizeMode={'cover'} /> }
            case 2: { return <Image source={fujifilm2} resizeMode={'cover'} /> }
            case 3: { return <Image source={canonEos} resizeMode={'cover'} /> }
            case 4: { return <Image source={sony} resizeMode={'cover'} /> }
            default:
                break;
        }

        return null
    }

    const _renderItem = ({ item }) => {
        const { id, brand, type, category, name, originalPrice, sellingPrice } = item;
        // {id: 0, brand: 'Fujifilm', type: 'APS-C', category: 'Mirrorless', name: 'Fujifilm X-T2', originalPrice: 15000, sellingPrice: 12000},
        // {id: 1, brand: 'Canon', type: 'Full-Frame', category: 'Mirrorless', name: 'Canon EOS R', originalPrice: 26000, sellingPrice: 23000},
        // {id: 2, brand: 'Fujifilm', type: 'APS-C', category: 'Mirrorless', name: 'Fujifilm X-T3', originalPrice: 22000, sellingPrice: 18000},
        // {id: 3, brand: 'Canon', type: '4/3 Cmos', category: 'DC', name: 'Canon EOS M', originalPrice: 13000, sellingPrice: 8800},
        // {id: 4, brand: 'Sony', type: 'APS-C', category: 'Mirrorless', name: 'Sony a6100', originalPrice: 15000, sellingPrice: 13000},

        return (
            <View style={styles.productImagesContainer}>
                <View style={styles.imageRow}>
                    {getVehicleImage(id)}
                    <Text style={styles.imageStyle}>
                        {name}
                    </Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.rightInnerRow}>
                        <View style={styles.originalSellingRow}>
                            <Text style={styles.originSellingTitle}>{`Original \n Selling`}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.mainPrice}>{originalPrice}</Text>
                            <Text style={styles.discountPrice}>{sellingPrice}</Text>
                        </View>
                        <View style={styles.categoryProduct}>
                            <Text>{brand}</Text>
                            <Text>{type}</Text>
                            <Text>{category}</Text>
                        </View>
                        <View style={styles.chevonRight}>
                            <Image source={require('../assets/chevonright.png')} resizeMode={'cover'} style={styles.imageChevron} />
                        </View>
                    </View>
                    <View >
                        <Text style={styles.daysAgo}>5 days ago</Text>
                    </View>
                </View>
            </View>
        )
    }

    const _keyExtractor = (item, id) => id.toString();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#0087E1' />
            {/* <ScrollView style={styles.scrollView}> */}
            <View style={styles.row}>
                {
                    isLoading ? <Text style={styles.textLoading}>Loading ...</Text>
                        :
                        <FlatList
                            data={data && data}
                            renderItem={_renderItem}
                            keyExtractor={_keyExtractor}
                            showsVerticalScrollIndicator={false}
                        />}
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollViewStyle: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        width: '100%',
        flexGrow: 1,
        justifyContent: 'center',
        paddingVertical: 20
    },
    imageStyle: {
        textAlign: 'center',
        fontSize: 15,
    },
    productImagesContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        paddingBottom: 15,
        marginBottom: 15,
    },
    originalSellingRow: {
        flexBasis: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0087E1',
        padding: 2
    },
    originSellingTitle: {
        fontSize: 19,
        color: '#ffffff',
        textAlign: 'left'
    },
    priceContainer: {
        flexBasis: '30%',
        backgroundColor: '#fcfcfc',
        alignItems: 'center',
        padding: 5
    },
    categoryProduct: {
        flexBasis: '30%',
        backgroundColor: '#EEEEEE',
        padding: 5
    },
    rightContainer: {
        flexBasis: '65%',
        flex: 1,
        flexDirection: 'column'
    },
    rightInnerRow: {
        flexDirection: 'row',
    },
    imageRow: {
        flexBasis: '30%',
        alignItems: 'center'
    },
    mainPrice: {
        fontSize: 22,
        color: '#191B1D'
    },
    discountPrice: {
        fontSize: 22,
        color: '#2F9752'
    },
    chevonRight: {
        flexBasis: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageChevron: {
        width: 16,
        height: 30
    },
    daysAgo: {
        color: '#545D69',
        fontSize: 10,
        paddingLeft: 2,
        paddingTop: 2
    },
    textLoading:{
        textAlign: 'center'
    }
})

export default ListProduct;