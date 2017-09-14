import React from 'react';
import styles from './style';
import {Animated, Platform, Button, Text, View} from 'react-native';


export default class App extends React.Component {
    state = {
        fade: new Animated.Value(0),
        left: new Animated.Value(-200)
    };

    render() {
        let platformSpecificText = Platform.select({
            ios: "Go to App Store",
            android: "Go to Play Store"
        });

        let fade = this.state.fade;
        let left = this.state.left;

        return (
            <View style={styles.container}>
                <Text>Hello {Platform.OS} users!</Text>
                <Button title={platformSpecificText} onPress={function () {
                }}>Asdf</Button>

                <Animated.View style={{opacity: fade}}>
                    <Text>Fading in</Text>
                </Animated.View>
                <Animated.View style={{marginLeft: left}}>
                    <Text>Bouncing</Text>
                </Animated.View>
            </View>
        );
    }

    componentDidMount() {
        Animated.timing(
            this.state.fade,
            {
                toValue: 1, duration: 5000
            })
            .start();

        let left = this.state.left;
        function bounceLeft() {
            Animated.spring(
                left,
                {
                    toValue: 200
                })
                .start(bounceRight);
        }
        
        function bounceRight() {
            Animated.spring(
                left,
                {
                    toValue: -200
                })
                .start(bounceLeft);
        }
        
        bounceLeft();
    }
}
