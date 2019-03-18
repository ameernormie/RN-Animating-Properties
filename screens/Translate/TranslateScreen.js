import React from "react";
import { Animated, View, TouchableWithoutFeedback } from "react-native";

class Translate extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 200,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    const { animation } = this.state;
    const animatedStyle = {
      transform: [{ translateY: animation }]
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
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Translate;
