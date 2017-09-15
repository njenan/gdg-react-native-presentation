import React from 'react';
import styles from './style';
import {Animated, Platform, Button, Text, Image, View} from 'react-native';


export default class App extends React.Component {
    state = {
        fade: new Animated.Value(0),
        left: new Animated.Value(-200),
        spin: new Animated.Value(0)
    };

    render() {
        let platformSpecificText = Platform.select({
            ios: "Go to App Store",
            android: "Go to Play Store"
        });

        let fade = this.state.fade;
        let left = this.state.left;

        let spin = this.state.spin.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

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
                <Animated.Image style={{transform: [{rotate: spin}]}} source={require("./smiley.jpg")}/>
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

        let spin = this.state.spin;

        function spinner() {
            Animated.sequence([
                Animated.timing(
                    spin,
                    {
                        toValue: 1
                    }),
                Animated.timing(
                    spin,
                    {
                        toValue: 0
                    })
            ])
                .start(spinner);
        }

        spinner();
    }
}
