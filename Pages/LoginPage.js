import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const submitLogInInfo = () => { //Called When Login Form Is Submitted
        // console.log(email, password)
        if (!email) {
            setLoginError('Enter  your email.')
        }
        else if (!password) {
            setLoginError('Enter  your password.')
        }
        else if (email !== 'mo' || password !== '12') {
            setLoginError('Incorrect username or password.')
        }
        else {
            setLoginError('')
            console.log('Credentials Validated')
        }
    }

    const handleAccountCreation = () => {
        console.log('Need Account')
    }

    var year = new Date().getFullYear()

    return (
        <View style={styles.outerContainer}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/pgimage.png')}
                    // source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                />
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Password-Generator</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.row}>
                        <Text>Email:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={e => { setEmail(e); setLoginError('') }}
                            value={email}
                            placeholder="eg.. user@gmail.com"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.row}>
                        <Text>Password:</Text>
                         <TextInput
                            style={styles.input}
                            onChangeText={e => { setPassword(e); setLoginError('') }}
                            value={password}
                            placeholder="Enter Password"
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.row}>
                        <Button
                            onPress={submitLogInInfo}
                            title="Sign In"
                            color={loginError ? 'red' : "#2196F3"}
                        />
                        <Text
                            hidden={!loginError}
                            style={{color: 'red', textAlign: 'center'}}
                        >{loginError}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{color: 'blue'}} onPress={handleAccountCreation}>Create Account.</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{textAlign: 'center', marginTop: 10}}>Copyright &copy; {year}.BrungasInc</Text>
                    </View>
                
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        // backgroundColor: 'lightgray',
        // color: 'red',
        height: '100%',
        width: '100%',
        padding: '5%',
        alignItems: 'center',
    },
    innerContainer: {
        backgroundColor: '#F3F3F4',
        // color: 'red',
        height: '67%',
        width: '100%',
        // alignItems: 'center',
        // paddingBottom: '10%',
        borderRadius: 10
    },
    logoContainer: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    logo: {
        height: 150,
        width: 150,
        borderRadius: 75,
        // resizeMode: 'cover',
        borderWidth: 3,
        borderColor: 'white'
    },
    header: {
        backgroundColor: 'maroon',
        // paddingTop: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    body: {
        // backgroundColor: 'lightblue',
        height: 250,
        // alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding:15
    },
    input: {
        height: 40,
        // width: '90%',
        // margin: 12,
        borderWidth: 1,
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
    },
    row: {
        marginBottom: 20
    }
});

export default LoginPage
