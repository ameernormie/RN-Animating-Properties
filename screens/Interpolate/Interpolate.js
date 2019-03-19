import React from "react";
import { Animated, View, TouchableWithoutFeedback } from "react-native";

class Interpolate extends React.Component {
  state = {
    animation: new Animated.Value(0),
    rotationAnimation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  startRotationAnimation = () => {
    Animated.timing(this.state.rotationAnimation, {
      toValue: 360,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.rotationAnimation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    const { animation, rotationAnimation } = this.state;
    const boxInterpolation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"]
    });

    const colorInterpolation = animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(99,71,255)", "rgb(255,99,71)"]
    });

    const rotateInterpolation = rotationAnimation.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"]
    });

    const boxAnimatedStyle = {
      backgroundColor: boxInterpolation
    };
    const textColorStyle = {
      color: colorInterpolation
    };

    const rotateAnimationStyle = {
      transform: [
        {
          rotate: rotateInterpolation
        }
      ]
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[
              {
                height: 100,
                width: 100,
                alignItems: "center",
                justifyContent: "center"
              },
              boxAnimatedStyle
            ]}
          >
            <Animated.Text style={[textColorStyle]}>
              Color Interpolation
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        {/* Rotation Interpolation */}
        <TouchableWithoutFeedback onPress={this.startRotationAnimation}>
          <Animated.View
            style={[
              {
                height: 100,
                width: 100,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "tomato"
              },
              rotateAnimationStyle
            ]}
          >
            <Animated.Text style={[textColorStyle]}>
              Rotation Interpolation
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Interpolate;
