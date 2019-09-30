import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text style={styles.nameTitle}>Enter your name:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none" 
                autoCorrect={false} 
                value={name} 
                onChangeText={(newName) => { setName(newName); }}
            />

            <Text style={styles.text}>My name is {name}</Text>
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
    text:{
        margin:15,
        color:'red',
        fontWeight: 'bold'
    }, 
    nameTitle:{
        fontWeight: 'bold'
    }
});

export default TextScreen;