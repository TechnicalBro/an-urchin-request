import React, {Component} from "react";
import {StyleSheet, View, Image, ImageBackground, TouchableOpacity} from "react-native";

import * as Animatable from 'react-native-animatable';

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

export default class DemoScreenOne extends Component {
    render() {
        return (

            <View style={styles.container}>

                <ImageBackground
                    source={require("../../assets/images/scene1-bg.png")}
                    resizeMode="stretch"
                    style={styles.image}
                >
                    <Animatable.Image
                        source={require("../../assets/images/scene-1-subtitle.png")}
                        resizeMode="contain"
                        style={styles.cheesePoofTextStyle}
                        animation={cheesePoofZoom}
                        iterationCount={"infinite"}
                        direction={"alternate"}
                    />


                    <Image
                        source={require("../../assets/images/scene1-title.png")}
                        resizeMode="contain"
                        style={styles.image2}
                    />
                    <Image
                        source={require("../../assets/images/sea-urchin-smile.png")}
                        resizeMode="contain"
                        style={styles.image4}
                        ref={(ref) => {
                            this.urchin = ref;
                        }}
                    />

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
    cheesePoofTextStyle: {
        width: "90%",
        height: "15%",
        top: "85%",
        left: "5%",
    },
    image2: {
        width: "100%",
        height: "15%",
        top: 10
    },
    image4: {
        width: "100%",
        height: "30%",
        top: "15%",
    },
    image3Filler: {
        flex: 1
    }
});
