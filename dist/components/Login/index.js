import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
class Main extends React.Component {
    constructor() {
        super(...arguments);
        this.onTextChanged = (text) => {
            this.userName = text;
            if (text && text.length > 5) {
                Actions.pop();
            }
        };
        this.userName = 'unknown';
    }
    render() {
        return (<View style={{ padding: 20, flex: 1 }}>
                <Text>Login</Text>
                <TextInput style={{ width: 200 }} placeholder='Username' autoFocus keyboardType='email-address'/>
                <TextInput style={{ width: 200 }} placeholder='Password' secureTextEntry onChangeText={(name) => this.onTextChanged(name)}/>
            </View>);
    }
}
export default Main;
