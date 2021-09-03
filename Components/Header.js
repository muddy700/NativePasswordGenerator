import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
           <View style={styles.header}>
                <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/pgimage.png')}
                    />
                </View>
                <View style={styles.titleView}>
                    <Text style={{fontSize: 25,  fontWeight: 'bold'}}>Password</Text>
                    <Text style={{fontSize: 25,  fontWeight: 'bold'}}> &nbsp; &nbsp; &nbsp; &nbsp;Generator.</Text>
                    <Text style={{fontSize: 11}}>Your security is our first priority.</Text>
                </View>
                <View style={styles.menuView}>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '15%',
        width: '100%',
        backgroundColor: 'lightblue',
        flexDirection: 'row'
    },
    logoView: {
        width: '25%',
        height: '100%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '80%',
        height: '70%',
        borderRadius: 45,
    },
    titleView: {
        width: '60%',
        height: '100%',
        // backgroundColor: 'green',
        justifyContent: 'center',
        paddingLeft: 15
    },
    menuView: {
        width: '15%',
        height: '100%',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Header
