import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import writestory from "./screens/WriteStory";
import readstory from "./screens/ReadStory";
import wellcomeScreen from "./screens/wellcomeScreen";

export default class App extends React.Component {
  render() {
    <text style={styles.textcontainer}>welcome to story hub app</text>
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  wellcomeScreen:{screen : wellcomeScreen},
  read: { screen: readstory },
  write: { screen: writestory }

});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  textcontainer: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
