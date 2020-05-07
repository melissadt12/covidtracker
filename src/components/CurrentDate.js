import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

class CurrentDate extends React.Component {
        state = {
            date: new Date().getDate().toString(),
            month: new Date().getUTCMonth().toString(),
            year: new Date().getFullYear().toString()
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style= {{fontSize: 20, fontWeight: 'bold'}}>Amount of cases per {this.state.date} {this.state.month} {this.state.year}</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CurrentDate;
