import * as React from 'react';
import { View, Text } from 'react-native';
const Progress = ({ amount }) => {
    return (<View>
        <Text>Progress: {amount}</Text>
    </View>);
};
export default Progress;
