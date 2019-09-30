import React, { useReducer } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const reducer = (state, action) => {
    // state === {showError: boolean, password: string}
    // action === {password: string}
    return {...state, password: action.password, showError : (action.password.length<=5 ? true : false)};
};

const PasswordScreen = () => {
    const [state, dispatch] = useReducer(reducer, {showError: false, password: 'deneme'});
    const {showError, password} = state;

    return (
        <View>
            <Text style={styles.passwordTitle}>Enter password:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none" 
                autoCorrect={false} 
                value={password} 
                onChangeText={(newValue) => { dispatch({password:newValue}); }}
            />
            {showError ? <Text style={styles.textError}>Password must be longer than 5 caharcters</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15, 
        borderColor: 'black', 
        borderWidth: 1, 
        padding:5
    }, 
    textError:{
        margin:15,
        color:'red',
        fontWeight: 'bold'
    }, 
    passwordTitle:{
        fontWeight: 'bold'
    }
});

export default PasswordScreen;