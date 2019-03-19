import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Opacity from "../screens/Opacity/Opacity";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Translate from "../screens/Translate/TranslateScreen";
import Scale from "../screens/Scale/ScaleScreen";
import Absolute from "../screens/AbsolutePosition/AbsolutePosition";
import Interpolate from "../screens/Interpolate/Interpolate";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Opacity: {
      screen: Opacity
    },
    Translate: {
      screen: Translate
    },
    Scale: {
      screen: Scale
    },
    AbsolutePosition: {
      screen: Absolute
    },
    Interpolate: {
      screen: Interpolate
    }
  },

  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
