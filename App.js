import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class App extends React.Component {
  alert = () => {
    Alert.alert(alert, "You pressed the click Button");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>I</Text>
        <Image source={require("./assets/heart.jpg")} style={styles.image} />
        <Text>CodeYourFuture</Text>
        <Button
          onPress={this.alert}
          title="Click"
          color="#841584"
          accessibilityLabel="Click"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 150,
    height: 150
  }
});
