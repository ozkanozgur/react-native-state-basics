import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Sam1', age: 'Age 41', key:'1'},
        {name: 'Sam2', age: 'Age 42', key:'2'},
        {name: 'Sam3', age: 'Age 43', key:'3'},
        {name: 'Sam4', age: 'Age 44', key:'4'},
        {name: 'Sam5', age: 'Age 45', key:'5'},
        {name: 'Sam6', age: 'Age 46', key:'6'},
        {name: 'Sam7', age: 'Age 47', key:'7'},
        {name: 'Sam8', age: 'Age 48', key:'8'},
        {name: 'Sam9', age: 'Age 49', key:'9'}
    ];


    return (
        <FlatList 
            // keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={
                function({item}){ 
                    return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>; 
                }
            } />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:5
    }
});

export default ListScreen;