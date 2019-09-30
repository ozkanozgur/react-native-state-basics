import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello world!</Text>
      <Button 
        onPress={ () => { navigation.navigate('Components'); }} 
        title="Go to Components Demo" 
      />
      <Button 
        onPress={ () => { navigation.navigate('List'); }} 
        title="Go to List Demo" 
      />
      <Button 
        onPress={ () => { navigation.navigate('Image'); }} 
        title="Go to Image Demo" 
      />
      <Button 
        onPress={ () => { navigation.navigate('Counter'); }} 
        title="Go to Counter Demo" 
      />
      <Button 
        onPress={ () => { navigation.navigate('Color'); }} 
        title="Go to Color Demo" 
      />
      <Button 
        onPress={ () => { navigation.navigate('Square'); }} 
        title="Go to Square Demo (State Basics)" 
      />
      <Button 
        onPress={ () => { navigation.navigate('SquareV2'); }} 
        title="Go to Square Demo (State Basics V2)" 
      />
      <Button 
        onPress={ () => { navigation.navigate('Text'); }} 
        title="Go to Text Demo (State Basics About Input and Text)" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
