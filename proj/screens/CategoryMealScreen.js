import React from 'react';
import {View, Text,Button, StyleSheet, ColorPropType} from 'react-native';

const CategoryMealScreen = props=>{
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
            <Button title="Check out details" onPress={ ()=>{
                props.navigation.navigate("MealDetail")
            }

            }
                />
        </View>
    )
};

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
export default CategoryMealScreen;
