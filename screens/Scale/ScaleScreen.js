import React from "react";
import { Animated, Text, View, TouchableWithoutFeedback } from "react-native";

class Scale extends React.Component {
  state = {
    animation: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1500
      }).start();
    });
  };

  render() {
    const { animation } = this.state;
    const animatedStyle = {
      transform: [{ scaleX: animation }]
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
              { height: 100, width: 100, backgroundColor: "tomato" },
              animatedStyle
            ]}
          >
            <Text>FLIP THIS TEXT</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Scale;
