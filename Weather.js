import React from "react";
import {StyleSheet, View,Text} from "react-native";
import PropTypes from "prop-types";

export default function Weather({temp}) {
    return (<View style={Styles.container}>
        <Text>{temp}</Text>
    </View>);
}

Weather.propTypes = {
    temp:PropTypes.number.inRequired

};

const Styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});