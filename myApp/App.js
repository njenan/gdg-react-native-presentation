import React from 'react';
import {
    AppRegistry,
    Button,
    Text,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        let { navigate } = this.props.navigation;
        return <View>
            
            <Text>Hello, Navigation!</Text>
            <Button title="Go To List" onPress={() => navigate('List')}></Button>

        </View>;
    }
}

class List extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return <View>
            <Text>Here is your list!</Text>
            

        </View>;
    }
}

export default SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    List: {screen: List}
});

