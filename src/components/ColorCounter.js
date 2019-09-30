import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease, valueOfColor}) => {
    return (
        <View>
            <Text>{color} - Value of {color} Color: {valueOfColor}</Text>
            <Button title={`Increase ${color}`} onPress={() => { onIncrease(); }} />
            <Button title={`Decrease ${color}`} onPress={() => { onDecrease(); }} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;