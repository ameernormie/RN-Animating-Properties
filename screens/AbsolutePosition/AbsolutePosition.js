import React from "react";
import { Animated, Text, View, TouchableWithoutFeedback } from "react-native";

class Absolute extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 40,
      duration: 1500
    }).start();
  };

  render() {
    const { animation } = this.state;
    const animatedStyle = {
      top: animation,
      left: animation,
      right: animation
    };
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[
              {
                top: 0,
                left: 0,
                right: 0,
                position: "absolute",
                height: 100,
                backgroundColor: "tomato"
              },
              animatedStyle
            ]}
          >
            <Text>Absolute</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Absolute;
