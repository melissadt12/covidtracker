import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './src/components/List';
import Header from './src/components/Header';
import Global from './src/components/totalGlobal';
import SubHeader from './src/components/SubHeader';
import CurrentDate from './src/components/CurrentDate';

class App extends Component {

  componentDidMount(){

  }
  
  render(){
    return (
      <View style= {styles.container}>
        <View style= {styles.headerbox}>
          <Header/>
        </View>
        <View style= {styles.box1}>
          <CurrentDate/>
          <SubHeader/>
          <Global/>
        </View>
        <View style= {styles.box2}>
          <List/>
        </View>
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  headerbox:{
    flex: 0.5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  box1:{
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  box2: {
    flex: 10,
    backgroundColor: 'white'
  }
  
});

export default App;
