import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, Image, TextInput, StatusBar } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HomePage from './HomePage';
import FormPage from './FormPage';
    
const MainPage = () => {

    return (
        <View style={styles.outerView}>
            <Header />
            <View style={styles.body}>
                {/* <HomePage /> */}
                <FormPage />
            </View>
            <Footer />
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
    body: {
        height: '80%',
        width: '100%',
        backgroundColor: 'lightgray',
        padding: '5%'
    },
})
export default MainPage