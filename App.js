import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

/*
Demo Scenes
 */
import DemoScreenOne from "./screens/intro/DemoScreenOne";

const AppNavigator = createSwitchNavigator({
    Demo: DemoScreenOne
}, {
    initialRouteName: "Demo",
    header: null,
    headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);

/*

  First Screen of Demo:
    Chip Tune (Cheery) Intro music on title screen that says "press to start demo"
    The urchin of quest pops on screen. (Name on top right in a badge)
    Text box pops up from the bottom with a lil whoosh
    Text starts appearing on screen slowly, introducing "Cheese Poof"

 */

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppContainer/>
        );
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
