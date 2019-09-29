import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const myName = <Text style={styles.secondTextStyle}>My name is ozgur</Text>;
    return (
    <View>
        <Text style={styles.firstTextStyle}>Getting started with React Native!</Text>
        {myName}
    </View>
    );
};

const styles = StyleSheet.create({
    firstTextStyle: {
        fontSize: 45
    }, 
    secondTextStyle: {
        fontSize: 20
    }, 
});

export default ComponentsScreen;