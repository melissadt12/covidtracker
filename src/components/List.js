import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


class List extends React.Component{
    constructor(){
        super();

        this.state = {
            covidData: [],
            refreshing: false
        }
    }

    renderItem = ({item}) => (
        <View style= {styles.container}>
            <View style = {styles.box1}>
                <Text>{item.provinsi}</Text>
            </View>
            <View style= {styles.box2}>
                <Text>{item.kasusPosi}</Text>
            </View>
            <View style= {styles.box3}>
                <Text>{item.kasusSemb}</Text>
            </View>
            <View style= {styles.box4}>
                <Text>{item.kasusMeni}</Text>
            </View>
            
        </View>
    )

    onRefresh = () => {
        this.getDataApi();
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        this.setState({ refreshing: true })

        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi');
        const json = await response.json();
        this.setState({ covidData: json, refreshing: false})
        console.log(json)
    }

    render(){
        console.log(this.state.covidData)
        return(
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style= {styles.textbox}>Indonesia</Text>
                </View>
                <FlatList
                    data={this.state.covidData.data}
                    keyExtractor={item => item.fid.toString()}
                    renderItem= {this.renderItem}
                    refreshing= {this.state.refreshing}
                    onRefresh= {this.onRefresh}
                    showVerticalScrollIndicaton= {false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: '#000',
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textbox:{
        fontSize: 20,
        color: 'black',
        fontWeight: "bold",
        alignItems: 'center'
    },
    box1: {
        height: 20,
        width: 200,
    },
    box2: {
        height: 20,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box3: {
        height: 20,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'yellowgreen',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box4: {
        height: 20,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default List;