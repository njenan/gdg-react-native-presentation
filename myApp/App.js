import React from 'react';
import styles from './style';
import {Platform, Button, Text, View} from 'react-native';


export default class App extends React.Component {
    render() {
        let platformSpecificText = Platform.select({
            ios: "Go to App Store",
            android: "Go to Play Store"
        });

        return (
            <View style={styles.container}>
                <Text>Hello {Platform.OS} users!</Text>
                <Button title={platformSpecificText} onPress={function(){}}>Asdf</Button>
            </View>
        );
    }
}
