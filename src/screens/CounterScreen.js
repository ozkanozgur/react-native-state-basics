import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase" onPress={() =>{
                // Don't do them!
                // counter++;
                // counter = counter + 1;
                setCounter(counter + 1);
            }} />
            <Button title="Decrease"  onPress={() =>{
                // Don't do them!
                // counter--;
                // counter = counter - 1;
                setCounter(counter - 1);
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;