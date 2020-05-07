import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Global extends React.Component{
    constructor(){
        super();

        this.state = {
            globalData: [],
            positif:'',
            meninggal: '',
            sembuh: ''
        }
    }



    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({ positif: json.confirmed.value })
        this.setState({ sembuh: json.recovered.value })
        this.setState({ meninggal: json.deaths.value })
        console.log(json)
    }


    render(){
        return (
            <View style= {styles.container}>
                <View style= {styles.confirmedBox}>
                    <Text>Positif</Text>
                    <Text style= {styles.textBox}>{this.state.positif}</Text>
                </View>
                <View style= {styles.recoveredBox}>
                    <Text>Sembuh</Text>
                    <Text style= {styles.textBox}>{this.state.sembuh}</Text>
                </View>
                <View style= {styles.deathBox}>
                    <Text>Meninggal</Text>
                    <Text style= {styles.textBox}>{this.state.meninggal}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    confirmedBox: {
        height: 100,
        width: 120,
        borderRadius: 10,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    recoveredBox:{
        height: 100,
        width: 120,
        borderRadius: 10,
        backgroundColor: 'yellowgreen',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deathBox: {
        height: 100,
        width: 120,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBox: {
        fontSize: 17,
        color: 'black',
        fontWeight: "bold",
        alignItems: 'center'
    }
})

export default Global;
