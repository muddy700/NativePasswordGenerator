import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, Switch } from 'react-native';

const FormPage = () => {

    const [firstWord, setFirstWord] = useState('')
    const [secondWord, setSecondWord] = useState('')
    const [numbers, setNumbers] = useState('')
    const [characters, setCharacters] = useState('')
    const [formError, setFormError] = useState('')
    const [isRandom, setIsRandom] = useState(false)

    const toggleSwitch = () => { 
        console.log(isRandom)
        setIsRandom(!isRandom);
        setFormError('')
    }

    const formValidator = () => {
        if (!firstWord) {
            setFormError('Enter first word')
            return false;
        }
        else if (firstWord.length < 4 ) {
            setFormError('Enter atleast 4 characters in first word')
            return false;
        }
        else if (!(/^[a-zA-Z]*$/.test(firstWord))) {
            setFormError('Enter only letters in first word')
            return false;
        }
        else if (!secondWord) {
            setFormError('Enter second word')
            return false;
        }
        else if (secondWord.length < 4 ) {
            setFormError('Enter atleast 4 characters in second word')
            return false;
        }
        else if (!(/^[a-zA-Z]*$/.test(secondWord))) {
            setFormError('Enter only letters in second word')
            return false;
        }
        else if (!isRandom && !numbers) {
            setFormError('Enter numbers')
            return false;
        }
        else if (!isRandom && numbers.length < 4) {
            setFormError('Enter atleast 4 digits')
            return false;
        }
        else if (!isRandom && !(/^[0-9]*$/.test(numbers))) {
            setFormError('Enter valid numbers')
            return false;
        }
        else if (!isRandom && !characters) {
            setFormError('Enter special characters')
            return false;
        }
        else if (!isRandom && characters.length < 4) {
            setFormError('Enter atleast 4 characters')
            return false;
        }
        else if (!isRandom && !(/^[@!~#^()_$%&*-+"`|\<>=?.,':?/;]*$/.test(characters))) {
            setFormError('Enter valid characters')
            return false;
        }
        else {
            setFormError('')
            return true
        }
    }

    const createPasswords = () => {
        const isFormValid = formValidator()
        if (isFormValid) {
            //do some
            console.log('form is correct')
        }
        else {
            console.log('Password Form Is Not Valid')
        }
        console.log(firstWord, secondWord, numbers, characters, isRandom)
    }

    return (
        <View>
            <Text style={styles.formInstructoins}>Fill the form below to generate strong passwords.</Text>
            <View style={styles.formContainer}>
                <View style={styles.row}>
                    <Text>First word:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={e => { setFirstWord(e); setFormError('') }}
                        value={firstWord}
                        placeholder="eg.. django"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.row}>
                    <Text>Second word:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={e => { setSecondWord(e); setFormError('') }}
                        value={secondWord}
                        placeholder="eg.. rest"
                        keyboardType="default"
                    />
                </View>
                <View style={styles.row}>
                    <Text>Use random numbers & characters</Text>
                    <Switch
                        trackColor={{ false: "blue", true: "blue" }}
                        thumbColor={isRandom ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isRandom}
                    /> 
                </View>
                {isRandom ? null :
                    <View style={{ width: '100%' }}>
                        <View style={styles.row} >
                            <Text>Numbers:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={e => { setNumbers(e); setFormError('') }}
                                value={numbers}
                                placeholder="eg.. 1234"
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.row}>
                            <Text>Special characters:</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={e => { setCharacters(e); setFormError('') }}
                                value={characters}
                                placeholder="eg.. @.-="
                                keyboardType="default"
                            />
                        </View> 
                    </View> 
                }
                <View style={styles.row}>
                    <Button
                        onPress={createPasswords}
                        color={formError ? 'red' : "#2196F3"}
                        title="Create" />
                    <Text
                        hidden={!formError}
                        style={{color: 'red', textAlign: 'center'}}
                    >{formError}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formInstructoins: {
        fontSize: 15,
        fontWeight: 'bold',
        // backgroundColor: 'red',
        // paddingBottom: '5%'
    },
    formContainer: {
        // backgroundColor: 'red',
        padding: '5%',
    },
    row: {
        // backgroundColor: 'red',
        marginBottom: 10,
        width: '100%'
    },
    input: {
        height: 35,
        // width: '90%',
        // margin: 12,
        borderWidth: 1,
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
    },
})

export default FormPage
