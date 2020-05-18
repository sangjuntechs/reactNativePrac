import React from "react";
import {StyleSheet, View,Text,StatusBar} from "react-native";
import PropTypes from "prop-types";
import {LinearGradient} from "expo-linear-gradient";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Haze : {
        iconName: "weather-hazy",
        gradient: ["#4DA0B0","#D39D38"]
    },
    Thunderstorm : {
        iconName : "weather-lightning-rainy",
        gradient: ["#4B79A1","#283E51"]
    },
    Drizzle : {
        iconName : "weather-pouring",
        gradient: ["#2980b9","#2c3e50"]
    },
    Rain : {
        iconName : "weather-rainy",
        gradient: ["#1e3c72","#2a5298"]
    },
    Snow : {
        iconName : "weather-snowy-heavy",
        gradient: ["#8e9eab","#eef2f3"]
    },
    Atmosphere : {
        iconName : "weather-fog",
        gradient: ["#360033","#0b8793"]
    },
    Clear : {
        iconName : "weather-sunny",
        gradient: ["#2980b9","#6dd5fa","#ffffff"]
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient: ["#304352","#d7d2cc"]
    },
    Dust : {
        iconName : "weather-fog",
        gradient: ["#ba8b02","#181818"]
    },
    Mist : {
        iconName : "weather-hail",
        gradient: ["#525252","#3d72b4"]
    },

};

export default function Weather({temp,condition}) {
    return (
        
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={Styles.container}
            >
                <StatusBar barStyle="light-content"/>
        <View style={Styles.half_container}>
        <MaterialCommunityIcons style={Styles.Icons} size = {100} name={weatherOptions[condition].iconName} color='white'/>
        <Text style={Styles.Temp}>{temp}°C</Text>
        </View>
        <View style={Styles.half_container2}>
            <Text style={Styles.MainText}>This is {condition} Day!</Text>
            <Text style={Styles.SubText}>sangjuntechsWeather</Text>
            <Text style={Styles.copyRight}>github.sagnjuntechs.com</Text>
        </View>
        </LinearGradient>
        );
        
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Dust",
        "Mist"]).isRequired

};

const Styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    half_container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    half_container2: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    Temp :{
        fontSize:37,
        color:'white',
        fontWeight:"700"
    
        
    
    },
    Icons: {
        marginBottom:10
    },
    MainText: {
        fontSize:30,
        color:"white",
        fontWeight:"700"

    },
    SubText: {
        fontSize:16,
        color:"white"
    },
    copyRight: {
        position:"absolute",
        bottom: 30,
        fontWeight:"600"
        
    }
});