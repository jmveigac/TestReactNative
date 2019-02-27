import React from 'react';
import { Text, View, Button } from 'react-native';

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: props.message, title: props.title || "HOLA" };
    }
    render() {
        const {message, title} = this.state;
        return (
            <View>
                <Text>ESTO: {message}</Text>
                <Button title={title}
                    onPress={() => this.press()} />
            </View>
        );
    }
    press() {
        this.setState({ message: "HELLO WORRRRRRRRRRRLLLLLLDDDDDDDD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" });
    }
}