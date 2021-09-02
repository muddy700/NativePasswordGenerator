import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, Image, TextInput, StatusBar } from 'react-native';

const HomePage = () => {
    return (
        <View style={styles.outerView}>
            <View style={styles.header}>
                <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/pgimage.png')}
                    />
                </View>
                <View style={styles.titleView}>
                    <Text>Password</Text>
                    <Text> &nbsp; &nbsp; &nbsp; &nbsp;Generator</Text>
                </View>
                <View style={styles.menuView}>
                    <Text>Menu</Text>
                </View>
            </View>
            <Text>This Is Home Page</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    outerView: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#F3F3F4'
    },
    header: {
        height: 90,
        width: '100%',
        // backgroundColor: 'lightblue',
        // display: 'flex',
        flexDirection: 'row'
    },
    logoView: {
        width: '25%',
        height: '100%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf: 'auto'
    },
    logo: {
        width: '80%',
        height: '70%',
        borderRadius: 45,
    },
    titleView: {
        width: '60%',
        height: '100%',
        backgroundColor: 'green',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15
    },
    menuView: {
        width: '15%',
        height: '100%',
        backgroundColor: 'blue'

    }
})
export default HomePage