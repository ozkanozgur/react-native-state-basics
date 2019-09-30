import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15

        switch(color){
            case 'red':
                ((red + change) > 255 || (red + change) < 0) ? null : setRed(red + change);
            break;
            case 'green':
                ((green + change) > 255 || (green + change) < 0) ? null : setGreen(green + change);
            break;
            case 'blue':
                ((blue + change) > 255 || (blue + change) < 0) ? null : setBlue(blue + change);
            break;
            default:
                return;
            break;
        }
    };

    return (
        <View>
            <ColorCounter 
                onIncrease={() => { setColor('red', COLOR_INCREMENT); }} 
                onDecrease={() => { setColor('red', -1 * COLOR_INCREMENT); }} 
                color="Red" 
                valueOfColor={red}
            />
            
            <ColorCounter 
                onIncrease={() => { setColor('green', COLOR_INCREMENT); }} 
                onDecrease={() => { setColor('green', -1 * COLOR_INCREMENT); }} 
                color="Green" 
                valueOfColor={green}
            />

            <ColorCounter 
                onIncrease={() => { setColor('blue', COLOR_INCREMENT); }} 
                onDecrease={() => { setColor('blue', -1 * COLOR_INCREMENT); }} 
                color="Blue" 
                valueOfColor={blue}
            />

            <View style={{width:150, height:150, backgroundColor:`rgb(${red},${green},${blue})`}} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;