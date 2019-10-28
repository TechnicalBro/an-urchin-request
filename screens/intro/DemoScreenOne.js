import React, {Component} from "react";
import {StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";

import * as Animatable from 'react-native-animatable';

import {Audio} from 'expo-av';

const cheesePoofZoom = {
    0: {
        opacity: 1,
        scale: 1,
    },
    0.5: {
        opacity: 1,
        scale: 0.85
    },
    1: {
        opacity: 1,
        scale: 0.75
    }
};

const cheesePoofSound = new Audio.Sound();

export default class DemoScreenOne extends Component {
    constructor(props){
        super(props);

        this.state = {
            soundPlayed: false,
        };

        this.playSound = this.playSound.bind(this);
    }

    componentDidMount() {
        try {
            cheesePoofSound.loadAsync(require('../../assets/sounds/cheese-poof.mp3'))
                .then(() => console.log("cheese-poof.mp3 loaded"));
        } catch (error) {
            console.error(error);
        }
    }

    playSound = async () => {
        if (this.state.soundPlayed === true) {
            try {
                cheesePoofSound.replayAsync({positionMillis: 0, shouldPlay: true}).then(() => console.log('cheese-poof.mp3 replayed'));
            } catch (error) {
                console.error(error);
            }
        }

        let self = this;
        try {
            cheesePoofSound.playAsync().then(
                () => {
                    self.setState({soundPlayed: true});
                }
            )
        } catch(error) {
            console.error(error);
        }
    };

    render() {
        return (

            <View style={styles.container}>

                <ImageBackground
                    source={require("../../assets/images/scene1-bg.png")}
                    resizeMode="stretch"
                    style={styles.image}
                >


                    <Image
                        source={require("../../assets/images/scene1-title.png")}
                        resizeMode="contain"
                        style={styles.titleStyle}
                    />
                    <Image
                        source={require("../../assets/images/sea-urchin-smile.png")}
                        resizeMode="contain"
                        style={styles.urchinOfQuest}
                        ref={(ref) => {
                            this.urchin = ref;
                        }}
                    />

                    <TouchableOpacity style={styles.cheesePoofContainer} onPress={() => this.playSound()}>
                    <Animatable.Image
                        source={require("../../assets/images/scene-1-subtitle.png")}
                        resizeMode="contain"
                        style={styles.cheesePoofTextStyle}
                        animation={cheesePoofZoom}
                        iterationCount={"infinite"}
                        direction={"alternate"}
                    />
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: "100%",
        flex: 1
    },
    cheesePoofContainer: {
        width: "100%",
        top: "35%",
        height: "20%"
    },
    cheesePoofTextStyle: {
        width: "100%",
        height: "100%",
        top: "10%"
        // top: "85%",
        // left: "5%",
    },
    titleStyle: {
        width: "100%",
        height: "15%",
        top: "5%"
    },
    urchinOfQuest: {
        width: "100%",
        height: "30%",
        top: "15%",
    },
    image3Filler: {
        flex: 1
    }
});
