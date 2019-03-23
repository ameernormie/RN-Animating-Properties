import React from "react";
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Animating Properties</Text>
        <View
          style={{
            alignSelf: "stretch",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Opacity")}
            style={{
              padding: 10,
              borderRadius: 7,
              marginBottom: 15,
              backgroundColor: "tomato"
            }}
          >
            <Text style={{ fontSize: 15 }}>Opacity</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Translate")}
            style={{
              padding: 10,
              borderRadius: 7,
              marginBottom: 15,
              backgroundColor: "tomato"
            }}
          >
            <Text style={{ fontSize: 15 }}>Translate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Scale")}
            style={{
              padding: 10,
              borderRadius: 7,
              marginBottom: 15,
              backgroundColor: "tomato"
            }}
          >
            <Text style={{ fontSize: 15 }}>Scale</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AbsolutePosition")}
            style={{
              padding: 10,
              borderRadius: 7,
              marginBottom: 15,
              backgroundColor: "tomato"
            }}
          >
            <Text style={{ fontSize: 15 }}>Absolute Position</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Interpolate")}
            style={{
              padding: 10,
              borderRadius: 7,
              marginBottom: 15,
              backgroundColor: "tomato"
            }}
          >
            <Text style={{ fontSize: 15 }}>Interpolation</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
