import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const HomePage = () => {

    return (
        <View>
            <Text style={styles.welcomeTitle}>Welcome To Our App.</Text>
            <Text>&nbsp; &nbsp; Get A Strong Password In Less Than 2 Minutes, By Providing Only Four Things You Want To Include In Your Password As Listed Below,</Text>
            <View style={styles.infoList}>
                <Text>1. First Word.</Text>
                <Text>2. Second Word.</Text>
                <Text>3. Numbers (Optional).</Text>
                <Text>4. Special characters (Optional).</Text>
            </View>
            <View style={styles.actionView}>
                <Button
                title="Get started" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        // justifyContent: 'center',
        // backgroundColor: 'red',
        paddingBottom: '5%',
        paddingLeft: '25%'
    },
    infoList: {
        // backgroundColor: 'red',
        paddingTop: '5%',
        paddingLeft: '10%'
    },
    actionView: {
        // backgroundColor: 'red',
        paddingTop: '15%'
    }
})
export default HomePage 
