import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    const titleText = "Data Covid-19 Global & Indonesia";
    const title = <Text style= {styles.container}>{titleText}</Text>

    return (
        <View>
            {title}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 25,
        color: 'black',
        fontWeight: "bold",
        alignItems: 'center'
    }
})

export default Header;

