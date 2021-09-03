import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {

    var year = new Date().getFullYear()

    return (
        <View style={styles.footer}>
            <Text>Copyright &copy; {year}.BrungasInc</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        height: '15%',
        width: '100%',
        backgroundColor: 'darkgray',
        alignItems: 'center',
        // justifyContent: 'center',
    },
})
export default Footer 