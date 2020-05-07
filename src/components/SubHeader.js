import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const SubHeader = props => {
    return (
        <View style={styles.viewBox}>
            <Text style = {styles.textBox}>              Global              </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    viewBox: {
        flex: 0.3,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    textBox: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default SubHeader;