import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import MainView from './components/MainView';
import Test from './components/Test';
import LoaderExample from './components/LoaderExample';

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
            : path === 1 ? <MainView/>
            : path === 2 ? <LoaderExample/>
            : alert('path incorrect')
        }
        <Button title="Test" onPress={() => this.pressTest()} />
        <Button title="MainView" onPress={() => this.pressMainView()} />
        <Button title="LoaderExample" onPress={() => this.pressLoaderExample()} />
      </View>
    );
  }
  pressTest(){
    this.setState({path: 0, title: this.state.title === "ILLO" ? "HOLA" : "ILLO"});
  }
  pressMainView() {
    this.setState({...{path:1}});
  }
  pressLoaderExample(){
    this.setState({...{path:2}});
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
