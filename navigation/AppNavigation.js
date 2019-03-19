import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Opacity from "../screens/Opacity/Opacity";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Translate from "../screens/Translate/TranslateScreen";
import Scale from "../screens/Scale/ScaleScreen";

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
    }
  },

  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
