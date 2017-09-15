import React from 'react';
import {
    Button,
    FlatList,
    Text,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        let {navigate} = this.props.navigation;
        return <View>

            <Text>Hello, Navigation!</Text>
            <Button title="Go To Dogs" onPress={() => navigate('List', {type: 'dogs'})}></Button>
            <Button title="Go To Cats" onPress={() => navigate('List', {type: 'cats'})}></Button>

        </View>;
    }
}

class List extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        let data = {
            dogs: [
                {key: 'Basset Hound'},
                {key: 'German Shepard'},
                {key: 'Bull dog'}
            ],
            cats: [
                {key: 'Calico'},
                {key: 'Ragdoll'},
                {key: 'Ocelot'}
            ]
        }[this.props.navigation.state.params.type];
            
        return <View>
            <Text>Here is your list!</Text>

            <FlatList
                data={data}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        </View>;
    }
}

export default SimpleApp = StackNavigator({
    Home: {screen: HomeScreen},
    List: {screen: List}
});

