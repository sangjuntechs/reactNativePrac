import React from "react";
import {StyleSheet, Text , View, StatusBar} from "react-native";


export default function Loading() {
    return (
    <View style={styles.container}>
        <StatusBar barStyle={"dark-content"}/>
        <Text style = {styles.text}>Getting the Sangjuntechs Weather..</Text>
    </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        paddingHorizontal: 25,
        paddingVertical: 110,
        backgroundColor: "#FDF6AA"
    },

    text: {
        fontSize:35
    }
});