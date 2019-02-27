import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainView from './components/MainView';
import Test from './components/Test';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {path:0, title:"ILLO"};
  }
  render() {
    const {path, title} = this.state;
    return (
      <View style={styles.container}>
        {
          path === 0
            ? <Test title={title} message="HELLO WORLD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" />
            : <MainView/>
        }
        <Button title="Test" onPress={() => this.pressTest()} />
        <Button title="MainView" onPress={() => this.pressMainView()} />
      </View>
    );
  }
  pressTest(){
    this.setState({path: 0, title: this.state.title === "ILLO" ? "HOLA" : "ILLO"});
  }
  pressMainView() {
    this.setState({...{path:1}});
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
